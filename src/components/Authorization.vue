<template>
  <v-layout align-center justify-center column fill-height >
    <v-card
      v-if="username && token === tok"
      max-width="500"
      width="100%"
      
    >
      <v-card-title>Привет, {{ username }}</v-card-title>
      <v-card-text>Введи код для продолжения</v-card-text>
      <v-card-text v-show="error" class="red accent-4 white--text px-4 pt-2 pb-2">{{ error }}</v-card-text>

      <v-form class="authorization" @submit.prevent="onSubmitForm">
        <v-text-field
          id="code"
          label="Code"
          name="code"
          type="password"
          class="mx-4 mt-0"
          v-model="code"
        />

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit">Send</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>

    <v-alert v-else height="60" max-width="400" width="100%" class="black--text" type="error">Не верный username или token</v-alert>
  </v-layout>
</template>

<script>
import { api } from '../api'

export default {
  name: 'Authorization',

  data() {
    return {
      code: '',
      error: ''
    }
  },

  computed: {
    username() {
      return this.$route.query.username;
    },

    token() {
      return this.$route.query.token;
    },

    tok() {
      return process.env.VUE_APP_USER_TOKEN;
    }
  },

  methods: {
    onSubmitForm() {
      const username = this.username;
      const code = this.code;

      const data = {
        username,
        code
      };

      api.post('/status', JSON.stringify(data))
         .then((response) => {
           this.$router.push({
             path: '/traffic'
           })

           localStorage.setItem('user_info', JSON.stringify({
             ...response.data,
             username
           }));
         })
         .catch((err) => {
           console.error(err);
           this.error = 'Invalid "username" or "code"';
         })
    },
  },
  created() {
    const userInfo = JSON.parse(localStorage.getItem('user_info'));

    if (userInfo) {
      this.$router.push({
        path: '/traffic'
      });
      return;
    }
  }
}
</script>
