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
        <p class="paragraph">登録方法を選択してください</p>
        <firebase-auth />
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
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'Login',
  components: {
    SectionLarge,
    FirebaseAuth
  },
  data () {
    return {
      GoogleIcon,
      FaceBookIcon,
      InstagramIcon,
      TwitterIcon,
      email: '',
      password: ''
    }
  }
}

</script>

<style scoped>
.mwidth-400{
  max-width: 400px;
}

</style>
