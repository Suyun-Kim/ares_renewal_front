<template>
  <div class="container" style="min-height: 800px">
    <div>
      <p class="fs-1 fw-bold">공지사항</p>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">제목</span>
      <input type="text" class="form-control" placeholder="제목을 입력해주세요." v-model="title">
    </div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <div>
      <button type="button" class="btn btn-light btn-lg w-25 me-3 mt-5">취 소</button>
      <button type="button" class="btn btn-dark btn-lg w-25 mt-5" v-on:click="submit">저 장</button>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: "NoticeWrite",
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {},
      title: ''
    }
  },
  methods: {
    submit: function () {
      let formData = new FormData();

      formData.append('title', this.title)
      formData.append('content', this.editorData)

      console.log(formData)
      this.axios.put('http://localhost:8081/posts/notice',{formData})
    }
  }
}
</script>

<style>
.ck-editor__editable {
  min-height: 650px;
  max-height: 650px;
}
</style>
