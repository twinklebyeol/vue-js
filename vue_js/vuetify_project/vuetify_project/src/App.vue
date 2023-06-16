<template>
  <v-app>
    <!-- 앱바 테마를 primary(파란색) 로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 좌측에 메뉴 아이콘 생성 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <!-- 페이지 장면 전환 효과 -->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>
    <!-- footer 영역 테마를 secondary 로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="max-auto">con</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
