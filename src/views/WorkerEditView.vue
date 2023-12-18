<template>
    <div>
      <div class="container"> 
        <EditWorker /> 
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  //import AppNavbar from '../components/AppNavbar.vue';
  //import AppFooter from '../components/AppFooter.vue';
  import EditWorker from '../components/WorkerEdit.vue'; 
  
  export default defineComponent({
    name: 'EditView',
    components: {
      //AppNavbar,
      //AppFooter,
      EditWorker, 
    },
  });
</script>
  
<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
}
</style>