<template>
  <header>
    <span 
      class="mobile-menu material-icons"
      @click="display_menu"
    >menu</span>
    <ul 
      id="menu" 
      class="menu"
      :class="{'display-menu-mobile': show_menu_mobile}"
    >
      <li>
        <div>Project</div>
        <ul>
          <li 
            @click="open_confirm('Are you sure you want to start a new project?', 'new-project', !(Object.keys(this.elements).length > 0))"
            :class="{'disabled-item': !(Object.keys(this.elements).length > 0)}"
          >
            <div>New Project</div>
          </li>
          <li 
            @click="export_stylings()"
            :class="{'disabled-item': !(Object.keys(this.elements).length > 0)}"
          ><a id="export">Export</a></li>
        </ul>
      </li>
      <li>
        <div>Edit</div>
        <ul>
          <!-- <li>Undo</li>
          <li>Redo</li>
          <li>History</li> -->
          <li 
            @click="delete_layers()" 
            :class="{'disabled-item': !(Object.keys(this.selected_element).length > 0)}"
          >
            <div>Delete Element</div>
          </li>
        </ul>
      </li>
      <li>
        <div>Element</div>
        <ul>
          <li @click="open_prompt(`Name this element`, 'txt', 'new-text')">
            <div>New Text</div>
          </li>
        </ul>
      </li>
      <li>
        <div>Style</div>
        <ul>
          <li :class="{'disabled-item': !selected_element?.text}">
            <div>Font</div>
            <ul>
              <li @click="open_style(`Type in the font size`, 'font-size')">
                <div>Size</div>
              </li>
              <li @click="open_style(`Type in the font weight`, 'font-weight')">
                <div>Weight</div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <!-- <li>Animation</li> -->
      <li>
        <div>Reference</div>
        <ul>
          <li>
            <router-link to="./">No Reference</router-link>
          </li>
          <li>
            <div>Font</div>
            <ul>
              <li>
                <router-link to="/font-size">Font Size</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <div>Window</div>
        <ul>
          <li @click="$emit('display-window', 'style')">
            <div>Style</div>
          </li>
        </ul>
      </li>
      <li>
        <div>Help</div>
        <ul>
          <li @click="open_dialog(`Create HTML and export that HTML's styling as reference or use it in your project :)`)">
            <div>About...</div>
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
<script>
  export default {
    props: ['selected_element', 'elements'],
    data() {
      return {
        show_dialog: false,
        show_confirm_dialog: false,
        show_prompt_dialog: false,
        show_style_dialog: false,
        show_menu_mobile: false,
        open_list_index: undefined,
        style: '',
        input_type: '',
        action: ``,
        message: ``
      }
    },
    mounted() {
      document.querySelectorAll(".menu > li > div").forEach((element, index) => {
        this.display_menu_list(element, `.menu > li > div`, index);
      });
    },
    methods:{
      display_menu(){
        this.show_menu_mobile = !this.show_menu_mobile;
      },
      display_menu_list(element, target, index) {
        const new_target = target.replace('div', 'ul');
        const class_name = `opened-list`;
        if(element?.nextSibling?.tagName.includes(`UL`)) {
          element.addEventListener('click', () => {
            if(index !== this.open_list_index){
              if(this.open_list_index){
                document.querySelectorAll(new_target)[this.open_list_index].classList.toggle(class_name);
              }
              document.querySelectorAll(new_target)[index].classList.toggle(class_name);
              this.open_list_index = index;
            } 
          }, false);
        }
      },
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
      open_style(message, style){
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

