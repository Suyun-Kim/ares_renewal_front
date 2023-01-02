<template>

  <main class="container">

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
  },
  methods: {
    getGameInfo() {
      http.get('dashboards/game')
          .then(response => {
            this.gameInfo = response.data.data
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
@import "../assets/css/gameList.css";

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