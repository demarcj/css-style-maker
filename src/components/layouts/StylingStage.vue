<template>
  <section id="style-info" class="style-info">
    <div class="style-header">Stylings</div>
    <div class="style-stage-container" v-if="Object.keys(selected_element).length > 0 ">
      <div class="data-section">
        <div class="name">{{ selected_element.name }}</div>
        <div class="style_list">Class Name: {{ selected_element.class_name }}</div>
        <div 
          class="style_list" 
          v-for="(value, key, index) in selected_element.style_list" 
          :key="index"
        >
          {{ key }}: {{ value }}
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElementData } from 'src/interface';
export default defineComponent({
  props: {
    selected_element: {
      type: Object as PropType<ElementData>,
      default: () => ({})
    }
  }
});
</script>

<style scoped>
.style-info{
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 25%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
.style-header{
  color: white;
  border-bottom: 1px solid white;
  padding: 5px;
}
.style-stage-container{
  padding: 5px;
  overflow: scroll;
}
.name{
  font-size: 18px;
  padding-bottom: 5px;
}
@media screen and (max-width: 960px) {
  .style-info{
    max-width: none;
  }
}
</style>