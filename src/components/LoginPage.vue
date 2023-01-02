<template>

  <main>

    <div class="h-100">

      <div class="login-wrap pt-5">
        <div>
          <img src="../assets/img/spartan.jpg" style="height: 150px;">
          <h1 class="text-white pt-3">ARES</h1>
        </div>

        <div class="login-html">

          <form class="signUp" id="signupForm">
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <label for="memberId" class="label">Username</label>
                  <input
                      v-model="auth.memberId"
                      id="memberId"
                      type="text"
                      class="input"
                      placeholder="회원 이름">
                </div>
                <div class="group">
                  <label for="memberPwd" class="label">Password</label>
                  <input
                      v-model="auth.memberPwd"
                      id="memberPwd"
                      type="password"
                      class="input"
                      placeholder="전화번호 뒷 4자리">
                </div>

                <div class="group mt-5">
                  <input
                        type="button" class="button" value="로그인"
                        v-bind:disabled="auth.memberId === '' && auth.memberPwd === ''"
                        @click="login">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

  <vue-basic-alert :duration="300" :closeIn="3000" ref="alert"/>

</template>

<script>
import VueBasicAlert from 'vue-basic-alert'

export default {
  name: "LoginPage",
  components: {
    VueBasicAlert
  },
  data() {
    return {
      auth: {
        memberId: '',
        memberPwd: ''
      },
    }
  },
  methods: {
    login() {

      let data = {
        memberId: this.auth.memberId,
        memberPwd: this.auth.memberPwd
      };

      this.$store.dispatch('LOGIN', {data})
          .then(() => this.redirect())
          .catch((error) => {
            console.log(error)
            this.$refs.alert.showAlert('error', error, '로그인 실패')
          })

    },
    redirect() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

@import "../assets/css/login.css";

body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}


.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

@media screen and (max-width: 760px) {
  .form-control {
    width: 100% !important;
  }
}


</style>