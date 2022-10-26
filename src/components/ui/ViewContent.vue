<template>
  <main class="main">
    <router-link to="/">
      <span class="material-icons">
        close
      </span>
    </router-link>
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      title: String
    }
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
