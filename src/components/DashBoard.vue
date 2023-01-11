<template>
  <div class="container">
    <main class="d-block justify-content-center">

      <div class="w-100 mt-4 pt-2 border border-white rounded-pill-2 bg-light">
        <h3 class="fw-bold text-dark ">경기 일정</h3>

        <div class="text-dark">

          <p class="font-monospace mb-0" style="font-size: 2.5em">{{ time(this.gameInfo.startTime) }}</p>
          <p class="font-monospace mb-0" style="font-size: 1.5em">{{ date(this.gameInfo.startDate) }}</p>

        </div>

        <div class="font-monospace place text-dark fw-bold" style="font-size: 1em">{{ this.$data.gameInfo.title }}</div>

        <div class="mt-2 pb-2">
          <router-link :to="{name : 'GameMain', params : { gameIdx : this.gameInfo.idx }}">
            <button class="btn btn-dark fw-bold">투표하러가기</button>
          </router-link>
        </div>

      </div>

    </main>
  </div>
</template>

<script>

import http from "@/http-common";
import moment from 'moment';

export default {
  name: "DashBoard",
  data() {
    return {
      gameInfo: {
        idx: Number,
        title: String,
        location: String,
        startDate: String,
        startTime: String,
        tardinessTime: String,
        team1: String,
        team2: String
      }

    }
  },
  created() {
    this.getLastGameInfo();
  },
  computed() {

  },
  methods: {

    date(value) {
      return moment(value).format('YYYY-MM-DD')
    },

    time(value) {
      return String(value).substring(0, 5);
    },

    getLastGameInfo() {
      http.get('/games:last')
          .then(res => {
            this.gameInfo = res.data.data;
          })
          .catch(error => {
                console.log(error.response.data.error.message)
              }
          )
    },
  }
}
</script>

<style scoped>

@import "../assets/css/schedule.css";

</style>