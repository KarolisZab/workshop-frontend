<template>
    <div class="container mt-5">
      <h1 class="mb-4">Create Workshop</h1>
      <form @submit.prevent="createWorkshop" class="row g-3">
        <div class="col-md-6">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" v-model="title" placeholder="Enter workshop title" required>
        </div>
        <div class="col-md-6">
          <label for="category" class="form-label">Category</label>
          <input type="text" class="form-control" v-model="category" placeholder="Enter workshop category" required>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Create Workshop</button>
        </div>
      </form>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';
  
interface Workshop {
    id: string;
    title: string;
    category: string;
    // Add more properties based on your workshop object structure
}

export default defineComponent({
    name: 'CreateWorkshop',
    setup() {
      const router = useRouter();
      const title = ref('');
      const category = ref('');
  
      const createWorkshop = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(localStorage);

            if (!token) {
                console.error('Token not found. Please login.');
                return;
            }
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };

          
            const response = await axios.post('http://localhost:8080/api/workshop', {
            title: title.value,
            category: category.value,
          },
          {
            headers,
          });
  
          // Handle successful creation
          console.log('Workshop created:', response.data);
  
          // Redirect to the dashboard or another route on successful creation
          if (response.status === 201) {
            // Redirect to the admin dashboard or another route on successful creation
            router.push('/');
          } else {
            // Handle unexpected response data here if needed
            console.error('Unexpected response:', response);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
  
            // Handle Axios errors (response received)
            if (axiosError.response) {
              console.error('Workshop creation failed:', axiosError.response.data);
              console.error('Status code:', axiosError.response.status);
            } else if (axiosError.request) {
              // Handle request made but no response received
              console.error('No response received:', axiosError.request);
            } else {
              // Handle other Axios errors
              console.error('Error:', axiosError.message);
            }
          } else {
            // Handle non-Axios errors
            console.error('Non-Axios error occurred:', error);
          }
        }
      };
  
      return {
        title,
        category,
        createWorkshop,
      };
    },
});
</script>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  min-height: 100vh;
  width: 100%;
  background: #009579;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container h1 {
  margin-bottom: 20px;
  color: #000;
  font-weight: 500;
}

.form-label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.form-control {
  width: calc(100% - 20px);
  height: 40px;
  padding: 8px 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.btn-primary {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #FFA500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #FFC04A;
}
</style>