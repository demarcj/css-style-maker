<template>
  <fieldset>
    <legend class="legend"> {{ name }}: </legend>
    <div class="fieldset-content"> 
      <font-size-menu 
        v-if="name.includes('font-size')"
        :name="name"
        :value="value"
        @change-value="change_value"
      >
      </font-size-menu>
      <font-weight-menu 
        v-if="name.includes('font-weight')"
        :name="name"
        :value="value"
        @change-value="change_value"
      >
      </font-weight-menu>
    </div>
  </fieldset>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FontSizeMenu from 'src/components/style-menu-ui/FontSizeMenu.vue'
import FontWeightMenu from 'src/components/style-menu-ui/FontWeightMenu.vue'
export default defineComponent({
  emits: ['change-value'],
  components: { 
    FontSizeMenu,
    FontWeightMenu
  },
  props: {
    name: {
      type: String,
      default: ``
    },
    value: { 
      type: String, 
      default: `` 
    }
  }, 
  methods: {
    change_value(key: string, value: string){
      this.$emit("change-value", key, value);
    }
  }
});
</script>
<style scoped>
  input{
    padding: 5px;
  }
  .fieldset-content{
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 15px;
    padding: 10px;
    align-items: center;
  }
  .legend{
    margin-left: 15px;
    padding: 0 10px;
  }
</style>