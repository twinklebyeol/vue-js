<template>
  <v-container>
    <p class="display-1 my-4">메인 페이지</p>
    <v-divider></v-divider>

    <v-row>
      <v-col offset-sm="1" sm="10">
        <v-text-field label="제목" v-model="sTitle"> </v-text-field>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn large class="mt-5" color="purple" dark @click="fnSetTitle">
        확인
      </v-btn>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      sTitle: this.$store.getters.fnGetData,
    };
  },
  methods: {
    // 입력받은 제목을 store에 저장
    fnSetTitle() {
      this.$store.commit("fnSetData", this.sTitle);
      this.$router.push("/sub");
    },
  },
};
</script>
