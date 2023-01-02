<template>
  <div class="container">
    <main>
      <section class="py-2 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto mt-2">
            <h1 class="fw-light fw-bold">경기 일정</h1>

            <p class="lead text-muted">{{ gameInfo.team1 }} vs {{ gameInfo.team2 }}</p>
            <p class="lead text-muted">{{ date(gameInfo.startDate) }} {{ gameInfo.title }} • {{ gameInfo.location }}</p>
            <p class="lead text-muted">{{ gameInfo.startTime }} / {{ gameInfo.tardinessTime }}</p>
            <p>
              <span class="text-black-50 fw-bold px-0">참석</span>
              <span class="text-primary fw-bold px-2">{{ gameInfo.voteCount }}</span>
              <span class="text-black-50 fw-bold px-0">불참</span>
              <span class="text-danger fw-bold px-2">{{ gameInfo.notVoteCount }}</span>
              <span class="text-black-50 fw-bold px-0">미투표</span>
              <span class="text-break fw-bold px-2">{{ gameInfo.noVoteCount }}</span>
            </p>
            <div class="text-center">
              <button class="btn btn-primary my-2 me-2" @click="addVote(gameInfo.idx, true)">참석</button>
              <button class="btn btn-secondary my-2 ms-2" @click="addVote(gameInfo.idx, false)">불참</button>
            </div>
          </div>
        </div>
      </section>

      <div class="list-group list-group-checkable d-grid gap-2 border-0 w-auto">

        <label class="list-group-item fw-bold rounded-3 py-3 vote-block">
          참 석 ( {{ gameInfo.voteCount }}명 )
          <span class="d-block fw-bold small opacity">
            {{ gameInfo.team1 }} 팀
          </span>
          <span class="d-block small opacity">
            <template v-for="item in voteMembers" :key="item">
              <template v-if="gameInfo.team1 === item.team">
                {{ item.memberName }}
              </template>
            </template>
          </span>
          <span class="d-block fw-bold small opacity">
            {{ gameInfo.team2 }} 팀
          </span>
          <span class="d-block small opacity">
            <template v-for="item in voteMembers" :key="item">
              <template v-if="gameInfo.team2 === item.team">
                {{ item.memberName }}
              </template>
            </template>
          </span>
        </label>

        <label class="list-group-item rounded-3 py-3 not-vote-block">
          불 참 ( {{ gameInfo.notVoteCount }}명 )
          <span class="d-block fw-bold small opacity">
            {{ gameInfo.team1 }} 팀
          </span>
          <span class="d-block small opacity">
            <template v-for="item in notVoteMembers" :key="item">
              <template v-if="gameInfo.team1 === item.team">
                {{ item.memberName }}
              </template>
            </template>
          </span>
          <span class="d-block fw-bold small opacity">
            {{ gameInfo.team2 }} 팀
          </span>
          <span class="d-block small opacity">
            <template v-for="item in notVoteMembers" :key="item">
              <template v-if="gameInfo.team2 === item.team">
                {{ item.memberName }}
              </template>
            </template>
          </span>
        </label>

        <label class="list-group-item rounded-3 py-3 no-vote-block">
          미 투 표 ( {{ gameInfo.notVoteCount }}명 )
          <span class="d-block fw-bold small opacity">
            {{ gameInfo.team1 }} 팀
          </span>
          <span class="d-block small opacity">
            <template v-for="item in noVoteMembers" :key="item">
              <template v-if="gameInfo.team1 === item.team">
                {{ item.memberName }}
              </template>
            </template>
          </span>
          <span class="d-block fw-bold small opacity">
            {{ gameInfo.team2 }} 팀
          </span>
          <span class="d-block small opacity">
            <template v-for="item in noVoteMembers" :key="item">
              <template v-if="gameInfo.team2 === item.team">
                {{ item.memberName }}
              </template>
            </template>
          </span>
        </label>

      </div>

    </main>

  </div>
</template>

<script>

import http from "@/http-common";
import moment from 'moment';

export default {
  name: "GameMain",
  data() {
    return {
      gameInfo: {
        idx: null,
        team1: null,
        team2: null,
        title: null,
        location: null,
        otherTeam: null,
        startDate: null,
        startTime: null,
        tardinessTime: null,
        voteCount: 0,
        notVoteCount: 0,
        noVoteCount: 0,
      },
      voteMembers: [],
      notVoteMembers: [],
      noVoteMembers: [],
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
      http.get("/games")
          .then(response => {
            this.gameInfo = response.data.data
            this.voteMembers = response.data.data.voteMembers
            this.notVoteMembers = response.data.data.notVoteMembers
            this.noVoteMembers = response.data.data.noVoteMembers
          })
    },
    addVote (gameIdx, isVote) {
      const data = {
        gameIdx : gameIdx,
        memberIdx : this.$store.state.memberIdx,
        isVote : isVote

      }
      http.post("/votes", data)
    },
    date(value) {
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>

@media screen and (max-width: 760px) {
  .btn-primary {
    min-width: 100px !important;
    min-height: 50px;
  }

  .btn-secondary {
    min-width: 100px !important;
    min-height: 50px;
  }
}

@media screen and (min-width: 760px) {
  .btn-primary {
    width: 150px !important;
    height: 50px;
  }

  .btn-secondary {
    width: 150px !important;
    height: 50px;
  }
}

.list-group {
  max-width: 100%;
  margin: 4rem auto;
}

[contenteditable]:focus {
  outline: 0;
}

.vote-block {
  color: #fff;
  background-color: var(--bs-blue);
}

.not-vote-block {
  color: #fff;
  background-color: var(--bs-red);
}

.no-vote-block {
  color: #fff;
  background-color: var(--bs-gray);
}




</style>
