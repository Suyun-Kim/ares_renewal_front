<template>
  <footer class="text-center text-white fixed-bottom">
    <!-- Grid container -->
    <div class="btn-holder container">
      <!-- Facebook -->
      <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #3b5998;"
          href="#!"
          role="button"
      ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee;"
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
  padding: 0!important;
}

.btn-holder .btn {
  display: flex;
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

</style>