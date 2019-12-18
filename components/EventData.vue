<template>
  <div class="event-data mr-5 ml-3">
    <v-icon v-if="type === 'member' " class="event-data__icon">
      fas fa-users
    </v-icon>
    <v-icon v-if="type === 'place' " class="event-data__icon">
      fas fa-map-pin
    </v-icon>
    <v-icon v-if="type === 'time' " class="event-data__icon">
      fas fa-clock
    </v-icon>
    <span class="ml-5">
      {{ data }}
    </span>
  </div>
</template>

<script>

export default {
  props: ['type', 'data']
}

</script>

<style scoped lang="scss">

.event-data{
  &__icon{
    width: 30px;
  }
  margin-top: 5px;
}

</style>
