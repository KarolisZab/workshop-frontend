<template>
    <div class="delete-workshop">
      <h1>Delete worker</h1>
      <div>
        <p>Are you sure you want to delete "{{ worker?.name }}"?</p>
        <button @click="deleteWorker">Confirm Delete</button>
      </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

interface Worker {
  id: string;
  name: string;
  surname: string;
  // Add other properties of the worker if needed
}

export default defineComponent({
  name: 'WorkerDelete',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const workerId = ref<string | null>(null);
    const worker = ref<Worker | null>(null);
    const token = localStorage.token;

    const fetchWorkerDetails = async () => {
      const workshopId = route.params.id as string; // Get workshop ID from the route parameter
      const workerIdFromRoute = route.params.workerId as string; // Get worker ID from the route parameter
      workerId.value = workerIdFromRoute; // Assign workerId

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

        const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId.value}`, { headers });
        worker.value = response.data; // Assign worker details to the data property

      } catch (error) {
        console.error('Error fetching worker details:', error);
      }
    };

    onMounted(fetchWorkerDetails);

    const deleteWorker = async () => {
      if (!workerId.value) {
        console.error('Worker ID not found.');
        return;
      }

      try {
        if (!token) {
          console.error('Access token not found. Please login.');
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        await axios.delete(`http://localhost:3000/api/workshop/${route.params.id}/workers/${workerId.value}`, {
          headers,
        });
        console.log('Worker deleted successfully.');
        router.push(`/workshop/${route.params.id}/workers`); // Redirect to the workers list or any desired route
      } catch (error) {
        console.error('Error deleting worker:', error);
      }
    };

    return {
      worker,
      deleteWorker,
    };
  },
});
</script>
  
<style scoped>
.delete-workshop {
    max-width: 500px;
    margin: 0 auto;
}
  
button {
    padding: 10px 20px;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
  
button:hover {
    background-color: #e05030;
}
</style>