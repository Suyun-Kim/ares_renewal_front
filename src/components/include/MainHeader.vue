<template>
    <nav class="navbar navbar-light bg-black">
      <a class="navbar-brand text-white ps-2" href="/">
        ARES
      </a>
      <a class="navbar-brand text-white ps-2" href="#">
        {{ getMemberInfo.memberName }}
      </a>
    </nav>
</template>

<script>

export default {
  name: "MainHeader",
  data() {
    return {}
  },
  computed: {
    getMemberInfo() {
      return this.$store.getters.getMemberInfo;
    }
  }


}
</script>

<style scoped>
</style>