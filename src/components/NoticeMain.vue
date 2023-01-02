<template>
  <div class="container-fluid">
    <main>
      <div class="py-5 text-center">
        <h2 class="fw-bold">공지사항</h2>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">등록일</th>
            <th scope="col">작성자</th>
            <th scope="col">COMMAND</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1,001</td>
            <td>random</td>
            <td>data</td>
            <td>placeholder</td>
          </tr>
          </tbody>
        </table>

      </div>

    </main>

  </div>
</template>

<script>

import http from "@/http-common";
import moment from 'moment';

export default {
  name: "NoticeMain",
  data() {
    return {
      notices: []
    }
  },
  created() {
    this.getNoticeInfo()
  },
  methods: {
    getNoticeInfo() {
      http.get("notice")
          .then(response => {
            this.notices = response.data.data
          })
    },
    date(value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style scoped>

</style>