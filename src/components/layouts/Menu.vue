<template>
  <header>
    <span 
      class="mobile-menu material-icons"
      @click="display_menu"
    >
      menu
    </span>
    <ul 
      id="menu" 
      class="menu"
      :class="{'display-menu-mobile': show_menu_mobile}"
    >
      <li>
        <div id="project" @click="display_menu_list(`project`)">Project</div>
        <ul>
          <li :class="{'disabled-item': !Object.keys(elements).length }" >
            <div @click="open_confirm('Are you sure you want to start a new project?', 'new-project')" >
              New Project
            </div>
          </li>
          <li :class="{'disabled-item': !Object.keys(saved_projects).length }">
            <div @click="open_project_prompt(`Open project`, 'open-project')">Open Project</div>
          </li>
          <li :class="{'disabled-item': !Object.keys(elements).length }">
            <div @click="open_save_prompt(`Save this project over...`, 'save')">Save</div>
          </li>
          <li :class="{'disabled-item': !Object.keys(elements).length }" >
            <a id="export" @click="export_stylings()">Export</a>
          </li>
        </ul>
      </li>
      <li>
        <div id="edit" @click="display_menu_list(`edit`)">Edit</div>
        <ul>
          <!-- <li 
            :class="{'disabled-item': !project_history.length }"
            @click="undo()" 
          >
            <div>Undo {{ project_history.length ? project_history[project_history.length - 1 < 0 ? 0 : project_history.length - 1].action : `` }}</div>
          </li>
          <li 
            :class="{'disabled-item': !history_mode }" 
            @click="redo()" 
          >
            <div>Redo {{ history_mode ? project_history[history_index].action : `` }}</div>
          </li> -->
          <!-- <li :class="{'disabled-item': !project_history.length }" >
            <div>History</div>
            <ul>
              <li 
                v-for="(project, index) in project_history"
                :key="index"
                @click="go_to_history(project)"
              >
                <div>{{ index <= history_index ? `Undo` : `Redo` }} {{ project.action }}</div> 
                <div 
                  class="history-line" 
                  v-if="history_index === index && show_history"
                ></div>
              </li>
              <li
                v-if="project_history.length"
                @click="redo()">
                <div>Redo {{ project_history[project_history.length - 1].action }}</div>
              </li>
            </ul>
          </li> -->
          <li 
            @click="delete_layers()" 
            :class="{'disabled-item': !Object.keys(selected_element).length }"
          >
            <div>Delete Element</div>
          </li>
        </ul>
      </li>
      <li>
        <div id="element" @click="display_menu_list(`element`)">Element</div>
        <ul>
          <li>
            <div @click="open_prompt(`Name this element`, 'new-text')">New Text</div>
          </li>
        </ul>
      </li>
      <li>
        <div id="style" @click="display_menu_list(`style`)">Style</div>
        <ul>
          <li :class="{'disabled-item': !selected_element?.text}">
            <div id="style_font" @click="display_menu_list(`style_font`)">Font</div>
            <ul>
              <li>
                <div @click="open_style(`Type in the font size`, 'font-size')">Size</div>
              </li>
              <li>
                <div @click="open_style(`Type in the font weight`, 'font-weight')">Weight</div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <div id="animation">Animation</div>
      </li>
      <li>
        <div id="reference" @click="display_menu_list(`reference`)">Reference</div>
        <ul>
          <li>
            <router-link :to="environment">No Reference</router-link>
          </li>
          <li>
            <div id="ref_font" @click="display_menu_list(`ref_font`)">Font</div>
            <ul>
              <li>
                <router-link to="/font-size">Font Size</router-link>
              </li>
              <li>
                <router-link to="/font-weight">Font Weight</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <div id="window" @click="display_menu_list(`window`)">Window</div>
        <ul>
          <li 
            :class="{'show-item': show_style}"
            @click="show_style = !show_style"
          >
            <div @click="$emit('display-window', 'style')">Style</div>
          </li>
          <li 
              :class="{'show-item':show_layers}"
              @click="show_layers = !show_layers"
            >
            <div @click="$emit('display-window', 'layers')">Layers</div>
          </li>
        </ul>
      </li>
      <li>
        <div id="help" @click="display_menu_list(`help`)">Help</div>
        <ul>
          <li>
            <div @click="open_dialog(`Create HTML and export that HTML's styling as reference or use it in your project :)`)">About...</div>
          </li>
        </ul>
      </li>
    </ul>
    <basic-dialog 
      v-if="show_dialog" 
      @close="close"
      :message="message"
    ></basic-dialog>
    <save-project-dialog 
      v-if="show_save_project_dialog" 
      :message="message"
      :saved_projects="saved_projects"
      @update="update_prompt_dialog"
      @close="close"
    ></save-project-dialog>
    <open-project-dialog 
      v-if="show_open_project_dialog" 
      :message="message"
      :saved_projects="saved_projects"
      @update="update_prompt_dialog"
      @close="close"
    ></open-project-dialog>
    <confirm-dialog 
      v-if="show_confirm_dialog" 
      @close="close"
      @update="update_confirm_dialog"
      :message="message"
    ></confirm-dialog>
    <prompt-dialog 
      v-if="show_prompt_dialog" 
      @update="update_prompt_dialog"
      @close="close"
      :message="message"
    ></prompt-dialog>
    <style-dialog 
      v-if="show_style_dialog" 
      @update="update_style_dialog"
      @close="close"
      :style="style"
      :message="message"
    ></style-dialog>
  </header>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElementModel, ElementData, ProjectElement, ProjectHistory } from 'src/interface';
