<template>

  <main class="container">
    <!--    <div class="p-4 p-md-5 mb-4 mt-5 text-black-50 border border-dark rounded  row align-items-center">-->
    <!--      <div class="col-md-5 px-0">-->
    <!--        <h1 class="display-4 fw-bold">이번주 경기일정</h1>-->
    <!--        <p class="lead my-3 fw-bold">-->
    <!--          {{ date(this.gameInfo.startDate) }} {{ this.gameInfo.title }} • {{ this.gameInfo.location }}</p>-->
    <!--        <p class="lead mb-0 text-black-50 fw-bold">-->
    <!--          참석 <b class="text-primary">{{ this.gameInfo.voteCount }}</b>-->
    <!--          불참 <b class="text-danger">{{ this.gameInfo.notVoteCount }}</b>-->
    <!--        </p>-->
    <!--        <p>-->
    <!--          <button type="button" class="btn btn-dark btn-lg mt-5" style="padding-left: 2.5rem; padding-right: 2.5rem;">-->
    <!--            투표하러 가기-->
    <!--          </button>-->
    <!--        </p>-->
    <!--      </div>-->

    <!--      <div class="col p-4 d-flex flex-column position-static align-items-start">-->
    <!--        <h1 class="display-4 fw-bold">공지사항</h1>-->
    <!--        <h4 v-for="item in this.notices" :key="item" class="mb-1">-->
    <!--          <a href="#" class="me-auto mb-2 mb-md-0">{{ item.title }}</a>-->
    <!--        </h4>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="row mb-2 mt-5">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">이번주 경기일정</strong>
            <h3 class="mb-0">Featured post</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
              additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                 aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>
              Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"/>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>

          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <h3 class="mb-0">Post title</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
              content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                 aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>
              Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"/>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import http from "@/http-common";
import moment from 'moment';

export default {
  name: "DashBoard",
  data() {
    return {
      gameInfo: {},
      notices: []
    }
  },
  created() {
    this.getGameInfo()
    this.getNoticeInfo()
  },
  methods: {
    getGameInfo() {
      http.get('dashboards/game')
          .then(response => {
            this.gameInfo = response.data.data
          })
    },
    getNoticeInfo() {
      http.get("dashboards/notice")
          .then(response => {
            this.notices = response.data.data
          })
    },
    date(value) {
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>

@import "../assets/css/dashboard.css";

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

</style>