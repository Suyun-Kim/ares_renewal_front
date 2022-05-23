<template>
  <section class="h-75" style="min-height: 800px">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-3 col-lg-6 col-xl-5 m-lg-5">
          <img src="../assets/login_logo.jpg" class="img-fluid w-75">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4">
          <form>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="text" v-model="auth.memberId" class="form-control form-control-lg w-50" placeholder="회원이름"/>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input type="password" v-model="auth.memberPwd" class="form-control form-control-lg w-50"
                     placeholder="비밀번호"/>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3"/>
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" class="btn btn-dark btn-lg" @click="login"
                      style="padding-left: 2.5rem; padding-right: 2.5rem;"> Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">회원 등록 시 아레스 운영진에게 문의 바랍니다.</p>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>

  <vue-basic-alert :duration="300" :closeIn="3000" ref="alert"/>

</template>

<script>
//import http from '../http-common'
import VueBasicAlert from 'vue-basic-alert'

export default {
  name: "LoginPage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
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

</style>