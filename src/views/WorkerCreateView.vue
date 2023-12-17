<template>
    <div>
      <WorkerCreate />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import WorkerCreate from '@/components/WorkerCreate.vue'; // Replace with correct path
  
export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkerCreate,
    },
  });
</script>