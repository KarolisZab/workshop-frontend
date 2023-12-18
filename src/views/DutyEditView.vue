<template>
    <div>
      <DutyEdit /> 
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import DutyEdit from '@/components/DutyEdit.vue'; 
  
  export default defineComponent({
    name: 'DutyEditView',
    components: {
      DutyEdit,
    },
  });
  </script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>