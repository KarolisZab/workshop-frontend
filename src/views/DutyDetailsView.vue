<template>
    <div>
      <DutyDetails />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import DutyDetails from '@/components/DutyDetails.vue'; // Replace with correct path
  
  export default defineComponent({
    name: 'DutyDetailsView',
    components: {
      DutyDetails,
    },
  });
  </script>