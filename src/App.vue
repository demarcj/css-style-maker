<template>
<Menu @new-text="new_text" />
<main class="main">
  <section id="canvas" class="canvas">
    <main-stage
      v-for="(element, index) in objects" 
      :key="index"
      :element="element"
    ></main-stage>
  </section>
  <section id="style-info"></section>
</main>
<section id="layers" class="layers">
  <div class="row table-header-row">
    <div class="cell table-header">Index</div>
    <div class="cell table-header">Layer Name</div>
  </div>
  <div class="table-row">
    <layers 
      v-for="(layer, index) in objects" 
      :key="index"
      :layer="layer"
      :index="index"
    ></layers>
  </div>
</section>
<Footer />
</template>

<script>
import MainStage from './components/MainStage.vue';
import Menu from './components/Menu.vue';
import Layers from './components/Layers.vue';
import Footer from './components/Footer.vue';
import './style.css';

export default {
  components: {
    MainStage,
    Menu,
    Layers,
    Footer
  },
  data() {
    return {
      objects: []
    }
  },
  methods: {
    new_text() {
      const text_layer = prompt(`Name This Layer`);
      this.objects = [...this.objects, text_layer];
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
  background: #000;
  max-width: 100%;
  height: 500px;
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
