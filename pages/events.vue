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
        <section-large :name="'EVENTS'" />
        <div v-for="(eventList, index) in this.eventLists" :key="index">
          <date-events :date="eventList.date" :events="eventList.events" />
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SectionLarge from '~/components/SectionLarge.vue'
import DateEvents from '~/components/DateEvents.vue'

export default {
  components: {
    SectionLarge,
    DateEvents
  },
  data () {
    return {
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
      ],
      testData: {
      }
    }
  }
}

</script>
