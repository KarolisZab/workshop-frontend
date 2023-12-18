<template>
    <div class="delete-workshop">
      <h1>Delete Workshop</h1>
      <div>
        <p>Are you sure you want to delete "{{ workshop?.title }}" workshop?</p>
        <button @click="deleteWorkshop">Confirm Delete</button>
      </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
  
interface Workshop {
    id: string;
    title: string;
    category: string;
}
  
export default defineComponent({
    name: 'AdminDeleteWorkshop',
    setup() {
        const router = useRouter();
        const workshopId = ref<string | null>(null);
        const workshop = ref<Workshop | null>(null);
        const token = localStorage.token;
      
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

        const fetchWorkshopDetails = async () => {
        workshopId.value = router.currentRoute.value.params.id as string;
  
        try {
          const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId.value}`);
          workshop.value = response.data;
        } catch (error) {
          console.error('Error fetching workshop details:', error);
        }
      };
  
      onMounted(fetchWorkshopDetails);
  
      const deleteWorkshop = async () => {
            if (!workshopId.value) {
                console.error('Workshop ID not found.');
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
                
                await axios.delete(`http://localhost:3000/api/workshop/${workshopId.value}`, {
                    headers,
                });
                console.log('Workshop deleted successfully.');
                router.push('/'); 
            } catch (error) {
                console.error('Error deleting workshop:', error);
            }
      };
  
      return {
        workshop,
        deleteWorkshop,
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