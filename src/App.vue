<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-center row fill-height>
        <router-view />
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),
};
</script>
