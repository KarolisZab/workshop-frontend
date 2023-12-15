<template>
    <div>
      <UserLogin />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import UserLogin from '@/components/UserLogin.vue'; // Replace with correct path
  
  export default defineComponent({
    name: 'AppRegistration',
    components: {
      UserLogin,
    },
  });
  </script>