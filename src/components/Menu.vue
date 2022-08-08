<template>
  <header>
    <ul id="menu" class="menu">
      <li>
        File
        <ul class="menu_lvl2">
          <li @click="export_animation"><a id="export">Export</a></li>
        </ul>
      </li>
      <!-- <li>Edit</li> -->
      <li>
        Element
        <ul class="menu_lvl2">
          <li @click="new_text">New Text</li>
        </ul>
      </li>
      <li>Style</li>
      <li>Animation</li>
      <li>Help</li>
    </ul>
  </header>
</template>
<script>
  export default {
    methods:{
      new_text() {
        const text_layer = prompt(`Name This Layer`);
        document.querySelector("#canvas").innerHTML += `<p id="${text_layer}" contenteditable="true">${text_layer}</p>`;
      },
      export_animation() {
        const animation = new Blob([document.querySelector("#canvas").innerHTML], {type: 'text/html'});
        document.querySelector("#export").download = "animation.html";
        document.querySelector("#export").href = window.URL.createObjectURL(animation);
      }
    }
  }
</script>
<style scoped>
  header{
    background:white
  }
  .menu{
    display: flex;
    flex-direction: row;
  }
  .menu li{
    padding: 10px;
    position: relative;
    cursor: pointer;
    color: #000;
    white-space: nowrap;
  }
  .menu_lvl2{
    display: none;
    position: absolute;
    background: #fff;
    left: 0;
  }
  #menu>li:hover>.menu_lvl2{display: block;}
</style>

