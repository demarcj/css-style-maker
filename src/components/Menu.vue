<template v-if="selected_element">
  <header>
    <ul id="menu" class="menu">
      <li>
        Project
        <ul>
          <li 
            @click="open_confirm('Are you sure you want to start a new project?', 'new-project')"
          >
            New Project
          </li>
          <li @click="export_stylings"><a id="export">Export</a></li>
        </ul>
      </li>
      <li>Edit
        <ul>
          <!-- <li>Undo</li>
          <li>Redo</li>
          <li>History</li> -->
          <li @click="delete_layers">Delete Element</li>
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
          <li>
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
      @close="close_dialog"
      :message="message"
    ></basic-dialog>
    <confirm-dialog 
      v-if="show_confirm_dialog" 
      @close="close_confirm_dialog"
      :message="message"
    ></confirm-dialog>
    <prompt-dialog 
      v-if="show_prompt_dialog" 
      @close="close_prompt_dialog"
      :input_type="input_type"
      :message="message"
    ></prompt-dialog>
    <style-dialog 
      v-if="show_style_dialog" 
      @close="close_style_dialog"
      :input_type="input_type"
      :message="message"
    ></style-dialog>
  </header>
</template>
<script>
  export default {
    props: ['selected_element'],
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
        this.$emit("export-stylings");
      },
      open_prompt(message, input_type, action) {
        this.message = message;
        this.action = action;
        this.input_type = input_type;
        this.show_prompt_dialog = true;
      },
      open_confirm(message, action) {
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
        this.$emit('delete-layers');
      },
      open_dialog(message) {
        this.message = message;
        this.show_dialog = true;
      },
      reset_data() {
        this.message = ``;
        this.input_type = ``;
        this.style = ``;
        this.show_dialog = false;
        this.show_confirm_dialog = false;
        this.show_style_dialog = false;
        this.show_prompt_dialog = false;
      },
      close_dialog() {
        this.show_dialog = false;
      },
      close_prompt_dialog(user_input){
        this.$emit(this.action, user_input);
        this.reset_data();
      },
      close_style_dialog(user_input){
        this.$emit('set-style', user_input, this.style)
        this.reset_data();
      },
      close_confirm_dialog(confirmation){
        this.$emit(this.action, confirmation);
        this.reset_data();
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

