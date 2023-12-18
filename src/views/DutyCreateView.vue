<template>
  <div>
    <DutyCreate /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DutyCreate from '@/components/DutyCreate.vue'; 

export default defineComponent({
  name: 'DutyCreateView',
  components: {
    DutyCreate,
  },
});
</script>