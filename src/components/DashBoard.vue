<template>

  <main class="container">
    <div class="row mb-2 mt-5">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-3 text-black-50">이번주 경기일정</strong>
            <h3 class="mb-3 fw-bold">{{ gameInfo.title }}</h3>
            <p class="card-text mb-3 fw-bold">
              <template v-if="gameInfo.otherTeam === null || gameInfo.otherTeam === ''">
                {{ gameInfo.team1 }} VS {{ gameInfo.team2 }}
              </template>
              <template v-else>
                {{ gameInfo.otherTeam }}
              </template>

            </p>
            <div class="mb-3 text-muted"> {{ date(gameInfo.startDate) }} • {{ gameInfo.location }}</div>
            <p class="card-text mb-3">
              참석 <b class="text-primary">{{ gameInfo.voteCount }}</b>
              불참 <b class="text-danger">{{ gameInfo.notVoteCount }}</b>
            </p>
          </div>

          <div class="col-auto d-none d-lg-block">
            <button type="button" class="btn btn-dark btn-lg w-100 h-100"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;">
              투표하기
            </button>
          </div>

        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-3 text-black-50">공지사항</strong>
            <p class="card-text mb-auto" v-for="item in notices" :key="item">
              <a href="#" class="text-decoration-none text-muted"> {{ item.title }} </a>
            </p>
          </div>

          <div class="col-auto d-none d-lg-block">
            <button type="button" class="btn btn-dark btn-lg h-100"
                    style="padding-left: 2.5rem; padding-right: 2.5rem; min-width: 120px">
              더보기
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-3 text-black-50">지난 경기 결과</strong>
        </div>

          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" >
            <div class="col p-4 d-flex flex-column position-static" v-for="item in matchResult" :key="item">
              <strong class="d-inline-block mb-3 text-black-50"> {{ item.win }} VS {{ item.lose }} </strong>
              <p class="card-text mb-auto">
                <a href="#" class="text-decoration-none text-muted"> {{ item.winScore }} : {{ item.loseScore }}</a>
              </p>
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
      notices: [],
      matchResult: []
    }
  },
  created() {
    this.getGameInfo()
    this.getNoticeInfo()
    this.getMatchResult()
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
    getMatchResult() {
      http.get("dashboards/match")
          .then(response => {
            this.matchResult = response.data.data
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