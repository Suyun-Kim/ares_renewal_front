<template>
  <div class="b-example-divider"></div>

  <header class="p-3 mb-3 border-bottom">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container">
        <router-link :to="{ name : 'DashBoard' }" class="navbar-brand">ARES FC</router-link>
<!--        <a class="navbar-brand" href="#">ARES FC</a>-->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link :to="{ name: 'GameMain' }" class="nav-link">경기일정</router-link>
            </li>
<!--            <li class="nav-item">-->
<!--              <router-link :to="{ name: 'NoticeMain' }" class="nav-link">공지사항</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link" href="/board">커뮤니티</a>-->
<!--            </li>-->
            <li class="nav-item">
              <a class="nav-link" href="/member">회원관리</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/team">팀관리</a>
            </li>
          </ul>
          <div class="dropdown text-end" v-if="$store.state.authToken != null">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <text class="text-white me-2 fw-bold">{{ $store.state.memberName }}</text>
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><a class="dropdown-item" href="#">마이페이지</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">로그아웃</a></li>
            </ul>
          </div>
          <div v-else>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link :to="{ name : 'LoginPage'}" class="nav-link" >로그인</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
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