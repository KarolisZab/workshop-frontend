<template> 
  <footer class="footer">
    <div class="container">
      <!-- SVG Worker-->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon">
        <path d="M12 2L5.64 6.48m12.72 0L12 2m0 0l1.89 10.61m-11.78 0L12 2m0 0l5.63 4.52m-5.63 4.5V20m11.25-4.5l1.51 4.49M5.64 15.5l1.51-4.49M12 2v4.5M12 6.5v4m0 0v-4m0 4.5v10.5m0-10.5l3.38 10.5M12 20V15.5"/>
      </svg>
      <p>{{ currentYear }} Karolis Žabinskis IFF-0/6</p>
    </div>
  </footer>
</template> 

<script>

export default {
  name: 'AppFooter',
  data() {
    return {
        currentYear: new Date().getFullYear(),
    }
  }
};

</script>

<style scoped> 
 .footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: relative;
 }

.icon {
  margin-bottom: 5px;
  fill: none;
  stroke: #fff;
  stroke-width: 1.5;
  vertical-align: middle;
}

</style> 