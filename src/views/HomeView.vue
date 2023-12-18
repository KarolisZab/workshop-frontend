<template>
    <div>
      <div class="container"> 
        <WorkshopList /> 
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  //import AppNavbar from '../components/AppNavbar.vue';
  //import AppFooter from '../components/AppFooter.vue';
  import WorkshopList from '../components/WorkshopList.vue'; 
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      //AppNavbar,
      //AppFooter,
      WorkshopList, 
    },
  });
</script>
  
<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
}
</style>