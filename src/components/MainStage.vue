<template>
  <div class="layer">
    <div class="element" contenteditable="true">{{ element }}</div> 
  </div>
</template>
<script>
export default {
  props: ['element']
}
</script>
<style scoped>
  .element{
    display: inline-block;
  }
</style>