<template>
  <section id="style-info">
    <div class="style-header">Stylings</div>
    <div>Name: {{ name }}</div>
  </section>
</template>
<script>
export default {
  props: ['name']
}
</script>

<style scoped>
  .style-header{
    color: white;
    border-bottom: 1px solid white;
    padding: 5px;
  }
</style>