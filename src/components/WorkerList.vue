<template>
    <div class="workers-list">
      <h1>{{ workshop?.title }} Workers</h1>
      <!-- Display workers for the specific workshop -->
      <div class="worker-cards">
        <div v-for="worker in workers" :key="worker.id" class="card" @click="navigateToWorker(worker.id)">
          <p>{{ worker.name }}</p>
          <h2>{{ worker.surname }}</h2>
          <!-- Add other worker details if needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  

  // Define Worker interface
  interface Worker {
    id: string;
    name: string;
    surname: string;
    // Add other properties as needed
  }
  
  export default defineComponent({
    name: 'WorkersList',
    setup() {
      const route = useRoute();
      const router = useRouter();
      //const workshopId = ref<string | null>(null);
      const workshop = ref<any>(null); // Modify Workshop type as needed
      const workers = ref<Worker[]>([]);
  
      const fetchWorkshopAndWorkers = async () => {
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            // Handle token absence, e.g., redirect to login page
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
          };
  
          //workshopId.value = route.params.id as string;
          const workshopId = route.params.id as string;
  
        //   // Fetch workshop details
          const workshopResponse = await axios.get(`http://localhost:3000/api/workshop/${workshopId}`);
          workshop.value = workshopResponse.data;
          console.log(workshop.value);
          // Fetch workers for the workshop
          const workersResponse = await axios.get(`http://localhost:3000/api/workshop/${workshop.value.id}/workers`, { headers });
          workers.value = workersResponse.data;
        } catch (error) {
          console.error('Error fetching workshop and workers:', error);
        }
      };
      
      const navigateToWorker = (workerId: string) => {
        const workshopId = route.params.id as string;
        router.push({ name: 'WorkerDetails', params: { id: workshopId, workerId } });
      };

      onMounted(fetchWorkshopAndWorkers);
  
      return {
        workshop,
        workers,
        //workshopId,
        navigateToWorker,
      };
    },
  });
  </script>
  
  <style scoped>
  /* .workers-list {
    
  } */
  
  .worker-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  
  .card:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>