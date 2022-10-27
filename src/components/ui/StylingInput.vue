<template>
  <fieldset>
    <legend class="legend"> {{ name }}: </legend>
    <div class="fieldset-content"> 
      <input 
        :type="input_type" 
        :value="real_data"
        :min="min"
        :max="max"
        :step="step"
        @change="changed_value($event)" 
      >
      <div class="value"> {{ full_data }} </div>
    </div>
  </fieldset>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
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
  data(){
    return {
      real_data: ``,
      full_data: ``,
      input_type: ``,
      step: 1,
      min: 0,
      max: 1000
    }
  },
  mounted() {
    this.get_data();
  },
  methods: {
    changed_value(e: Event) {
      const target = e.target as HTMLInputElement;
      this.get_data(target.value);
    },
    get_data(data: string = ``) {
      data = data ? data : this.value;
      if(this.name === `font-weight`){
        this.get_font_weight(data);
        return;
      }
      if(this.name === `font-size`){
        this.get_font_size(data);
        return;
      }
    },
    get_font_weight(data: string){
      this.input_type = 'number';
      this.step = 100;
      this.max = 900;
      this.real_data = data;
      this.full_data = data;
    },
    get_font_size(data: string){
      this.input_type = 'number';
      this.real_data = data.replace(/[a-z]/g, '') + '';
      this.full_data = data.replace(/[a-z]/g, '') + this.value.replace(/[0-9]/g, '');
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