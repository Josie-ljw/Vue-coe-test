<template>
  <div class="message-container">
    <h3>组件B</h3>
    <div class="message-text" v-for="msg in msgs" v-text="msg.text"></div>
  </div>
</template>

<script>
// import Bus from '../util/bus.js';

export default {
  data () {
    return {
      msgs: [{
        text: 'hello'
      }],
    }
  },
  mounted() {
    this.$root.eventHub.$on('saiHi', (data) => {
      this.msgs.push({text: data});
    })
  },
}
</script>

<style>
  .children-box .message-container {
    line-height: 30px;
    background-color: #e5fddb;
  }
</style>