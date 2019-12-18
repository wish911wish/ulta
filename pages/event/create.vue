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
        <section-large :name="'CREATE EVENT'" />
        <div class="my-5">
          イベントを作成しました。下記のURLを仲間に伝えて、参加を呼びかけましょう！
        </div>
        <v-text-field
          v-model="url"
          label="イベントURL"
          required
        />
        <div class="text-center mt-5">
          <v-btn
            color="primary"
            nuxt
            class=""
          >
            Top
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SectionLarge from '~/components/SectionLarge.vue'

export default {
  components: {
    SectionLarge
  },
  data () {
    return {
      url: 'https://ulta/event/abcdefg1234567890'
    }
  }
}

</script>

<style scoped>
.mwidth-400{
  max-width: 400px;
}

</style>
