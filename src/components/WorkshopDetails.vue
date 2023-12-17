<template>
    <div class="workshop-detail">
            <h1>{{ workshop?.title }}</h1>
            
            <!-- Other workshop details here -->
            <!-- <button class="button-edit" @click="redirectToEditForm">Edit workshop</button>
            <button class="button-delete" @click="redirectDeleteConfirm">Delete this workshop</button> -->
    </div>
    <p>{{ workshop?.category }}</p>
    <div class="dashboard">
        <RouterLink :to="`/workshop/${workshop?.id}/workers`" class="button">View workshop workers</RouterLink>
        <!-- <button class="button" @click="redirectToWorkers">View workshop workers</button> -->
        <button class="button-edit" @click="redirectToEditForm">Edit workshop</button>
        <button class="button-delete" @click="redirectDeleteConfirm">Delete this workshop</button>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
  import { useRouter } from 'vue-router';
  
  // Define Workshop interface
  interface Workshop {
    id: string;
    title: string;
    category: string;
    // Add more properties based on your workshop object structure
  }
  
  export default defineComponent({
    name: 'WorkshopDetail',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const workshopId = ref<string | null>(null);
        const workshop = ref<Workshop | null>(null);
      
      //   const isAdmin = (): boolean => {
      // // Decode the JWT token to access user information (role)
      // // Use the decoded token to determine if the user has admin rights
      // // You might need to replace 'decodeJWT' with your actual decoding logic
      //     const decodedToken = decodeJWT(localStorage.getItem('token'));
      //     return decodedToken?.role === 'ROLE_ADMIN';
      //   };

        const fetchWorkshopDetails = async () => {
            workshopId.value = route.params.id as string;
  
            try {
                const response = await axios.get(`http://localhost:3000/api/workshop/${workshopId.value}`);
                workshop.value = response.data;
            } catch (error) {
                console.error('Error fetching workshop details', error);
                router.replace({ name: 'NotFound' });
            }
        };

        onMounted(fetchWorkshopDetails);
  
        const redirectToEditForm = () => {
            if (workshop.value) {
                const editWorkshopRoute = `/workshop/${workshop.value.id}/edit`;
                router.push(editWorkshopRoute);
            }
        };

        const redirectDeleteConfirm = () => {
            if (workshop.value) {
                const deleteWorkshopRoute = `/workshop/${workshop.value.id}/delete`;
                router.push(deleteWorkshopRoute);
            }
        };

        // const redirectToWorkers = () => {
        //     if(workshop.value) {
        //         const redirectWorkers = `/workshop/${workshop.value.id}/workers`
        //     }
        // };

        return {
            workshop,
            redirectToEditForm,
            redirectDeleteConfirm,
            //redirectToWorkers,
        };
    },
  });
</script>

<style lang="scss" scoped>
// h1 {
//   text-align: center;
//   margin-top: 50px; /* Adjust as needed */
//   font-size: 2.5rem; /* Adjust the font size */
// }

.workshop-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-height: calc(100vh - 60px);
  overflow: auto;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

p {
    font-size: 1.5rem;
    //margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
}

.button-edit {
  padding: 8px 12px;
  background-color: #cf8735;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
}

.button-edit:hover {
  background-color: #774e1f;
}

.button-delete {
  padding: 8px 12px;
  background-color: #ca3945;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
}

.button-delete:hover {
  background-color: #660d11;
}

.button {
  display: block;
  width: 200px; /* Set the desired width */
  margin-bottom: 10px; /* Add some space between buttons */
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

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //height: 100vh;
  padding-top: 20px; /* Adjust top padding as needed */
  text-align: center;
}
</style>