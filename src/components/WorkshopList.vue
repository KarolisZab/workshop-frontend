<template>
    <div>
      <AppNavbar /> <!-- Assuming you have Navbar and Footer components -->
      <div class="workshops">
        <h1>Workshops List</h1>
        <div class="workshop-cards">
          <div v-for="workshop in workshops" :key="workshop.id" class="card">
            <h2 class="workshop-title">{{ workshop.title }}</h2>
            <p>{{ workshop.category }}</p>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

// Define Workshop interface
interface Workshop {
  id: string;
  title: string;
  category: string;
  // Add more properties based on your workshop object structure
}

export default defineComponent({
    name: 'WorkshopList',
    setup() {
        const workshops = ref<Workshop[]>([]);
  
        const fetchWorkshops = async () => {
            try {

                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Token not found. Please login.');
                    return;
                }
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const response = await axios.get('http://localhost:3000/api/workshop', { headers });
                //const response = await axios.get('https://oyster-app-zot66.ondigitalocean.app/api/workshop', { headers });
                workshops.value = response.data;
            } catch (error) {
                console.error('Error fetching workshops', error);
            }
        };
  
        onMounted(fetchWorkshops);
  
        return {
            workshops,
        };
    },
});
</script>
  
<style scoped>
.workshop-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
  
.card {
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
    width: 300px; /* Adjust width as needed */
}
  
.workshop-title {
    font-weight: bold;
}
</style>