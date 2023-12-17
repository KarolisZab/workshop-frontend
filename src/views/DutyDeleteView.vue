<template>
  <div>
    <DutyDelete /> <!-- Render the DutyCreate component here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DutyDelete from '@/components/DutyDelete.vue';

export default defineComponent({
    name: 'DutyDeleteView',
    components: {
        DutyDelete,
    },
})
</script>
