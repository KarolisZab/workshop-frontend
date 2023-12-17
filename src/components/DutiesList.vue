<template>
    <div class="duties-list">
      <h1>{{ worker?.name }} {{ worker?.surname }} Duties</h1>
      <!-- Display duties for the specific worker -->
      <div class="duty-cards">
        <div v-for="duty in duties" :key="duty.id" class="card" @click="navigateToDuty(duty.id)">
          <p>{{ duty.duty }}</p>
          <!-- <p>{{ duty.description }}</p> -->
          <!-- Display other duty details as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  
  // Define Duty interface
  interface Duty {
    id: string;
    duty: string;
    description: string;
    // Add other properties as needed
  }
  
  export default defineComponent({
    name: 'DutiesList',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const worker = ref<any>(null); // Modify Worker type as needed
      const duties = ref<Duty[]>([]);
  
      const fetchDuties = async () => {
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            // Handle token absence, e.g., redirect to login page
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
            //'Context-Type': 'application/json',
          };
  
          const workshopId = route.params.id as string;
          const workerId = route.params.workerId as string;
  
          // Fetch worker details
          const workerResponse = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId}`);
          worker.value = workerResponse.data;
  
          // Fetch duties for the worker within the workshop
          const dutiesResponse = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId}/duties`, { headers });
          duties.value = dutiesResponse.data;
        } catch (error) {
          console.error('Error fetching duties:', error);
        }
      };
  
        const navigateToDuty = (dutyId: string) => {
            const workshopId = route.params.id as string;
            const workerId = route.params.workerId as string;
            router.push({ name: 'DutyDetails', params: { workshopId, workerId, dutyId } });
        };

        onMounted(fetchDuties);
  
        return {
            worker,
            duties,
            navigateToDuty,
        };
    },
  });
  </script>
  
  <style scoped>
  /* .duties-list {
    ...
  } */
  
  .duty-cards {
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