<template>
    <div>
      <AdminRegister />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AdminRegister from '@/components/AdminRegister.vue'; // Replace with correct path
  
  export default defineComponent({
    name: 'AppRegistrationAdmin',
    components: {
      AdminRegister,
    },
  });
  </script>