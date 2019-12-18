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
        <section-large :name="'NEW EVENT'" />
        <v-text-field
          v-model="title"
          label="イベント名"
          required
        />
        <v-textarea
          v-model="desctiption"
          label="イベント内容"
          required
        />
        <v-text-field
          v-model="place"
          label="場所"
          required
        />
        <v-text-field
          v-model="time"
          label="日時"
          required
        />
        <div class="text-center">
          <v-btn
            color="accent"
            nuxt
            class=""
          >
            イベントを作成する
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
  }
}

</script>

<style scoped>
.mwidth-400{
  max-width: 400px;
}

</style>
