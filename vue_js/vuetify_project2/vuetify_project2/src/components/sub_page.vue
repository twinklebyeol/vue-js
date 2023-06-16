<template>
  <v-container>
    <p class="display-1 my-4">서브 페이지 입니다.</p>
    <v-divider></v-divider>
    <!-- store 에 있는 sTitle 값을 가져와 출력 -->
    <p class="display-4 my-4">{{ sTitle }}</p>

    <div class="text-center">
      <!-- 버튼에서 fab, large 어트리뷰트를 사용해서 큰 원으로 설정 -->
      <v-btn fab large class="mt-10" color="red" dark to="/main">
        <v-icon>mdi-replay</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
<script>
//  store에 있는 fnGetData 함수를 호출하여  sTitle 값을 가져옴
export default {
  // store에 있는 데이터 가져오기

  data() {
    return {
      sTitle: this.$store.getters.fnGetData,
    };
  },
};
</script>
<style></style>
