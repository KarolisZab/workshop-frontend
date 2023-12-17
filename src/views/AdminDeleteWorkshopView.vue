<template>
    <div>
      <AdminDeleteWorkshop />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import AdminDeleteWorkshop from '@/components/AdminDeleteWorkshop.vue'; // Replace with correct path
  
export default defineComponent({
    name: 'AppRegistration',
    components: {
      AdminDeleteWorkshop,
    },
  });
</script>