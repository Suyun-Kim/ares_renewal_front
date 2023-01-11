<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <footer class="text-center text-white fixed-bottom bg-white">
    <!-- Grid container -->
    <div class="btn-holder container  border border-top">

      <!-- 홈 -->
      <a class="btn m-1" :href="this.mainUrl" role="button">
        <i class="fa-solid fa-house fa-lg"></i>
      </a>

      <!-- 경기일정 -->
      <a class="btn m-1" href="/game" role="button">
        <i class="fa-solid fa-calendar fa-lg"></i>
      </a>

      <!-- Google -->
      <a class="btn m-1" href="/" role="button">
        <i class="fa-solid fa-comment fa-lg"></i>
      </a>

      <!-- 출석체크 -->
      <a class="btn m-1" href="/" role="button">
        <i class="fa-solid fa-stamp fa-lg"></i>
      </a>

      <!-- 마이페이지 -->
      <a class="btn m-1" href="/" role="button">
        <i class="fa-solid fa-user fa-lg"></i>
      </a>

    </div>

  </footer>
</template>


<script>
export default {
  name: "MainFooter",
  data() {
    return {
      mainUrl: this.$route.fullPath

    }


  }
}
</script>

<style scoped>
footer {
  width: 100vw;
  height: 10vw;
}

.btn-holder {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  font-size: 0;
  text-align: center;
  padding: 0 !important;
}

.btn-holder .btn {
  display: flex;
  width: 40px;
  vertical-align: middle;
}

</style>