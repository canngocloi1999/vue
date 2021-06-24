<template>
  <nav>
      <ul class="nav-link">
          <li><router-link to="/">LOGIN</router-link></li>
          <li><router-link to="/product">PRODUCT</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    nav{
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    nav ul.nav-link{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding: 0;
    }
    nav ul.nav-link a {
         color: #fff;
         text-decoration: none;
    }
    nav ul.nav-link a:hover{
        color: aqua;

    }
</style>