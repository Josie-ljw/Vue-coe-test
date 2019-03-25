<template>
  <div>
    <h3>组件C</h3>
    <div class="children-text">{{sonMsg}}</div>
    <button @click="send">子组件触发</button>
  </div>
</template>

<script>

export default {
  props: {
    sonMsg: {
      type: String,
      default: '父组件数据的默认值'
    }
  },
  data () {
    return {
      msg: '我真的是太帅了',
    }
  },
  methods: {
    send() {
      this.$emit('showMsg', this.msg)
    },
    childFn() {
      alert('父组件在召唤我')
    }
  }
}
</script>

<style>
  .children-text {
    color: blue;
    margin-bottom: 20px;
  }
</style>