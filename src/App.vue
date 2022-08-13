<template>
  <Menu />
  <Main />
  <Layers />
  <Footer />
</template>

<script>
import Main from './components/Main.vue';
import Menu from './components/Menu.vue';
import Layers from './components/Layers.vue';
import Footer from './components/Footer.vue';
import './style.css';

export default {
  components: {
    Main,
    Menu,
    Layers,
    Footer
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
}
</style>
