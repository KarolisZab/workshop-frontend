<template>
  <div>
    <DutyCreate /> <!-- Render the DutyCreate component here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DutyCreate from '@/components/DutyCreate.vue'; // Replace with correct path

export default defineComponent({
  name: 'DutyCreateView',
  components: {
    DutyCreate,
  },
});
</script>