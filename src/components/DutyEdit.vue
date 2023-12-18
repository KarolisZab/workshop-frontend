<template>
    <div class="edit-duty">
      <h1>Edit Duty</h1>
      <form @submit.prevent="updateDuty">
        <div>
          <label for="duty">Duty Name</label>
          <input type="text" v-model="duty.duty" id="duty">
        </div>
        <div>
          <label for="description">Description</label>
          <textarea v-model="duty.description" id="description"></textarea>
        </div>
        <div>
          <button class="button" type="submit">Update Duty</button>
        </div>
      </form>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'DutyEdit',
    data() {
      return {
        duty: {
          id: '',
          duty: '',
          description: '',
        },
      };
    },
    methods: {
      async fetchDutyDetails() {
        const workshopId = this.$route.params.id;
        const dutyId = this.$route.params.dutyId; 
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
          };
  
          const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${this.$route.params.workerId}/duties/${dutyId}`, { headers });
          this.duty = response.data; 
        } catch (error) {
          console.error('Error fetching duty details:', error);
        }
      },
      async updateDuty() {
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
  
          const workshopId = this.$route.params.id; 
          const dutyId = this.$route.params.dutyId;
  
          const response = await axios.patch(`http://localhost:3000/api/workshop/${workshopId}/workers/${this.$route.params.workerId}/duties/${dutyId}`, this.duty, {
            headers,
          });
  
          console.log('Duty update response:', response);
  
          if (response.status === 200) {
            console.log('Duty updated:', response.data);
            this.$router.push(`/workshop/${workshopId}/workers/${this.$route.params.workerId}/duties/${dutyId}`);
          } else {
            console.error('Duty update failed. Unexpected response:', response);
          }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
              console.error('403 Forbidden - Access Denied');
              this.$router.push('/');
          } else {
              console.error('Error updating duty:', error);
          }
        }
      },
    },
    mounted() {
      this.fetchDutyDetails();
    },
  });
</script>
  
<style scoped>
/* .edit-duty {
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
} */

.edit-duty {
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

input,
textarea {
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

.description-field {
  display: flex;
  flex-direction: column;
}

.description-field label {
  order: -1; 
}

</style>