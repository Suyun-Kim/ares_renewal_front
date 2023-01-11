<template>
  <div class="container justify-content-center d-block">
    <main class="bg-black">

      <div class="w-100 mt-2 mb-4 pt-2 bg-light rounded-pill-2">

        <div class="text-dark">

          <p class="font-monospace mb-0" style="font-size: 2.5em">{{ time(this.gameInfo.startTime) }}</p>
          <p class="font-monospace mb-0" style="font-size: 1.5em">{{ date(this.gameInfo.startDate) }}</p>

        </div>

        <div class="font-monospace place text-black fw-bold" style="font-size: 1em">
          {{ this.$data.gameInfo.title }}
        </div>

        <div class="mt-2 pb-2">
          <button class="btn btn-dark fw-bold w-50 me-3" @click="addVote(this.gameInfo.idx, true)">참석</button>
          <button class="btn btn-outline-dark fw-bold text-dark w-25 ms-md-3" @click="addVote(this.gameInfo.idx, false)">불참</button>
        </div>

      </div>

      <div class="mt-4 w-100">
        <h3 class="fw-bold text-white ">투표목록</h3>
      </div>

      <div class="wrap mb-4">
        <div class="wrapper">
          <div class="item classification">
            <p>총원</p>
          </div>
          <div class="item classification">
            <p>참석</p>
          </div>
          <div class="item classification">
            <p>불참</p>
          </div>
          <div class="item classification">
            <p>미투표</p>
          </div>

          <div class="item personnel"> {{ this.gameInfo.memberCount }}</div>
          <div class="item personnel"> {{ this.gameInfo.voteCount }}</div>
          <div class="item personnel"> {{ this.gameInfo.notVoteCount }}</div>
          <div class="item personnel"> {{ this.gameInfo.noVoteCount }}</div>
        </div>
      </div>

      <div id='vote-table' class="d-flex border rounded-pill-2 overflow-scroll bg-white">

        <table>

          <tr>
            <th class="w-50 bg-black text-white">
              {{ this.gameInfo.team1 }}
            </th>
          </tr>

          <tr>
            <th class="bg-dark text-white">참석 ( {{ this.team1VoteMembers.length }} 명 )</th>
          </tr>

          <tr v-for="item in this.team1VoteMembers" v-bind:key="item.memberId" class="bg-white">
            <td class="fw-bold border-bottom"> {{ item.memberName }}</td>
          </tr>

          <tr class="bg-black text-white">
            <th>불참 ( {{ this.team1NotVoteMembers.length }} 명 )</th>
          </tr>

          <tr v-for="item in this.team1NotVoteMembers" v-bind:key="item.memberId" class="bg-white">
            <td class="fw-bold border-bottom"> {{ item.memberName }}</td>
          </tr>

          <tr>
            <th class="bg-light text-black">미투표 ( {{ this.team1NoVoteMembers.length }} 명 )</th>
          </tr>

          <tr v-for="item in this.team1NoVoteMembers" v-bind:key="item.memberId" class="bg-white">
            <td class="fw-bold border-bottom"> {{ item.memberName }}</td>
          </tr>
        </table>

        <table>

          <tr>
            <th class="w-50 bg-black text-white">
              {{ this.gameInfo.team2 }}
            </th>
          </tr>

          <tr class="bg-dark text-white">
            <th>참석 ( {{ this.team2VoteMembers.length }} 명 )</th>
          </tr>

          <tr v-for="item in this.team2VoteMembers" v-bind:key="item.memberId" class="bg-white">
            <td class="fw-bold border-bottom"> {{ item.memberName }}</td>
          </tr>

          <tr class="bg-black text-white">
            <th>불참 ( {{ this.team2NotVoteMembers.length }} 명 )</th>
          </tr>

          <tr v-for="item in this.team2NotVoteMembers" v-bind:key="item.memberId" class="bg-white">
            <td class="fw-bold border-bottom"> {{ item.memberName }}</td>
          </tr>

          <tr>
            <th class="bg-light text-black">미투표 ( {{ this.team2NoVoteMembers.length }} 명 )</th>
          </tr>

          <tr v-for="item in this.team2NoVoteMembers" v-bind:key="item.memberId" class="bg-white">
            <td class="fw-bold border-bottom"> {{ item.memberName }}</td>
          </tr>

        </table>

      </div>
    </main>
  </div>
