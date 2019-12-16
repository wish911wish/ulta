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
  /* Custom Propertiesの設定方法を調べること */
  /* color: var(--v-primary); */
  color: #94AA2A;
}
</style>
