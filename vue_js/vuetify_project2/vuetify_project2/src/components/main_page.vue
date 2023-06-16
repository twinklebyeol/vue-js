<template>
  <v-container>
    <div class="text-center display-3 my-4">메인 페이지 입니다.</div>
    <v-row>
      <v-col offset-sm="1" sm="10">
        <!--🔴 <label for="aa">제목</label> html 의 label 이랑 같은 의미 -->
        <v-text-field label="제목" v-model="sTitle"></v-text-field>
      </v-col>
    </v-row>

    <div class="text-center">
      <!-- 🔴클릭하였을때 methods에 호출이 되게끔 연결 -->
      <v-btn large class="mt-5" color="pink" dark @click="fnSetTitle">
        <v-icon>mdi-button-cursor</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
<script>
export default {
  // store에 있는 데이터 가져오기
  data() {
    return {
      sTitle: this.$store.getters.fnGetData,
    };
  },
  methods: {
    fnSetTitle() {
      //🔴 스토어에 값을 전달하기 commit
      // 🔴메소드 밖에 있는 을 this 라 함
      this.$store.commit("fnSetData", this.sTitle);
      //  🔴 리드렉션 / 주소를 바꿔줘! 라우터한테 함수를 바꿔달라고 하는것 push 해줘!
      this.$router.push("/sub");
    },
  },
};
</script>
<style></style>
