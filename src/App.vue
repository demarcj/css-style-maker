<template>
<div class="app-body">
  <Menu 
    :selected_element="selected_element"
    :elements="elements"
    @new-project="new_project"
    @open-project="open_project"
    @save="save"
    @new-text="new_text" 
    @export-stylings="export_stylings"
    @delete-layers="delete_layers"
    @display-window="display_window"
    @set-style="set_style"
  />
  <div class="main-stage">
    <main-stage
      :elements="elements"
      :is_ctrl="is_ctrl"
      @mutant-elements="mutant_elements"
    ></main-stage>
    <styling-stage
      v-if="show_window.style"
      :selected_element="selected_element"
    ></styling-stage>
  </div>
  <layers
    v-if="show_window.layers"
    :elements="elements"
    :is_ctrl="is_ctrl"
    @mutant-elements="mutant_elements"
  ></layers>
  <Footer />
</div>
<div class="page-view" v-if="show_page_view">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElementModel, ElementData } from 'src/interface';
import { window_types } from 'src/constants';
import MainStage from 'src/components/layouts/MainStage.vue';
import Menu from 'src/components/layouts/Menu.vue';
import Layers from 'src/components/layouts/Layers.vue';
import StylingStage from 'src/components/layouts/StylingStage.vue';
import Footer from 'src/components/layouts/Footer.vue';
import { v4 as uuid } from 'uuid';
import './style.css';

export default defineComponent({
  created() {
    const id = uuid();
    this.elements[id] = {} as ElementData;
    this.elements[id].id = id;
    this.elements[id].name =`example`;
    this.elements[id].class_name = `example`;
    this.elements[id].text = `Checkout the 'Style' menu for that special sauce`;
    this.elements[id].index = 0;
    this.elements[id].style_list = {
      'font-size': `32px`
    };
    this.elements[id].selected = true;
    this.selected_element = this.elements[id];
    this.display_view(this.$route.path);
  },
  mounted() {
    const setKey = (e: KeyboardEvent, key: boolean) => {
      if(e.key.includes(`Control`)){
        this.is_ctrl = key;
      }
    }
    const setKeyup = (e: KeyboardEvent) => setKey(e, false);
    const setKeydown = (e: KeyboardEvent) => setKey(e, true);
    document.addEventListener(`keydown`, setKeydown);
    document.addEventListener(`keyup`, setKeyup);
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
      elements: {} as ElementModel,
      selected_element: {} as ElementData,
      is_ctrl: false,
      windows: {},
      show_page_view: false,
      show_window: {
        style: true,
        layers: true
      },

    }
  },
  methods: {
    new_project(confirmation: boolean) {
      if(confirmation){
        this.elements = {};
        this.selected_element = {} as ElementData;
      }
    },
    save(project_name: string) {
      let projects;
      if(localStorage.getItem(`projects`)){
        const get_projects = JSON.parse(JSON.stringify(localStorage.getItem(`projects`)));
        projects = {
          [project_name]: JSON.stringify(this.elements),
          ...get_projects
        };
      } else {
        projects = {
          [project_name]: this.elements
        }
      }
      localStorage.setItem(`projects`, JSON.stringify(projects));
    },
    open_project(project_name: string) {
      const project = JSON.parse(localStorage.getItem(`projects`) as string);
      this.elements = JSON.parse(project[project_name]);
    },
    export_stylings() {
      const parse_css = this.parse_css();
      const canvas = document.querySelector("#canvas") as HTMLElement;
      const animation = new Blob([parse_css, canvas.innerHTML], {type: 'text/html'});
      const export_style = document.querySelector("#export") as HTMLAnchorElement;
      export_style.download = "animation.html";
      export_style.href = window.URL.createObjectURL(animation);
    },
    parse_css() {
      const parse_css = Object.keys(this.elements).map(id => {
        const element = this.elements[id];
        const name = `.${element.class_name}{\n`;
        const stylings = Object.keys(element.style_list).map(style => {
          return `${style}: ${element.style_list[style]};\n`
        })
        return name + stylings.join("") + `}\n`;
      });
      return `<style>\n${parse_css.join("")}</style>
      `;
    }, 
    new_text(user_input: string) {
      if(user_input === ''){
        return;
      }
      const id: string = uuid();
      const size = Object.keys(this.elements).length ? Object.keys(this.elements).length : 0; 
      this.elements[id] = {} as ElementData;
      this.elements[id].id = id;
      this.elements[id].name = user_input;
      this.elements[id].class_name = this.get_class_name(user_input);
      this.elements[id].text = user_input;
      this.elements[id].index = size;
      this.elements[id].style_list = {};
      this.elements[id].selected = false;
    },
    get_class_name(txt: string) {
      return txt.replaceAll(` `, `-`)
    },
    set_style(user_input: string, style: string) {
      if(user_input === null){
        return;
      }
      this.elements[this.selected_element.id].style_list[style] = user_input;
      this.selected_element.style_list[style] = user_input;
    },
    get_element_data() {
      if(!this.elements){
        return;
      }
      const find_select = Object.keys(this.elements).filter(id => this.elements[id].selected);
      if(find_select.length === 1) {
        const selected_element = find_select[0];
        this.selected_element = {...this.elements[selected_element]};
        return;
      }
      this.selected_element = {} as ElementData;
    },
    mutant_elements(elements_prop: ElementModel){
      this.elements = elements_prop;
      const element_key = Object.keys(this.elements).filter(id => this.elements[id].selected);
      if(element_key.length === 1) {
        this.selected_element = this.elements[element_key[0]];
        return;
      }
      this.selected_element = {} as ElementData;
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
    display_window(window_type: window_types) {
      this.show_window[window_type] = !this.show_window[window_type];
    },
    display_view(path: string) {
      this.show_page_view = path !== `/` && !path.includes(`css-style-maker`);
    }
  },
  watch: {
    $route(new_route){
      this.display_view(new_route.path);
    }
  }
})
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
.main-stage{
  display: flex;
}
.page-view{
  width: 50vw;
}
@media screen and (max-width: 960px) {
  #app{
    height: auto;
    grid-template-columns: 1fr;
  }
  .main-stage {
    display: block;
  }
  .app-body{
    order: 2;
  }
  .page-view{
    order: 1;
    width: 100%;
    border-bottom: 1px solid white;
    max-height: 80vh;
  }
}
</style>
