<template>
    <header class="top-nav">
        <!-- <nav class="container"> -->
        <!-- <section class="top-nav"> -->
            <div class="branding">
                <h1>Workshop</h1>
            </div>
            <!-- <ul class="nav-routes">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/workshops">Workshops</RouterLink>
            </ul> -->
            <!-- Hamburger Menu -->
            <input id="menu-toggle" type="checkbox" class="menu-button-right"/>
            <label class='menu-button-container' for="menu-toggle">
              <div class='menu-button'></div>
            </label>
            <ul class="nav-routes menu">
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/duties">Duties</RouterLink></li>
              <li><RouterLink to="/login">Login</RouterLink></li>
              <li><RouterLink to="/register">Register</RouterLink></li>
            </ul>
        <!-- </nav> -->
        <!-- </section> -->
    </header>
</template>
  
<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'AppNavbar',
    components: {
      RouterLink
    }
};

</script>
  
<!-- Add Bootstrap styles -->
<style lang="scss" scoped>
/* Import Bootstrap styles */
@import "~bootstrap/scss/bootstrap";

header {
  background-color: #d8c56f;
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00BAF0;
  background: linear-gradient(to left, #f46b45, #eea849);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #FFF;
  height: 50px;
  padding: 1em;
}

nav {
  display: flex;
  //align-items: center;
  padding: 25px 16px;
}

.branding {
  display: flex;
  align-items: center;
  gap: 8px;
}

.branding h1 {
  font-size: 24px;
  text-align: left;
  margin: 0;
}

.nav-routes {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 12px;
  list-style: none;
}
.nav-routes a {
  text-decoration: none;
  color: inherit;
}

  /* Hamburger Menu */
.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 999;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}
.menu-button-container {
  display: none;
  height: 90%;
  width: 30px;
  flex-direction: column;
  justify-content: flex-end;
  align-items:  flex-end;
  z-index: 999;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 0px; /* Adds space to the right for menu icon */
  }
  
  .menu {
    position: absolute;
    //top: 50px;
    top: 0;
    margin-top: 50px; // new
    //right: 0; /* Adjusts the position to the right */
    left: 0; // new
    background-color: #333;
    width: 100%;
    list-style-type: none;
    flex-direction: column; // new
    justify-content: center; // new
    align-items: center; // new
    //padding: 0;
    //margin: 0;
    display: none; /* Hides the menu initially */
  }
  #menu-toggle:checked ~ .menu {
    display: flex; /* Shows the menu when the checkbox is checked */
    flex-direction: column;
  }
  .menu > li {
    padding: 0.5em 1em;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #444;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>