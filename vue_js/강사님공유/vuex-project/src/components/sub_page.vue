<template>
  <v-container>
    <p class="display-1 my-4">서브 페이지</p>
    <v-divider></v-divider>
    <p class="display-2 my-4">{{ sTitle }}</p>
    <div class="text-center">
      <v-btn fab large color="red" class="mt-10" dark to="/main">
        <v-icon>mdi-replay</v-icon>
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
};
</script>
