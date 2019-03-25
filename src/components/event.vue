<template>
  <div class="container">
    <h1 class="outline" v-text="outlineText"></h1>
    <div class="clearfix">
      <!-- 父子 -->
      <div class="parent-box">
        <h3>父组件的冰山一角</h3>
        <div class="mb20" v-text="vals"></div>
        <input type="button" @click="parentEnvet" value="父组件触发" />
        <childA>
        </childA>
      </div>
      <div class="children-box">
        <childC
          :sonMsg="msg"
          @showMsg="msgFromChild"
          ref="childcomp">
        </childC>
        <childB></childB>
      </div>
    </div>
  </div>
</template>

<script>

import childA from './childrenA.vue';
import childB from './childrenB.vue';
import childC from './childrenC.vue';
// import Bus from '../util/bus.js';

export default {
  components: {
    childA,
    childB,
    childC
  },
  data () {
    return {
      outlineText: '实例中的事件和方法',
      vals: '我会展示C组件传给我的数据',
      msg: '我是父组件的数据1111',
    }
  },
  methods: {
    msgFromChild(data) {
      this.vals = data;
    },
    parentEnvet() {
      this.$refs.childcomp.childFn();
      // this.$refs['childcomp'].childFn();
    },
  }
}
</script>

<style scope>
  .outline {
    width: 40%;
    margin: 20px auto;
    padding-bottom: 30px;
    border-bottom: 1px solid #999;
  }
  .container {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
  .parent-box {
    float: left;
    width: 50%;
    height: 200px;
    background-color: #fbe1f5;
  }
  .children-box {
    float: left;
    width: 50%;
    height: 200px;
    background-color: #dcf3fd;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .message-container {
    position: relative;
    top: 45px;
    min-height: 200px;
    line-height: 30px;
    margin-bottom: 100px;
    box-sizing: border-box;
  }
</style>


