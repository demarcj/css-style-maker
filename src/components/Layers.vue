<template>
  <div class="row">
    <div class="cell">{{ index }}</div> 
    <div class="cell">{{ layer }}</div>
  </div>
</template>
<script>
export default {
  props: ['layer', 'index']
}
</script>
<style scoped>
  .divider{
    background-color: black;
    height: 1px;
  }
  .row:nth-child(odd) {
    background-color: #3c3c3c;
  }
  .cell{
    cursor: pointer;
  }
</style>