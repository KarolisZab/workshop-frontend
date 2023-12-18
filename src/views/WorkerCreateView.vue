<template>
    <div>
      <WorkerCreate />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import WorkerCreate from '@/components/WorkerCreate.vue'; 
  
export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkerCreate,
    },
  });
</script>