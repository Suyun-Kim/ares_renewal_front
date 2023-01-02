<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <footer class="text-center text-white fixed-bottom">
    <!-- Grid container -->
    <div class="btn-holder container">
      <!-- Facebook -->
      <a class="btn m-1" href="#!" role="button">
        <img src="../../assets/img/menu_home.png" style="height: 150px;" alt="">
      </a>

      <a
          class="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
      ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #dd4b39;"
          href="#!"
          role="button"
      ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #ac2bac;"
          href="#!"
          role="button"
      ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #0082ca;"
          href="#!"
          role="button"
      ><i class="fab fa-linkedin-in"></i
      ></a>
      <!-- Github -->

    </div>
    <!-- Grid container -->

  </footer>
</template>


<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped>
footer {
  width: 100vw;
  height: 60px;
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
  height: 40px;
  vertical-align: middle;
}

</style>