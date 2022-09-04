<template>
<div class="app-body">
  <Menu 
    :selected_element="selected_element"
    :elements="elements"
    @new-project="new_project"
    @new-text="new_text" 
    @export-stylings="export_stylings"
    @delete-layers="delete_layers"
    @display-window="display_window"
    @set-style="set_style"
  />
  <main class="main">
    <main-stage
      :elements="elements"
    ></main-stage>
    <styling-stage
      v-if="show_window.style"
      :selected_element="selected_element"
    ></styling-stage>
  </main>
  <layers
    :elements="elements"
    @select-layers="select_layers"
    @deselect-layers="deselect_layers"
  ></layers>
  <Footer />
</div>
<div class="page-view" v-if="show_page_view">
  <router-view></router-view>
</div>
</template>

<script>
import MainStage from 'src/components/layouts/MainStage.vue';
import Menu from 'src/components/layouts/Menu.vue';
import Layers from 'src/components/layouts/Layers.vue';
import StylingStage from 'src/components/layouts/StylingStage.vue';
import Footer from 'src/components/layouts/Footer.vue';
import { v4 as uuid } from 'uuid';
import './style.css';

export default {
  created() {
    const id = uuid();
    this.elements[id] = {};
    this.elements[id].id = id;
    this.elements[id].name =`example`;
    this.elements[id].class_name = `example`;
    this.elements[id].text = `Checkout the 'Style' menu for that special sauce`;
    this.elements[id].index = 0;
    this.elements[id].style_list = {
      fontSize: `32px`
    };
    this.elements[id].selected = true;
    this.selected_element = this.elements[id];
    this.show_page_view = this.$route.path !== `/`;
  },
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
      windows: {},
      show_page_view: true,
      show_window: {
        style: true
      },

    }
  },
  methods: {
    new_project(confirmation) {
      if(confirmation){
        this.elements = {};
        this.selected_element = {};
      }
    },
    export_stylings() {
      const parse_css = this.parse_css();
      const animation = new Blob([parse_css, document.querySelector("#canvas").innerHTML], {type: 'text/html'});
      document.querySelector("#export").download = "animation.html";
      document.querySelector("#export").href = window.URL.createObjectURL(animation);
    },
    parse_css() {
      const parse_css = Object.keys(this.elements).map(id => {
        const element = this.elements[id];
        const name = `.${element.class_name}{\n`;
        const stylings = Object.keys(element.style_list).map(style => {
          return `${this.get_css_name(style)}: ${element.style_list[style]};\n`
        })
        return name + stylings.join("") + `}\n`;
      });
      return `
        <style>
          ${parse_css.join("")}</style>
      `;
    }, 
    get_css_name(name) {
      const name_switch = {
        fontSize: `font-size`,
        fontWeight: `font-weight`
      }
      return name_switch[name];
    },
    new_text(user_input) {
      if(user_input === ''){
        return;
      }
      const id = uuid();
      const size = Object.keys(this.elements).length ? Object.keys(this.elements).length : 0; 
      this.elements[id] = {};
      this.elements[id].id = id;
      this.elements[id].name = user_input;
      this.elements[id].class_name = this.get_class_name(user_input);
      this.elements[id].text = user_input;
      this.elements[id].index = size;
      this.elements[id].style_list = {};
      this.elements[id].selected = false;
    },
    get_class_name(txt) {
      return txt.replaceAll(` `, `-`)
    },
    set_style(user_input, style) {
      if(user_input === null){
        return;
      }
      this.elements[this.selected_element.id].style_list[style] = user_input;
      this.selected_element.style_list[style] = user_input;
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
        this.selected_element = {...this.elements[find_select]};
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
    display_window(window_type) {
      this.show_window[window_type] = !this.show_window[window_type];
    }
  },
  watch: {
    $route(new_route){
      this.show_page_view = new_route.path !== `/`;
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
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100vh;
}
.app-body{
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}
.main{
  display: flex;
}
.page-view{
  width: 50vw;
}
</style>
