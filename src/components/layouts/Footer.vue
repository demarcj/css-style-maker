<template>
  <footer class="footer">
    <div>&copy;{{ get_year() }} DeMarc Johnson</div>
  </footer>
</template>
<script>
export default {
  methods: {
    get_year() {
      return new Date().getFullYear();
    }
  }
}
</script>
<style scoped>
  .footer{
    border-top: 1px solid white;
    padding: 10px 15px;
  }
</style>