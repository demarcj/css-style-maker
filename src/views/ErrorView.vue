<template>
  <view-content title="404 Page Not Found">
    <div>Check the top menu on the left for the 'Reference' tab and picking a page.</div> 
    <div>Or see the full size version of the app by clicking here 
      <router-link
        class="home-link"
        :to="environment"
      >Home</router-link>.
    </div>
  </view-content>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return{
      environment: window.location.hostname.includes(`localhost`) ? `/` : `/css-style-maker`
    }
  }
})
</script>
<style scoped>
  a.home-link{
    text-decoration: underline;
    font-weight: 700;
  }
</style>