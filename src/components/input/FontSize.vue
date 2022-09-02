<template>
  <input type="number" @keyup="update_input" v-model="user_input">
  <select @select="update_input" v-model="selected_unit">
    <option v-for="unit in font_measuring_units" :key="unit" :value="unit">
      {{ unit }}
    </option>
  </select>
</template>
<script>
export default {
    data() {
        return {
            user_input: ``,
            font_measuring_units: [`px`, `rem`, `em`, `percentage`, `vh`, `vw`],
            selected_unit: `px`
        };
    },
    methods: {
      update_input() {
        if (this.user_input === "") {
            return;
        }
        this.$emit("update_input", this.user_input + this.selected_unit);
      }
    }
}
</script>