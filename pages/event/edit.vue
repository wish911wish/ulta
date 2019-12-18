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
        <section-large :name="'EDIT EVENT'" />
        <v-text-field
          v-model="this.title"
          label="イベント名"
          value="Vahul練習"
          required
        />
        <v-textarea
          v-model="this.desctiption"
          label="イベント内容"
          required
        />
        <v-text-field
          v-model="this.place"
          label="場所"
          required
        />
        <v-text-field
          v-model="this.time"
          label="日時"
          required
        />
        <v-text-field
          v-model="url"
          label="イベントURL"
          required
        />
        <div class="text-center">
          <v-btn
            color="accent"
            nuxt
            class=""
          >
            イベントを更新する
          </v-btn>
        </div>
        <div class="text-center mt-5">
          <v-btn
            color="font white-text"
            nuxt
            class=""
          >
            イベントを削除する
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
      title: 'Vahul練習',
      desctiption: 'Vahulの練習です。今回はゲストにビアーズの方々が参加してくれます！今週もみんなで楽しめっとしましょう！！！',
      place: '東京都江戸川区',
      time: '10:00 ~ 16:00',
      url: 'https://ulta/event/abcdefg1234567890'
    }
  }
}

</script>

<style scoped>
.mwidth-400{
  max-width: 400px;
}

.white-text{
  color: white;
}

</style>
