<template>
  <main class="main">
    <section id="canvas" class="canvas"></section>
    <section id="style-info"></section>
  </main>
</template>
<style scoped>
  .main{
    display: grid;
    grid-template-columns: 1fr 15%;
  }
  .canvas{
    background: #000;
    max-width: 100%;
    height: 500px;
  }
</style>