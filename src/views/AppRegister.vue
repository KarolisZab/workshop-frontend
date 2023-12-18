<template>
    <div>
      <UserRegister />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import UserRegister from '@/components/UserRegister.vue'; 
  
  export default defineComponent({
    name: 'AppRegistration',
    components: {
      UserRegister,
    },
  });
  </script>