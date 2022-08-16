<template>
<Menu 
  @new-text="new_text" 
  @new-project="new_project"
/>
<main class="main">
  <section id="canvas" class="canvas">
    <main-stage
      v-for="element in objects" 
      :key="element.order"
      :element="element.text"
    ></main-stage>
  </section>
    <styling-stage></styling-stage>
</main>
<section id="layers" class="layers">
  <div class="row table-header-row">
    <div class="cell table-header">Index</div>
    <div class="cell table-header">Layer Name</div>
  </div>
  <div class="table-row">
    <layers 
      v-for="layer in objects" 
      :key="layer.order"
      :layer="layer.text"
      :index="layer.order"
    ></layers>
  </div>
</section>
<Footer />
</template>

<script>
import MainStage from './components/MainStage.vue';
import Menu from './components/Menu.vue';
import Layers from './components/Layers.vue';
import StylingStage from './components/StylingStage.vue';
import Footer from './components/Footer.vue';
import './style.css';

export default {
  components: {
    MainStage,
    Menu,
    Layers,
    StylingStage,
    Footer
  },
  data() {
    return {
      objects: {},
    }
  },
  methods: {
    new_text() {
      const text_layer = prompt(`Name This Layer`);
      const object_length = Object.keys(this.objects).length ? Object.keys(this.objects).length : 0;
      this.objects[object_length] = {object_length};
      this.objects[object_length]['text'] = text_layer;
      this.objects[object_length]['order'] = object_length;
    },
    new_project() {
      const confirm_new = confirm(`Are you sure you want to start a new project?`);
      if(confirm_new){
        this.objects = {};
      }
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
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  font-size: 1.4rem;
}
.main{
  display: grid;
  grid-template-columns: 1fr 15%;
}
.canvas{
  max-width: 100%;
  height: 500px;
  color: black;
  background-color: white;
}
.layers{
  border-top: 1px solid white;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
}
.table-header-row{
  border-bottom: 1px solid white;
}
.table-header{
  padding-top: 10px;
  padding-bottom: 10px;
}
.table-row{
  overflow-y: scroll;
}
</style>
