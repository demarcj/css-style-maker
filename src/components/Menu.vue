<template>
  <header>
    <ul id="menu" class="menu">
      <li>
        Project
        <ul class="menu_lvl2">
          <li @click="new_project">New Project</li>
          <li @click="export_animation"><a id="export">Export</a></li>
        </ul>
      </li>
      <li>Edit
        <ul class="menu_lvl2">
          <!-- <li>Undo</li>
          <li>Redo</li>
          <li>History</li> -->
          <li @click="delete_layers">Delete Element</li>
        </ul>
      </li>
      <li>
        Element
        <ul class="menu_lvl2">
          <li @click="new_text">New Text</li>
        </ul>
      </li>
      <!-- <li>Style</li> -->
      <!-- <li>Animation</li> -->
      <!-- <li>Window</li> -->
      <li>Help
        <ul class="menu_lvl2">
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
  }
  .menu_lvl2{
    display: none;
    position: absolute;
    background: var(--background);
    left: 0;
  }
  #menu>li:hover>.menu_lvl2{display: block;}
</style>

