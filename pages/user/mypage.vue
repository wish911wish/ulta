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
      <div class="contents-container">
        <section-large :name="'MYPAGE'" />
        <nuxt-link to="/user/edit" >
          <div>
            <v-icon class="mr-2">
              fas fa-cog
            </v-icon>
            <span>
              ユーザー情報の編集はこちら
            </span>
          </div>
        </nuxt-link>
        <div class="icon-frame w-h-65 mt-5">
          <img class="object-fit-cover w-100" :src='iconImage' />
        </div>
        <div class="mypage__name">
          南場和寿
        </div>
        <section-large class="mt-5" :name="'MY EVENTS'" />
        <div v-for="(eventList, index) in this.eventLists" :key="index" >
          <date-events :date="eventList.date" :events="eventList.events" />
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SectionLarge from '~/components/SectionLarge.vue'
import DateEvents from '~/components/DateEvents.vue'
import iconImage from '~/components/images/user-alt-solid.svg'

export default {
  components: {
    SectionLarge,
    DateEvents
  },
  data () {
    return {
      iconImage,
      eventLists: [
        {
          date: '12/23 土',
          events: [
            {
              title: 'Vahul練習',
              member: 8,
              place: '東京都江戸川区',
              myevent: true
            },
            {
              title: 'Vahul練習',
              member: 8,
              place: '東京都江戸川区',
              myevent: false
            },
            {
              title: 'Vahul練習',
              member: 8,
              place: '東京都江戸川区',
              myevent: false
            }
          ]
        },
        {
          date: '12/24 日',
          events: [
            {
              title: 'BeA練習',
              member: 8,
              place: '東京都江戸川区',
              myevent: false
            },
            {
              title: 'BeA練習',
              member: 8,
              place: '東京都江戸川区',
              myevent: true
            },
            {
              title: 'BeA練習',
              member: 8,
              place: '東京都江戸川区',
              myevent: false
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped style="scss">
.mypage__name{
  border-bottom: solid 1px;
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
}

</style>
