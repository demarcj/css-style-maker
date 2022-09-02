<template>
  <input type="number" @keyup="update_input" v-model="user_input">
</template>
<script>
export default {
  data() {
    return {
      user_input: ``,
    };
  },
  methods: {
    update_input() {
      if (this.user_input === "") {
          return;
      }
      this.$emit("update_input", this.user_input);
    }
  }
}
</script>