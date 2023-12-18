<template>
    <div class="duties-list">
      <h1>{{ worker?.name }} {{ worker?.surname }} Duties</h1>
      <div class="duty-cards">
        <div v-for="duty in duties" :key="duty.id" class="card" @click="navigateToDuty(duty.id)">
          <p>{{ duty.duty }}</p>
          <!-- <p>{{ duty.description }}</p> -->
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  
  interface Duty {
    id: string;
    duty: string;
    description: string;
  }
  
  export default defineComponent({
    name: 'DutiesList',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const worker = ref<any>(null); 
      const duties = ref<Duty[]>([]);
  
      const fetchDuties = async () => {
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
            //'Context-Type': 'application/json',
          };
  
          const workshopId = route.params.id as string;
          const workerId = route.params.workerId as string;
  
          const workerResponse = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId}`);
          worker.value = workerResponse.data;
  
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