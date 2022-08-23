<template>
  <header>
    <ul id="menu" class="menu">
      <li>
        Project
        <ul>
          <li 
            @click="open_confirm('Are you sure you want to start a new project?', 'new-project', !(Object.keys(this.elements).length > 0))"
            :class="{'disabled-item': !(Object.keys(this.elements).length > 0)}"
          >
            New Project
          </li>
          <li 
            @click="export_stylings()"
            :class="{'disabled-item': !(Object.keys(this.elements).length > 0)}"
          ><a id="export">Export</a></li>
        </ul>
      </li>
      <li>Edit
        <ul>
          <!-- <li>Undo</li>
          <li>Redo</li>
          <li>History</li> -->
          <li 
            @click="delete_layers()" 
            :class="{'disabled-item': !(Object.keys(this.selected_element).length > 0)}"
          >
            Delete Element
          </li>
        </ul>
      </li>
      <li>
        Element
        <ul>
          <li @click="open_prompt(`Name this element`, 'txt', 'new-text')">New Text</li>
        </ul>
      </li>
      <li>
        Style
        <ul>
          <li :class="{'disabled-item': !selected_element?.text}">
            Font
            <ul>
              <li @click="open_style(`Type in the font size`, 'num', 'fontSize')">Size</li>
              <li @click="open_style(`Type in the font size`, 'weight', 'fontWeight')">Weight</li>
            </ul>
          </li>
        </ul>
      </li>
      <!-- <li>Animation</li> -->
      <!-- <li>
        Window
        <ul>
          <li @click="display_window">Style</li>
        </ul>
      </li> -->
      <li>Help
        <ul>
          <li @click="open_dialog(`Create HTML and export that HTML's styling as reference or use it in your project :)`)">About...</li>
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
      :input_type="input_type"
      :message="message"
    ></style-dialog>
  </header>
</template>
<script>
  export default {
    props: ['selected_element', 'elements'],
    data() {
      return {
        show_dialog: false,
        show_confirm_dialog: false,
        show_prompt_dialog: false,
        show_style_dialog: false,
        style: '',
        input_type: '',
        action: ``,
        message: ``
      }
    },
    methods:{
      export_stylings() {
        if(!(Object.keys(this.elements).length > 0)){
          return
        }
        this.$emit("export-stylings");
      },
      open_prompt(message, input_type, action) {
        this.message = message;
        this.action = action;
        this.input_type = input_type;
        this.show_prompt_dialog = true;
      },
      open_confirm(message, action, disabled = false) {
        if(disabled){
          return;
        }
        this.message = message;
        this.action = action;
        this.show_confirm_dialog = true;
      },
      open_style(message, input_type, style){
        this.message = message;
        this.style = style;
        this.input_type = input_type;
        this.show_style_dialog = true;
      },
      delete_layers() {
        if(!(Object.keys(this.selected_element).length > 0)){
          return;
        }
        this.$emit('delete-layers');
      },
      open_dialog(message) {
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
      update_prompt_dialog(user_input){
        this.$emit(this.action, user_input);
        this.close();
      },
      update_style_dialog(user_input){
        this.$emit('set-style', user_input, this.style)
        this.close();
      },
      update_confirm_dialog(){
        this.$emit(this.action, true);
        this.close();
      }
    }
  }
</script>
<style scoped>
  header{
    background: var(--background);
    border-bottom: 1px solid white;
  }
  .menu{
    display: flex;
    flex-direction: row;
  }
  .menu li{
    padding: 10px;
    position: relative;
    cursor: pointer;
    color: white;
    white-space: nowrap;
  }
  .menu li:hover{
    background-color: #007acc;
  }
  .menu li.disabled-item:hover{
    cursor: context-menu;
    background-color: var(--background);
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
  .menu li:hover>ul{display: block;}
</style>

