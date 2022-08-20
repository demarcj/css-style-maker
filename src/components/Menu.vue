<template>
  <header>
    <ul id="menu" class="menu">
      <li>
        Project
        <ul>
          <li @click="new_project">New Project</li>
          <li @click="export_animation"><a id="export">Export</a></li>
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
          <li @click="new_text">New Text</li>
        </ul>
      </li>
      <li>
        Style
        <ul>
          <li>
            Font
            <ul class="menu_lvl3">
              <li>Size</li>
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
          <li @click="about">About...</li>
        </ul>
      </li>
    </ul>
  </header>
</template>
<script>
  export default {
    methods:{
      export_animation() {
        const animation = new Blob([document.querySelector("#canvas").innerHTML], {type: 'text/html'});
        document.querySelector("#export").download = "animation.html";
        document.querySelector("#export").href = window.URL.createObjectURL(animation);
      },
      new_project() {
        this.$emit('new-project');
      },
      new_text() {
        this.$emit('new-text');
      },
      delete_layers() {
        this.$emit('delete-layers');
      },
      display_window() {
        this.$emit('display-window');
      },
      about() {
        alert(`Still early, but I promise to add to this about ;)`);
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
    text-align: center;
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
  }
  .menu ul ul{
    left: 100%;
    top: 0;
  }
  .menu li:hover>ul{display: block;}
</style>

