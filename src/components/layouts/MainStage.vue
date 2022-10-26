<template>
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
    >
      {{ element.text }}
    </div> 
  </div>
</section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElementModel } from 'src/interface';
export default defineComponent({
  props: {
    elements: {
      type: Object as PropType<ElementModel>,
      default: () => ({})
    }
  },
  methods: {
    parseStyling(style_list: {[key:string]: {}}): {} {
      if(!style_list){
        return [];
      }
      const stylings = Object.keys(style_list).map(style => {
        const obj: {[key:string]: {}} = {};
        obj[style] = style_list[style];
        return obj;
      });
      return stylings;
    }
  }
})
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
  flex: 1;
}
</style>