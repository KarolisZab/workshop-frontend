<template>
    <!-- <div class="worker-details">
      <h1>Worker Details</h1>
      <div v-if="worker">
        <h2>{{ worker.name }}</h2>
        <p>{{ worker.surname }}</p>
        <button @click="redirectToEditForm">Edit Worker</button>
        <button @click="redirectDeleteConfirm">Delete Worker</button>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div> -->
    <div class="worker-details">
        <h1>Worker Details</h1>
        <div v-if="worker" class="worker-card">
            <div class="card-content">
                <p>{{ worker.name }}</p>
                <h2>{{ worker.surname }}</h2>
                <!-- Add other worker details here -->
            </div>
            <!-- <div class="button-container">
                <button @click="redirectToEditForm" class="edit-button">Edit Worker</button>
                <button @click="redirectDeleteConfirm" class="delete-button">Delete Worker</button>
            </div> -->
        </div>
        <div class="button-container">
            <RouterLink :to="`/workshop/${$route.params.id}/workers/${worker?.id}/duties`" class="button">View worker's duties</RouterLink>
        </div>
        <div class="button-container">
                <button @click="redirectToEditForm" class="edit-button">Edit Worker</button>
                <button @click="redirectDeleteConfirm" class="delete-button">Delete Worker</button>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter, useRoute } from 'vue-router';
  
  interface Worker {
    id: string;
    name: string;
    surname: string;
  }
  
  export default defineComponent({
    name: 'WorkerDetails',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const workerId = ref<string | null>(null);
      const worker = ref<Worker | null>(null);
  
      const fetchWorkerDetails = async () => {
        workerId.value = route.params.workerId as string;
  
        try {
            const token = localStorage.token;
            if (!token) {
                console.error('Access token not found. Please login.');
                return;
            }
    
            const headers = {
                Authorization: `Bearer ${token}`,
            };
          
            const response = await axios.get(`http://localhost:3000/api/workshop/${route.params.id}/workers/${workerId.value}`, { headers });
            worker.value = response.data;
        } catch (error) {
            console.error('Error fetching worker details', error);
            router.replace({ name: 'NotFound' });
        }
      };
  
      onMounted(fetchWorkerDetails);
      
      const redirectToDuties = () => {
        const workshopId = route.params.id as string;
        const workerId = route.params.workerId as string;
        router.push({ name: 'DutiesList', params: { workshopId, workerId } });
    };

      const redirectToEditForm = () => {
        if (worker.value) {
          const editWorkerRoute = `/workshop/${route.params.id}/workers/${worker.value.id}/edit`;
          router.push(editWorkerRoute);
        }
      };
  
      const redirectDeleteConfirm = () => {
        if (worker.value) {
          const deleteWorkerRoute = `/workshop/${route.params.id}/workers/${worker.value.id}/delete`;
          router.push(deleteWorkerRoute);
        }
      };
  
      return {
        worker,
        redirectToEditForm,
        redirectDeleteConfirm,
        redirectToDuties,
      };
    },
  });
</script>
  
<style lang="scss" scoped>
  .worker-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.worker-card {
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.card-content {
  margin-bottom: 20px;
}


.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}


.edit-button,
.delete-button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 10px;
}

.edit-button:hover {
  background-color: #cf8735;
  color: white;
}

.delete-button:hover {
  background-color: #ca3945;
  color: white;
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