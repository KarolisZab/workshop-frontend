<template>
    <div>
      <div class="container"> <!-- Assuming you have a container for your content -->
        <WorkshopList /> <!-- Include your WorkshopList component here -->
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  //import AppNavbar from '../components/AppNavbar.vue';
  //import AppFooter from '../components/AppFooter.vue';
  import WorkshopList from '../components/WorkshopList.vue'; // Import your WorkshopList component
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      //AppNavbar,
      //AppFooter,
      WorkshopList, // Register the WorkshopList component
    },
  });
</script>
  
<style scoped>
  /* Add your component-specific styles here */
.container {
    max-width: 1100px;
    margin: 0 auto;
}
</style>