<template>
  <div class="b-example-divider"></div>

  <header class="p-3 mb-3 border-bottom">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand fc-white" href="#">
        <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Bootstrap
      </a>
    </nav>
  </header>
</template>

<script>

export default {
  name: "MainHeader",

}
</script>

<style scoped>
.form-control-dark {
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>