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
        <section-large :name="'DETAIL'" />
        <div class="event-detail">
          <div class="event-detail__title">
            Vahul練習
          </div>
          <div class="event-detail__desctiption mt-5">
            Vahulの練習です。今回はゲストにビアーズの方々が参加してくれます！今週もみんなで楽しめっとしましょう！！！
          </div>
          <div class="mt-5">
            <div class="event-detail__date-place">
              <event-data type="place" :data="'東京都江戸川区'" />
            </div>
            <div class="event-detail__date-time">
              <event-data type="time" :data="'10:00 ~ 16:00'" />
            </div>
            <div class="event-detail__date-member">
              <event-data type="member" :data="8" />
            </div>
          </div>
        </div>
        <section-large :name="'MEMBER'" class="mt-5" />
        <div>
          <ul class="event-detail__member-list">
            <li class="event-detail__member" v-for="(member,index) in this.members" :key=index>
              <div class="icon-frame w-h-40 mt-5">
                <img class="object-fit-cover w-100" :src='iconImage' />
              </div>
              <div class="event-detail__member-name">
                {{ member.name }}
              </div>
            </li>
          </ul>
        </div>
        <div class="text-center mt-5">
          <v-btn
            color="accent"
            nuxt
            class=""
          >
            イベントに参加する
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SectionLarge from '~/components/SectionLarge.vue'
import EventData from '~/components/EventData.vue'
import iconImage from '~/components/images/user-alt-solid.svg'

export default {
  components: {
    SectionLarge,
    EventData
  },
  data () {
    return {
      members: [
        {
          name: '加藤珠紀',
          image: 'xxxxxxx.png'
        },
        {
          name: '島田秀',
          image: 'xxxxxxx.png'
        },
        {
          name: '竹内まりあ',
          image: 'xxxxxxx.png'
        },
        {
          name: 'Jane Doe',
          image: 'xxxxxxx.png'
        },
        {
          name: 'Francesca Hayward',
          image: 'xxxxxxx.png'
        },
        {
          name: '渡来康太',
          image: 'xxxxxxx.png'
        },
        {
          name: '小笠原広道',
          image: 'xxxxxxx.png'
        }
      ],
      iconImage
    }
  }
}

</script>

<style scoped lang="scss">
.event-detail{
  &__title{
    font-size: 30px;
  }
  &__member{
    list-style:none;
    width: 60px;
    margin-right: 5px;
    margin-top: 5px;
  }
  &__member-name{
    font-size: 12px;
    text-align: center;
  }
  &__member-list{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-right: -5px;
    margin-top: -10px;
  }
}
</style>
