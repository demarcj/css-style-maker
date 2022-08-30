<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
      <input v-if="input_type === 'txt'" type="text" v-model="user_input">
      <div class="num" v-if="input_type === 'num'">
        <input type="number" v-model="user_input">
        <select v-model="selected_unit">
          <option v-for="unit in font_measuring_units" :key="unit" :value="unit">
            {{ unit }}
          </option>
        </select>
      </div>
      <input v-if="input_type === 'weight'" type="number" v-model="user_input">
      <dialog-button
        :show_apply="true"
        @update="update"
        @close="$emit('close')"
      ></dialog-button>
  </dialog-content>
</template>
<script>

export default {
  props: ['message', 'input_type'],
  data() {
    return {
      user_input: ``,
      font_measuring_units: [`px`, `rem`, `em`, `percentage`, `vh`, `vw`],
      selected_unit: `px`
    }
  },
  methods: {
    update() {
      if(this.user_input === ''){
        return;
      }
      if(this.input_type === 'num' && this.selected_unit === ''){
        return;
      }
      this.$emit('update', this.user_input + this.selected_unit);
    }
  }
}
</script>