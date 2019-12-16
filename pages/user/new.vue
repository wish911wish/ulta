<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
      w-100
    >
      <div class="contents-container" justify-center>
        <section-large :name="'WELCOME'" />
        <p class="paragraph">SNSアカウントから登録する</p>
        <v-row class="mwidth-300 mx-auto my-0" :justify="'space-between'">
          <img class="sns-icon" :src='GoogleIcon' />
          <img class="sns-icon" :src='FaceBookIcon' />
          <img class="sns-icon" :src='InstagramIcon' />
          <img class="sns-icon" :src='TwitterIcon' />
        </v-row>
        <p class="paragraph">メールアドレスで登録する</p>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        />
        <div class="text-center">
          <v-btn
            color="accent"
            nuxt
            to="/user/new"
            class=""
          >
            User New
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SectionLarge from '~/components/SectionLarge.vue'
import GoogleIcon from '~/components/images/google-icon.svg'
import FaceBookIcon from '~/components/images/facebook-icon.svg'
import InstagramIcon from '~/components/images/instagram-icon.svg'
import TwitterIcon from '~/components/images/twitter-icon.svg'

export default {
  components: {
    SectionLarge
  },
  data () {
    return {
      GoogleIcon,
      FaceBookIcon,
      InstagramIcon,
      TwitterIcon
    }
  }
}

</script>

<style scoped>
.mwidth-300{
  max-width: 400px;
}

</style>
