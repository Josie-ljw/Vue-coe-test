<template>
  <div class="message-container">
    <h3>组件A</h3>
    <h3 class="pt30">我现在要跟B组件打个招呼</h3>
    <input type="text" @change="saiHi" v-model="text" />
  </div>
</template>

<script>
// import Bus from '../util/bus.js';

export default {
  data () {
    return {
      text: '你好，我是小猪佩奇A'
    }
  },
  methods: {
    saiHi() {
      this.$root.eventHub.$emit('saiHi', this.text);
    }
  }
}
</script>

<style>
  .parent-box .message-container {
    line-height: 30px;
    background-color: #fafbe5;
  }
  .pt30 {
    padding-top: 30px;
  }
</style>