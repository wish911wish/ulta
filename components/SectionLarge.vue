<template>
  <h1>
    {{ name }}
  </h1>
</template>

<script>

export default {
  props: ['name']
}

</script>

<style scoped>
h1 {
  color: var(--v-primary-base);
}
</style>
