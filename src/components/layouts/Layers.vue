<template>
<section id="layers" class="layers">
  <div class="row table-header-row">
    <div class="cell table-header">Index</div>
    <div class="cell table-header">Element / Layer Name</div>
    <div class="cell table-header">Timeline</div>
  </div>
  <div class="table-row">
    <div 
      class="row"
      v-for="element in sort_element()"
      :key="element.id"
      :class="{selected: element.selected}"
      @click="select_layers(element)" 
    >
      <div class="cell">{{ element.index }}</div> 
      <div class="cell">{{ element.name }}</div>
      <div class="cell"></div>
    </div>
  </div>
</section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElementModel, ElementData } from 'src/interface';
export default defineComponent({
  props: {
    elements: {
      type: Object as PropType<ElementModel>,
      default: () => ({})
    },
    is_ctrl: Boolean
  },
  data() {
    return {
      elements_prop: {} as ElementModel
    }
  },
  methods: {
    select_layers(element: ElementData) {
      this.elements_prop = this.elements;
      if(!this.is_ctrl){
        Object.keys(this.elements_prop).map(id => this.elements_prop[id].selected = false);
      } 
      this.elements_prop[element.id].selected = !element.selected;
      this.$emit(`selected-element`, this.elements_prop);
    },
    sort_element(){
      return Object.keys(this.elements)
        .map(key => this.elements[key])
        .sort((a, b) => a.index - b.index);
    },
  }
})
</script>
<style scoped>
.layers{
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  flex: 1;
}
.divider{
  background-color: black;
  height: 1px;
}
.row:nth-child(odd) {
  background-color: #3c3c3c;
}
.cell{
  cursor: pointer;
  padding: 5px 15px;
}
.row{
  display: grid;
  grid-template-columns: 75px 25% 1fr;
  grid-template-rows: initial;
}
.row.selected{
  position: relative;
}
.row.selected::before{
  content: "";
  background-color: var(--secondary);
  position: absolute;
  inset: 0 auto 0 0;
  width: 2px;
}
.row.table-header-row{
  border-bottom: 1px solid white;
  background-color: var(--background);
}
.row.table-header-row .cell{
  cursor: context-menu;
  border-right: 1px solid white;
}

.row.table-header-row .cell:last-child{
  border-right: none;
}
.table-header{
  padding-top: 10px;
  padding-bottom: 10px;
}
.table-row{
  overflow-y: scroll;
}
</style>