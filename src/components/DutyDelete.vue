<template>
    <div class="delete-duty">
      <h1>Delete Duty</h1>
      <div>
        <p>Are you sure you want to delete "{{ duty?.duty }}"?</p>
        <button @click="deleteDuty">Confirm Delete</button>
      </div>
    </div>
</template>

<!-- <template>
    <div class="delete-duty">
      <h1>Delete Duty</h1>
      <div>
        <p>Are you sure you want to delete "{{ duty?.duty }}"?</p>
        <button @click="showModal = true">Confirm Delete</button>
  
        
        <AppModal v-if="showModal" @close="showModal = false" @confirm="deleteDuty">
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete "{{ duty?.duty }}"?</p>
          <button @click="deleteDuty">Confirm</button>
          <button @click="showModal = false">Cancel</button>
        </AppModal>
      </div>
    </div>
</template> -->
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  //import AppModal from '@/components/AppModal.vue'
  
  interface Duty {
    id: string;
    duty: string;
    description: string;
  }
  
  export default defineComponent({
    name: 'DutyDelete',
    components: {
        //AppModal,
    },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const dutyId = ref<string | null>(null);
      const duty = ref<Duty | null>(null);
      const token = localStorage.token;
      const showModal = ref(false);

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
  
      const fetchDutyDetails = async () => {
        const workshopId = route.params.id as string; 
        const workerId = route.params.workerId as string; 
        dutyId.value = route.params.dutyId as string; 
  
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
          };
  
          const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId}/workers/${workerId}/duties/${dutyId.value}`, { headers });
          duty.value = response.data; 
        } catch (error) {
          console.error('Error fetching duty details:', error);
        }
      };
  
      onMounted(fetchDutyDetails);
  
      const deleteDuty = async () => {
        if (!dutyId.value) {
          console.error('Duty ID not found.');
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
  
          await axios.delete(`http://localhost:3000/api/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${dutyId.value}`, {
            headers,
          });
          console.log('Duty deleted successfully.');
          router.push(`/workshop/${route.params.id}/workers/${route.params.workerId}/duties`);
        } catch (error) {
          console.error('Error deleting duty:', error);
        }
      };
  
      return {
        duty,
        deleteDuty,
        //showModal,
      };
    },
  });
  </script>
  
  <style scoped>
  .delete-duty {
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