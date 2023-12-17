<template>
    <div>
      <WorkshopDetails />
      <!-- <WorkerList /> -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import WorkshopDetails from '@/components/WorkshopDetails.vue'; // Replace with correct path
  //import WorkerList from '@/components/WorkerList.vue'; // Replace with correct path
  
  export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkshopDetails,
      //WorkerList,
    },
  });
  </script>