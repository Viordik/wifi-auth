<template>
  <v-layout align-center justify-center row fill-height >
    <v-card
      max-width="500"

      v-if="userInfo">
      <v-card-title>Привет, {{ userInfo.username }}!</v-card-title>
      <v-card-text class="black--text">Количество оставшевося времени: <span class="span">{{ userInfo.minutes }}</span> минут</v-card-text>
      <v-card-text class="black--text">Количество оставшевося трафика: <span class="span">{{ userInfo.traffic }}</span> Мб</v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'Profile',

  data() {
    return {
      userInfo: null
    }
  },

  created() {
    const userInfo = JSON.parse(localStorage.getItem('user_info'));

    if (!userInfo) {
      this.$router.push({
        path: '/'
      });
      return;
    }

    this.userInfo = userInfo;
  }
}
</script>

<style scoped>
.span {
  font-size: 20px;
  font-weight: 600;
}
</style>
