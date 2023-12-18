<template>
    <div>
      <WorkshopDetails />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import WorkshopDetails from '@/components/WorkshopDetails.vue'; 
  
  export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkshopDetails,
    },
  });
  </script>