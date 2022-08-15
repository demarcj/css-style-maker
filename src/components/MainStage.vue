<template>
  <div class="element" contenteditable="true">{{ element }}</div> 
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