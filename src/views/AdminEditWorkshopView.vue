<template>
    <div>
      <div class="container"> <!-- Assuming you have a container for your content -->
        <EditWorkshop /> <!-- Include your WorkshopList component here -->
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  //import AppNavbar from '../components/AppNavbar.vue';
  //import AppFooter from '../components/AppFooter.vue';
  import EditWorkshop from '../components/AdminEditWorkshop.vue'; // Import your WorkshopList component
  
  export default defineComponent({
    name: 'EditView',
    components: {
      //AppNavbar,
      //AppFooter,
      EditWorkshop, // Register the WorkshopList component
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