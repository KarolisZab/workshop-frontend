<template>
    <div class="edit-workshop">
      <h1>Edit Workshop</h1>
      <form @submit.prevent="updateWorkshop">
        <div>
          <label for="title">Title</label>
          <input type="text" v-model="workshop.title" id="title">
        </div>
        <div>
          <label for="category">Category</label>
          <input type="text" v-model="workshop.category" id="category">
        </div>
        <div>
          <button class="button" type="submit">Update Workshop</button>
        </div>
      </form>
    </div>
</template>
  
  
<script>
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
//const token = localStorage.getItem('access_token');

  export default defineComponent({
    name: 'EditWorkshop',
    data() {
      return {
        workshop: {
          id: '', 
          title: '',
          category: '',
        },
      };
    },
    methods: {
        async fetchWorkshopDetails() {
            const workshopId = this.$route.params.id;
            try {
                const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId}`);
                this.workshop = response.data;
            } catch (error) {
                console.error('Error fetching workshop details:', error);
            }
        },
        async updateWorkshop() {
            try {
                const token = localStorage.token;
                console.log(localStorage);
                console.log('Retrieved token', token);
                if (!token) {
                    console.error('Access token not found. Please login.');
                return;
                }

                const headers = {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                };

                const workshopId = this.$route.params.id;

                const response = await axios.patch(`http://localhost:3000/api/workshop/${workshopId}`, this.workshop, { 
                    headers,
                });

                console.log('Workshop update response:', response);

                if (response.status === 200) {
                    console.log('Workshop updated:', response.data);
                    this.$router.push('/');
                } else {
                console.error('Workshop update failed. Unexpected response:', response);
                }
            } catch (error) {
              if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                  console.error('403 Forbidden - Access Denied');
                  this.$router.push('/');
              } else {
                  console.error('Error updating workshop:', error);
              }
            }
        },
    },
    mounted() {
      this.fetchWorkshopDetails(); 
    },
  });
</script>
  
<style scoped>
  .edit-workshop {
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