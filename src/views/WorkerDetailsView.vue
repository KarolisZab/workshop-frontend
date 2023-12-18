<template>
    <div>
      <WorkerDetails />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import WorkerDetails from '@/components/WorkerDetails.vue'; 
  
  export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkerDetails,
    },
  });
  </script>