<template v-if="selected_element">
  <section id="style-info" class="style-info">
    <div class="style-header">Stylings</div>
    <div class="data-section">
      <div class="name">{{ selected_element.name }}</div>
      <div 
        class="style_list" 
        v-for="(value, key, index) in selected_element.style_list" 
        :key="index"
      >
        {{ key }}: {{ value }}
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['selected_element']
}
</script>

<style scoped>
  .style-info{
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .style-header{
    color: white;
    border-bottom: 1px solid white;
    padding: 5px;
  }
  .data-section{
    padding: 5px;
    overflow: scroll;
  }
  .name{
    font-size: 18px;
  }
</style>