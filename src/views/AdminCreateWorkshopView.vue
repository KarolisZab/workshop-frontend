<template>
    <div>
      <AdminCreateWorkshop />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import AdminCreateWorkshop from '@/components/AdminCreateWorkshop.vue'; 
  
export default defineComponent({
    name: 'AppRegistration',
    components: {
      AdminCreateWorkshop,
    },
  });
</script>