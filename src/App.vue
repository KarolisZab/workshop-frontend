<template>
  <div id="app" class="d-flex flex-column">
    <AppNavbar />
    <div class="flex-grow-1 overflow-auto">
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView} from 'vue-router';
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue'


export default defineComponent({
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rethink+Sans&display=swap');
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

* {
  font-family: 'Rethink Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// .container {
//   max-width: 1100px;
//   margin: 0 auto;
// }

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.flex-grow-1 {
  flex: 1; /* Grow to fill remaining space */
}

.overflow-auto {
  overflow-y: auto; /* Enable vertical scrollbar if content overflows */
  max-height: calc(100vh - 110px); /* Adjust height as needed (minus navbar height) */
  /* Change '56px' to your actual navbar height */
}

</style>