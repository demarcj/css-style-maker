<template>
  <div 
    class="row"
    v-bind:class="{selected: selected}"
    @click="select_layers()" 
  >
    <div class="cell">{{ index }}</div> 
    <div class="cell">{{ layer }}</div>
  </div>
</template>
<script>
export default {
  props: ['id', 'layer', 'index', 'selected'],
  methods: {
    select_layers() {
      const selected = !this.is_selected;
      if(selected){
        this.$emit('select-layers', this.id);
      }
      if(!selected){
        this.$emit('deselect-layers', this.id);
      }
    }
  }
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
  .row.selected{
    position: relative;
  }
  .row.selected::before{
    content: "";
    background-color: green;
    position: absolute;
    inset: 0 auto 0 0;
    width: 2px;
  }
</style>