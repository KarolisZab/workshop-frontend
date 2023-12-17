<template>
    <div>
      <WorkerDetails />
      <!-- <WorkerList /> -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import WorkerDetails from '@/components/WorkerDetails.vue'; // Replace with correct path
  //import WorkerList from '@/components/WorkerList.vue'; // Replace with correct path
  
  export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkerDetails,
      //WorkerList,
    },
  });
  </script>