</template>

<script>

import http from "@/http-common";
import moment from 'moment';

export default {
  name: "GameMain",
  props: {
    gameIdx: {
      type: String
    }

  },
  data() {
    return {
      gameInfo: {
        idx: Number,
        team1: String,
        team2: String,
        title: String,
        location: String,
        otherTeam: String,
        startDate: String,
        startTime: String,
        tardinessTime: String,
        memberCount: Number,
        voteCount: Number,
        notVoteCount: Number,
        noVoteCount: Number,
      },
      team1VoteMembers: Array,
      team2VoteMembers: Array,
      team1NotVoteMembers: Array,
      team2NotVoteMembers: Array,
      team1NoVoteMembers: Array,
      team2NoVoteMembers: Array,

    }
  },
  created() {
    this.getGameInfo()
  },
  computed: {
    memberIdx() {
      return this.$store.state.memberIdx;
    }
  },
  methods: {

    getGameInfo() {

      http.get(
          '/games/' + this.gameIdx)
          .then(response => {

            this.gameInfo = response.data.data.gameInfo
            this.team1VoteMembers = response.data.data.team1VoteList;
            this.team2VoteMembers = response.data.data.team2VoteList;
            this.team1NotVoteMembers = response.data.data.team1NotVoteList;
            this.team2NotVoteMembers = response.data.data.team2NotVoteList;
            this.team1NoVoteMembers = response.data.data.team1NoVoteList;
            this.team2NoVoteMembers = response.data.data.team2NoVoteList;

            this.gameInfo.voteCount = (this.team1VoteMembers.length + this.team2VoteMembers.length)
            this.gameInfo.notVoteCount = (this.team1NotVoteMembers.length + this.team2NotVoteMembers.length)
            this.gameInfo.noVoteCount = (this.team1NoVoteMembers.length + this.team2NoVoteMembers.length)
            this.gameInfo.memberCount = (this.gameInfo.voteCount + this.gameInfo.notVoteCount + this.gameInfo.noVoteCount)

          })
    },
    addVote(gameIdx, isVote) {
      const data = {
        gameIdx: gameIdx,
        memberIdx: this.$store.state.memberIdx,
        isVote: isVote
      }
      http.post("/votes", data)
    },
    date(value) {
      return moment(value).format('YYYY-MM-DD')
    },
    time(value) {
      return String(value).substring(0, 5);
    },
  }
}
</script>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 30px;
  border-radius: 12px;
  background-color: white;
  border-color: black;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  color: black;
}

.wrapper > div {
  height: 30px;
  line-height: 30px;
}

.wrapper > div:nth-child(1) {
  border-radius: 12px 0 0 0 / 12px 0 0 0;
}

.wrapper > div:nth-child(4) {
  border-radius: 0 12px 0 0 / 0 12px 0 0;
}

.wrapper > div:nth-child(5) {
  border-radius: 0 0 0 12px / 0 0 0 12px;
}

.wrapper > div:nth-child(8) {
  border-radius: 0 0 12px 0 / 0 0 12px 0;
}

.classification {
  border-color: white;
  background-color: #5c636a;
  color: white;

}

.item {
  border-color: white;
}

.personnel {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
}



#vote-table {
  width: 100%;
  height: 35vh;
  max-height: 350px;
}

#vote-table table {
  width: 50%;
}

#vote-table table th {
  width: 50%;
}

#vote-table table tr {
  height: 3vh;

}


</style>
