<template>
    <div class="container mt-5">
      <h1>Create Worker</h1>
      <form @submit.prevent="createWorker" class="row g-3">
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" placeholder="Enter user email" required>
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name" placeholder="Enter worker name" required>
        </div>
        <div class="col-md-6">
          <label for="surname" class="form-label">Surname</label>
          <input type="text" class="form-control" v-model="surname" placeholder="Enter worker surname" required>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Create Worker</button>
        </div>
      </form>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import { AxiosError } from 'axios';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'WorkerCreate',
    setup() {
      const router = useRouter();
      const name = ref('');
      const surname = ref('');
      const email = ref('');
  
      axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && error.response.status === 403) {
                    console.error('403 Forbidden - Access Denied');
                    router.push('/');
                }
                return Promise.reject(error);
            }
        );

      const createWorker = async () => {
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Token not found. Please login.');
            return;
          }
          const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
  
          const workshopId = router.currentRoute.value.params.id; 
  
          const response = await axios.post(`http://localhost:3000/api/workshop/${workshopId}/workers`, {
            email: email.value,
            name: name.value,
            surname: surname.value,
          }, {
            headers,
          });
  
          console.log('Worker created:', response.data);
  
          if (response.status === 201) {
            router.push(`/workshop/${workshopId}/workers`); 
          } else {
            console.error('Unexpected response:', response);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
  
            if (axiosError.response) {
              console.error('Worker creation failed:', axiosError.response.data);
              console.error('Status code:', axiosError.response.status);
            } else if (axiosError.request) {
              console.error('No response received:', axiosError.request);
            } else {
              console.error('Error:', axiosError.message);
            }
          } else {
            console.error('Non-Axios error occurred:', error);
          }
        }
      };
  
      return {
        name,
        surname,
        email,
        createWorker,
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
  