<template>
    <div>
      <div class="container"> <!-- Assuming you have a container for your content -->
        <DutiesList /> <!-- Include your WorkshopList component here -->
      </div>
      <div class="button-container">
        <RouterLink :to="`/workshop/${$route.params.id}/workers/${$route.params.workerId}/duties/create`">
          <button class="button">Create a new duty</button>
        </RouterLink>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  //import AppNavbar from '../components/AppNavbar.vue';
  //import AppFooter from '../components/AppFooter.vue';
  import DutiesList from '@/components/DutiesList.vue'; // Import your WorkshopList component
  
  export default defineComponent({
    name: 'DutiesView',
    components: {
      //AppNavbar,
      //AppFooter,
      DutiesList, // Register the WorkshopList component
    },
  });
</script>
  
<style scoped>
  /* Add your component-specific styles here */
.container {
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 20px;
}
.button-container {
  display: flex;
  justify-content: center; /* Centers the button horizontally */
  margin-bottom: 20px; /* Adds space between the button and WorkerList */
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.button:hover {
  background-color: #000;
  color: #fff;
}
</style>