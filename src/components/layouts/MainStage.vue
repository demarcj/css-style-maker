<template>
<section id="canvas" class="canvas">
  <div 
    v-for="element in sort_element()"
    class="element-container"
    @click="select_stage_element(element)" 
    :id="element.id"
    :class="{[element.class_name]: element.class_name, selected: element.selected}"
    :key="element.id"
    :style="parseStyling(element.style_list)" 
  >
    {{ element.text }}
  </div>
</section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElementModel, ElementData } from 'src/interface';
export default defineComponent({
  data() {
    return {
      elements_prop: {} as ElementModel,
      elements_list: [] as ElementData[]
    }
  },
  props: {
    elements: {
      type: Object as PropType<ElementModel>,
      default: () => ({})
    },
    is_ctrl: Boolean,
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
    },
    sort_element(){
      return Object.keys(this.elements)
      .map(key => this.elements[key])
      .sort((a, b) => a.index - b.index);
    },
    select_stage_element(element: ElementData) {
      this.elements_prop = this.elements;
      if(!this.is_ctrl){
        Object.keys(this.elements_prop).forEach(id => {
          this.elements_prop[id].selected = false;
        });
      } 
      this.elements_prop[element.id].selected = !element.selected;
      this.$emit(`selected-element`, this.elements_prop);
    }
  }
})
</script>
<style scoped>
.selected{
  outline: 2px dashed var(--secondary);
}
.canvas{
  max-width: 100%;
  min-height: 500px;
  height: 100%;
  color: black;
  background-color: white;
  overflow: hidden;
  flex: 1;
}
</style>