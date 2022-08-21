<template>
<Menu 
  :selected_element="selected_element"
  @new-project="new_project"
  @new-text="new_text" 
  @set-style="set_style"
  @delete-layers="delete_layers"
  @display-window="display_window"
/>
<main class="main">
  <main-stage
    :elements="elements"
  ></main-stage>
  <styling-stage 
    :selected_element="selected_element"
  ></styling-stage>
</main>
<layers
  :elements="elements"
  @select-layers="select_layers"
  @deselect-layers="deselect_layers"
></layers>
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
      selected_element: {},
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
      this.elements[id].class_name = this.get_class_name(text_layer);
      this.elements[id].text = text_layer;
      this.elements[id].index = size;
      this.elements[id].style_list = {};
      this.elements[id].selected = false;
    },
    get_class_name(txt) {
      return txt.replaceAll(` `, `-`)
    },
    set_style(id, style) {
      const value = prompt(`Type in the ${style}`);
      if(value === null){
        return;
      }
      this.elements[id].style_list[style] = value + `px`;
      this.selected_element.style_list[style] = value + `px`;
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
      if(!this.elements){
        return;
      }
      const find_select = Object.keys(this.elements).filter(id => this.elements[id].selected);
      if(find_select.length === 1) {
        this.selected_element = this.elements[find_select];
        return;
      }
      this.selected_element = {};
    },
    delete_layers() {
      Object.keys(this.elements).forEach(id => {
        if(this.elements[id].selected){
          delete this.elements[id]
        }
      });
      this.resort_index();
      this.get_element_data();
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
</style>
