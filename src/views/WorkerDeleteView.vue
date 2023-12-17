<template>
    <div>
      <WorkerDelete />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import WorkerDelete from '@/components/WorkerDelete.vue'; // Replace with correct path
  
export default defineComponent({
    name: 'AppRegistration',
    components: {
      WorkerDelete,
    },
  });
</script>