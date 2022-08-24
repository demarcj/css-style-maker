<template v-if="elements">
<section id="canvas" class="canvas">
  <div 
    v-for="element in elements"
    class="element-container" 
    :class="element.class_name"
    :key="element.id"
  >
    <div 
      class="element" 
      :style="parseStyling(element.style_list)" 
      contenteditable="true"
    >
      {{ element.text }}
    </div> 
  </div>
</section>
</template>
<script>
export default {
  props: ['elements'],
  methods: {
    parseStyling(style_list) {
      if(!style_list){
        return [];
      }
      const stylings = Object.keys(style_list).map(style => {
        const obj = {};
        obj[style] = style_list[style];
        return obj;
      });
      return stylings;
    }
  }
}
</script>
<style scoped>
.element{
  display: inline-block;
}
.canvas{
  max-width: 100%;
  height: 500px;
  color: black;
  background-color: white;
  overflow: hidden;
}
</style>