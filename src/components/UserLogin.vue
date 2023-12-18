<template>
    <!-- <div>
      <form @submit.prevent="registerUser">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div> -->



    <div class="container mt-5">
    <h1 class="mb-4">Login</h1>
    <form @submit.prevent="loginUser" class="row g-3">
      <div class="col-md-6">
        <label for="username" class="form-label">Email</label>
        <input type="text" class="form-control" v-model="username" placeholder="Enter your email" required>
      </div>
      <div class="col-md-6">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="Enter your password" required>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
    </div>

</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';
//import { isLoggedIn } from './AppNavbar.vue';
//import { useStore } from 'vuex';

export default defineComponent({
  name: 'UserLogin',
  setup() {
    const router = useRouter();
    //const store = useStore();
    const username = ref('');
    const password = ref('');

    const loginUser = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          username: username.value,
          password: password.value,
        });

        console.log('Login successful:', response.data);

        localStorage.setItem('token', response.data.access_token);

       // isLoggedIn.value = true;
       //store.dispatch('auth/updateRoles', response.data.roles);

        if (response.status === 200 || response.data.message === 'User registered successfully!') {
          //store.commit('setRoles', response.data.roles);
          //store.dispatch('auth/updateRoles', response.data.roles);
          router.push('/');
        } else {
          console.error('Unexpected response:', response);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;

            // Handle Axios errors (response received)
            if (axiosError.response) {
            console.error('Login failed:', axiosError.response.data);
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
      username,
      password,
      loginUser,
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