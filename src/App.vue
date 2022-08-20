<template>
<Menu 
  @new-text="new_text" 
  @new-project="new_project"
  @delete-layers="delete_layers"
  @display-window="display_window"
/>
<main class="main">
  <section id="canvas" class="canvas">
    <main-stage
      v-for="element in elements" 
      :key="element.index"
      :element="element.text"
    ></main-stage>
  </section>
    <styling-stage 
      :name="element_name"
    ></styling-stage>
</main>
<section id="layers" class="layers">
  <div class="row table-header-row">
    <div class="cell table-header">Index</div>
    <div class="cell table-header">Element / Layer Name</div>
  </div>
  <div class="table-row">
    <layers 
      v-for="element in elements" 
      :id="element.id"
      :key="element.order"
      :layer="element.text"
      :index="element.index"
      :selected="element.selected"
      @select-layers="select_layers"
      @deselect-layers="deselect_layers"
    ></layers>
  </div>
</section>
<Footer />
</template>

<script>
import MainStage from './components/MainStage.vue';
import Menu from './components/Menu.vue';
import Layers from './components/Layers.vue';
import StylingStage from './components/StylingStage.vue';
import Footer from './components/Footer.vue';
import { v4 as uuid } from 'uuid';
import './style.css';

export default {
  components: {
    MainStage,
    Menu,
    Layers,
    StylingStage,
    Footer
  },
  data() {
    return {
      elements: {},
      element_name: ``,
      windows: {}
    }
  },
  methods: {
    new_project() {
      const confirm_new = confirm(`Are you sure you want to start a new project?`);
      if(confirm_new){
        this.elements = {};
      }
    },
    new_text(message = `Name this element`) {
      const text_layer = prompt(message);
      if(text_layer === null){
        return;
      }
      if(text_layer === ``){
        return this.new_text(`Please enter a name in the input field or click cancel`);
      }
      const id = uuid().toString();
      const size = Object.keys(this.elements).length ? Object.keys(this.elements).length : 0; 
      this.elements[id] = {};
      this.elements[id].id = id;
      this.elements[id].name = text_layer;
      this.elements[id].text = text_layer;
      this.elements[id].index = size;
      this.elements[id].selected = false;
    },
    select_layers(id) {
      this.elements[id].selected = true;
      this.get_element_data();
    },
    deselect_layers(id) {
      this.elements[id].selected = false;
      this.get_element_data();
    },
    get_element_data() {
      const find_select = Object.keys(this.elements).filter(id => this.elements[id].selected);
      if(find_select.length === 1) {
        this.element_name = this.elements[find_select].name;
        return;
      }
      this.element_name = ``;
    },
    delete_layers() {
      Object.keys(this.elements).forEach(id => {
        if(this.elements[id].selected){
          delete this.elements[id]
        }
      });
      this.resort_index();
    },
    resort_index() {
      if(!Object.keys(this.elements).length){
        return;
      }
      Object.keys(this.elements).forEach((id, index) => this.elements[id].index = index);
    },
    display_window() {
      console.log(`not yet`)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--background);
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  font-size: 1.4rem;
}
.main{
  display: grid;
  grid-template-columns: 1fr 15%;
}
.canvas{
  max-width: 100%;
  height: 500px;
  color: black;
  background-color: white;
}
.layers{
  border-top: 1px solid white;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
}
.table-header-row{
  border-bottom: 1px solid white;
}
.table-header{
  padding-top: 10px;
  padding-bottom: 10px;
}
.table-row{
  overflow-y: scroll;
}
</style>
