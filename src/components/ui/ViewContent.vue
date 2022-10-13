<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: ['title'],
  })
</script>
<style scoped>
.main{
  padding: 15px;
}
.title{
  text-align: center;
  padding-bottom: 15px;
}
</style>
