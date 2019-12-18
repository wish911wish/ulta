<template>
  <div class="mb-5">
    <div class="events-date">
      {{ date }}
    </div>
    <div class="under-bar-date"></div>
    <div class="event-data px-5 pt-5" v-for="(event, index) in events" :key="index">
      <div class="event-data__title">
        {{ event.title }}
      </div>
      <v-row justify="start">
        <div class="event-data__member mr-5 ml-3">
          <v-icon class="mr-2">
            fas fa-users
          </v-icon>
          <span>
            {{ event.member }}
          </span>
        </div>
        <div>
          <v-icon class="mr-2">
            fas fa-map-pin
          </v-icon>
          <span>
            {{ event.place }}
          </span>
        </div>
      </v-row>
      <div v-if="event.myevent === true" class="text-center my-3">
        <v-btn
          color="primary"
          small
          to="/event/edit"
        >
          イベントを編集する
        </v-btn>
      </div>
      <div class="under-bar-dateil"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['date', 'events']
}

</script>

<style scoped lang="scss">
.under-bar{
  &-date{
    background-color: var(--v-primary-base);
    width: 100%;
    height: 5px;
    border-radius: 3px;
  }
  &-dateil{
    background-color: var(--v-font-base);
    width: 100%;
    height: 1px;
    border-radius: 1px;
    margin-top: 5px;
  }
}

.events-date{
  font-size: 20px
}

.event-data{
  &__title{
    font-size: 20px;
    margin-bottom: 3px;

  }
}

.v-btn{
  height: 20px;
}

</style>
