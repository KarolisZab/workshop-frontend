<template>
    <div class="edit-worker">
      <h1>Edit Worker</h1>
      <form @submit.prevent="updateWorker">
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="worker.name" id="name">
        </div>
        <div>
          <label for="surname">Surname</label>
          <input type="text" v-model="worker.surname" id="surname">
        </div>
        <!-- Add other fields as needed for editing workers -->
        <div>
          <button class="button" type="submit">Update Worker</button>
        </div>
      </form>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  //const token = localStorage.token;

  export default defineComponent({
    name: 'WorkerEdit',
    data() {
      return {
        worker: {
          id: '', // Worker ID will be captured from the route parameter
          name: '',
          position: '',
          // Other properties of the worker
        },
      };
    },
    methods: {
      async fetchWorkerDetails() {
        const workshopId = this.$route.params.id; // Get workshop ID from the route parameter
        const workerId = this.$route.params.workerId; // Get worker ID from the route parameter
        try {
            const token = localStorage.token;
            if (!token) {
                console.error('Access token not found. Please login.');
                // Handle token absence, e.g., redirect to login page
                return;
            }
    
            const headers = {
                Authorization: `Bearer ${token}`,
                //'Content-Type': 'application/json',
            };

            const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId}`, { headers });
            this.worker = response.data; // Assign worker details to the data property

        } catch (error) {
            console.error('Error fetching worker details:', error);
        }
      },
      async updateWorker() {
        try {
            const token = localStorage.token;
            if (!token) {
                console.error('Access token not found. Please login.');
                // Handle token absence, e.g., redirect to login page
                return;
            }
    
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };

            const workshopId = this.$route.params.id; // Get workshop ID from the route parameter
            const workerId = this.$route.params.workerId;

            const response = await axios.patch(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId}`, this.worker, {
                headers,
            });

            console.log('Workshop update response:', response);

            if (response.status === 201) {
                console.log('Worker updated:', response.data);
                // Redirect to the dashboard or another route on successful update
                this.$router.push(`/workshop/${workshopId}/workers`);
            } else {
                console.error('Worker update failed. Unexpected response:', response);
            }
        } catch (error) {
            console.error('Error updating worker:', error);
            // Handle errors
        }
      },
    },
    mounted() {
      this.fetchWorkerDetails(); // Fetch worker details when the component is mounted
    },
  });
</script>
  
<style scoped>

.edit-worker {
    max-width: 500px;
    margin: 0 auto;
}
  
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
  
label {
    font-weight: bold;
}
  
input {
    padding: 5px;
    width: 100%;
}
.button {
  display: block;
  width: 200px; 
  margin-bottom: 10px; 
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  text-align: center;
}

.button:hover {
  background-color: #000;
  color: #fff;
}
</style>