import SaveProjectDialog from 'src/components/dialog/SaveProjectDialog.vue';
import OpenProjectDialog from 'src/components/dialog/OpenProjectDialog.vue';
export default defineComponent({
  components: { 
    SaveProjectDialog,
    OpenProjectDialog
  },
  props: {
    selected_element: {
      type: Object as PropType<ElementData>,
      default: () => ({})
    }, 
    elements: {
      type: Object as PropType<ElementModel>,
      default: () => ({})
    },
    saved_projects: {
      type: Object as PropType<ProjectElement>,
      default: () => ({})
    },
    project_history: {
      type: Array as PropType<ProjectHistory[]>,
      default: () => ([])
    },
    history_index: {
      type: Number,
      default: 0
    },
    history_state: {
      type: String,
      default: ``
    }
  },
  data() {
    return {
      show_dialog: false,
      show_confirm_dialog: false,
      show_prompt_dialog: false,
      show_style_dialog: false,
      show_menu_mobile: false,
      show_save_project_dialog: false,
      show_open_project_dialog: false,
      show_style: true,
      show_layers: true,
      show_history: false,
      history_mode: false,
      open_list_index: undefined,
      environment: window.location.hostname.includes(`localhost`) ? `/` : `/css-style-maker`,
      style: '',
      action: ``,
      message: ``,
      projects: localStorage.getItem(`projects`) === undefined
    }
  },
  methods:{
    display_menu(){
      this.show_menu_mobile = !this.show_menu_mobile;
    },
    display_menu_list(id: string) {
      const element = document.querySelector(`#${id} ~ ul`) as HTMLElement;
      element.classList.toggle("opened-list")
    },
    go_to_history(project: ProjectHistory) {
      // this.show_history = !(index === (this.project_history.length - 1));
      // this.history_mode = !(index === this.project_history.length);
      this.history_mode = true;
      let find_project;
      const find_index = this.project_history.findIndex(local_project => local_project.id.includes(project.id));
      if(find_index){
        find_project = this.project_history[find_index - 1]
      }
      this.$emit(`to-history`, find_project);
    },
    undo(){
      let project;
      const find_index = this.project_history.findIndex(project => project.id.includes(this.history_state));
      if(find_index >= 1){
        project = this.project_history[find_index - 1];
      }
      this.$emit(`to-history`, project);
    },
    redo(){
      let project;
      const find_index = this.project_history.findIndex(project => project.id.includes(this.history_state));
      if(find_index < this.project_history.length){
        project = this.project_history[find_index];
      }
      this.$emit(`to-history`, project);
    },
    export_stylings() {
      if(!(Object.keys(this.elements).length > 0)){
        return;
      }
      this.$emit("export-stylings");
    },
    open_prompt(message: string, action: string) {
      if(Object.keys(this.elements).length >= 100){
        this.open_dialog(`You have reached the max amount of layers`);
        return;
      }
      this.message = message;
      this.action = action;
      this.show_prompt_dialog = true;
    },
    open_save_prompt(message: string, action: string) {
      this.message = message;
      this.action = action;
      this.show_save_project_dialog = true;
    },
    open_project_prompt(message: string, action: string) {
      if(!(Object.keys(this.elements).length > 0)){
        return;
      }
      this.message = message;
      this.action = action;
      this.show_open_project_dialog = true;
    },
    open_confirm(message: string, action: string) {
      if(!Object.keys(this.elements).length) {
        return;
      }
      this.message = message;
      this.action = action;
      this.show_confirm_dialog = true;
    },
    open_style(message: string, style: string){
      if(!this.selected_element){
        return;
      }
      this.message = message;
      this.style = style;
      this.show_style_dialog = true;
    },
    delete_layers() {
      if(!(Object.keys(this.selected_element).length > 0)){
        return;
      }
      this.$emit('delete-layers');
    },
    open_dialog(message: string) {
      this.message = message;
      this.show_dialog = true;
    },
    close() {
      this.message = ``;
      this.style = ``;
      this.show_dialog = false;
      this.show_confirm_dialog = false;
      this.show_style_dialog = false;
      this.show_prompt_dialog = false;
      this.show_save_project_dialog = false;
      this.show_open_project_dialog = false;
    },
    update_prompt_dialog(user_input: string){
      this.$emit(this.action, user_input);
      this.close();
    },
    update_style_dialog(user_input: string){
      this.$emit('set-style', user_input, this.style)
      this.close();
    },
    update_confirm_dialog(){
      this.$emit(this.action, true);
      this.close();
    }
  }
})
</script>
<style scoped>
header{ background: var(--background); }
.menu{
  display: flex;
  flex-direction: row;
}
.menu li{
  position: relative;
  cursor: pointer;
  color: white;
  white-space: nowrap;
  display: block;
}
.menu li div, .menu li a { padding: 10px; } 
.menu li:hover{ background-color: #007acc; }
.menu li.disabled-item{
  background-color: #eee;
  color: #007acc;
}

.menu li.disabled-item:hover{ background-color: #a2a2a2; }
.menu li.disabled-item:hover{ cursor: context-menu; }
.menu li.disabled-item:hover ul { display: none; }
.menu ul{
  display: none;
  position: absolute;
  background: var(--background);
  inset: 100% auto auto 0;
  min-width: 150px;
  width: fit-content;
  box-shadow: var(--shadow);
  -webkit-box-shadow: var(--shadow)
}
.menu ul ul{
  left: 100%;
  top: 0;
}
.show-item, .show-item:hover{ border-right: 5px solid red; }
.menu a{display: block;}
.mobile-menu{
  display: none;
  cursor: pointer;
  padding: 5px;
}
.menu .history-line{
  background-color: white;
  height: 2px;
  padding: 0;
}
@media screen and (min-width: 961px) {
  .menu li:hover>ul{display: block;} 
}
@media screen and (max-width: 960px) {
  .menu{ display: none; }
  .mobile-menu{display: inline-block;}
  .menu.display-menu-mobile{display: block;}
  .menu ul{position: static;}
  .menu li div, .menu li a{border-bottom: 1px solid white;}
  .menu li li div, .menu li li a{ padding: 10px 25px; }
  .menu li li li div, .menu li li li a{ padding: 10px 35px; }
  .menu li:hover{background-color: inherit;}
  ul.opened-list{display: block;}
}
</style>

