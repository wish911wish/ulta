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
        <h1>ULTA!</h1>
        <p>“..ultimate frisbee combines</p>
        <p>speed, grace and powerful hurling</p>
        <p>with a grueling pace.”</p>
        <p class="mt-4">THE WALL STREET JOURNAL</p>
        <div class="text-center">
          <v-btn
            color="primary"
            nuxt
            to="/events"
          >
            Do Ultimate!!
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped lang="scss">
.contents-container{
  & p, h1{
    text-align: center;
    color: var(--v-font-base);
  }
  & div{
    margin-top: 50px;
  }
  & h1{
    margin: 50px 0;
  }
}
</style>
