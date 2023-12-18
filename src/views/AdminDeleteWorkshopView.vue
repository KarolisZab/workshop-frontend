<template>
    <div>
      <AdminDeleteWorkshop />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import AdminDeleteWorkshop from '@/components/AdminDeleteWorkshop.vue'; 
  
export default defineComponent({
    name: 'AppRegistration',
    components: {
      AdminDeleteWorkshop,
    },
  });
</script>