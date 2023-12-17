<template>
    <div>
      <DutyEdit /> <!-- Render the DutyCreate component here -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import DutyEdit from '@/components/DutyEdit.vue'; // Replace with correct path
  
  export default defineComponent({
    name: 'DutyEditView',
    components: {
      DutyEdit,
    },
  });
  </script>

<style scoped>
/* Add your component-specific styles here */
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>