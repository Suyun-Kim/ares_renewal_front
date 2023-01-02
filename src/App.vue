<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <div id="app">
    <router-view/>
  </div>

  <div id="footer" v-if="$route.name !== 'LoginPage'">
    <main-footer></main-footer>
  </div>


</template>

<script>
import MainHeader from "@/components/include/MainHeader";
import MainFooter from "@/components/include/MainFooter";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MainHeader, MainFooter

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<html>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</html>
