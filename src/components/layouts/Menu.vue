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
          <li :class="{'disabled-item': !(Object.keys(elements).length > 0)}" >
            <div @click="open_confirm('Are you sure you want to start a new project?', 'new-project', !(Object.keys(elements).length > 0))" >
              New Project
            </div>
          </li>
          <li :class="{'disabled-item': !(Object.keys(elements).length > 0)}" >
            <a id="export" @click="export_stylings()">Export</a>
          </li>
        </ul>
      </li>
      <li>
        <div id="edit" @click="display_menu_list(`edit`)">Edit</div>
        <ul>
          <!-- <li>Undo</li>
          <li>Redo</li>
          <li>History</li> -->
          <li 
            @click="delete_layers()" 
            :class="{'disabled-item': !(Object.keys(selected_element).length > 0)}"
          >
            <div>Delete Element</div>
          </li>
        </ul>
      </li>
      <li>
        <div id="element" @click="display_menu_list(`element`)">Element</div>
        <ul>
          <li>
            <div @click="open_prompt(`Name this element`, 'txt', 'new-text')">New Text</div>
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
          <li>
            <div @click="$emit('display-window', 'style')">Style</div>
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
      :input_type="input_type"
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
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['selected_element', 'elements'],
  data() {
    return {
      show_dialog: false,
      show_confirm_dialog: false,
      show_prompt_dialog: false,
      show_style_dialog: false,
      show_menu_mobile: false,
      open_list_index: undefined,
      environment: window.location.hostname.includes(`localhost`) ? `/` : `/css-style-maker`,
      style: '',
      input_type: '',
      action: ``,
      message: ``
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
    export_stylings() {
      if(!(Object.keys(this.elements).length > 0)){
        return
      }
      this.$emit("export-stylings");
    },
    open_prompt(message: string, input_type: string, action: string) {
      if(Object.keys(this.elements).length >= 100){
        this.open_dialog(`You have reached the max amount of layers`);
        return;
      }
      this.message = message;
      this.action = action;
      this.input_type = input_type;
      this.show_prompt_dialog = true;
    },
    open_confirm(message: string, action: string, disabled: boolean = false) {
      if(disabled){
        return;
      }
      this.message = message;
      this.action = action;
      this.show_confirm_dialog = true;
    },
    open_style(message: string, style: string){
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
      this.input_type = ``;
      this.style = ``;
      this.show_dialog = false;
      this.show_confirm_dialog = false;
      this.show_style_dialog = false;
      this.show_prompt_dialog = false;
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
header{
  background: var(--background);
}
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
.menu li div, .menu li a {
  padding: 10px;
} 
.menu li:hover{
  background-color: #007acc;
}
.menu li.disabled-item{
  background-color: #eee;
  color: #007acc
}
.menu li.disabled-item:hover{
  cursor: context-menu;
}
.menu li.disabled-item:hover ul {
  display: none;
}
.menu ul{
  display: none;
  position: absolute;
  background: var(--background);
  inset: 100% auto auto 0;
  min-width: 100%;
  width: 150px;
}
.menu ul ul{
  left: 100%;
  top: 0;
}
.menu a{display: block;}
.mobile-menu{
  display: none;
  cursor: pointer;
  padding: 5px;
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

