<template>
    <div>
      <div class="container"> 
        <DutiesList /> 
      </div>
      <div class="button-container">
        <RouterLink :to="`/workshop/${$route.params.id}/workers/${$route.params.workerId}/duties/create`">
          <button class="button">Create a new duty</button>
        </RouterLink>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  //import AppNavbar from '../components/AppNavbar.vue';
  //import AppFooter from '../components/AppFooter.vue';
  import DutiesList from '@/components/DutiesList.vue'; 
  
  export default defineComponent({
    name: 'DutiesView',
    components: {
      //AppNavbar,
      //AppFooter,
      DutiesList, 
    },
  });
</script>
  
<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 20px;
}
.button-container {
  display: flex;
  justify-content: center; 
  margin-bottom: 20px; 
}
.button {
  display: block;
  width: 200px;
  margin-bottom: 10px; 
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.button:hover {
  background-color: #000;
  color: #fff;
}
</style>