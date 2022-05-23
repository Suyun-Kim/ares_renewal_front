
<template>
  <div id="app">
    <div id="header">
      <main-header></main-header>
    </div>

    <router-view/>

    <div id="footer">
      <main-footer></main-footer>
    </div>

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
