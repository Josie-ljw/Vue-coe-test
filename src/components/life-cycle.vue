<template>
  <div class="wrapper">
    <div class="life" ref="life">
      <button @click="add">更新</button>
      <button @click="remove">销毁</button>
    </div>
    <label for="age" ref='label'>{{age}}</label>
    <div>{{name}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      name: "lisi",
      age: 18
    };
  },
  /**
   * 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
   * 此时，无法获取 data中的数据、methods中的方法
   *
   */
  beforeCreate() {
    //this.test()  //this.test is not a function, 一般可以做鉴权功能，或者读取本地储存的信息
    console.log(`beforeCreate`, this.$el, this.age); //undefined undefined
  },
  /**
   * 在实例创建完成后被立即调用
   * 完成的配置有: 数据观测 (data observer)，属性和方法的运算，watch/event 事件回调,$el 属性目前不可见
   *
   */
  created() {
    this.test(); // hello world
    console.log(`created`, this.$el, this.age); //undefined 18
  },
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用
   *
   */
  beforeMount() {
    console.log(`beforeMount`, this.$el, this.age); //undefined 18
  },
  /**
   * 真实dom已加载, 一般可以发送后端请求, 也可以根据实际业务场景用jq去操作dom
   * 不会承诺所有的子组件也都一起被挂载,如果你希望等到整个视图都渲染完毕, 可以用 vm.$nextTick 替换掉 mounted
   *
   */
  mounted() {
    //Vue 异步执行 DOM 更新数据, 数据变化后组件并不是立即重新渲染, Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变
    this.$nextTick(function() {
      // 这里可以获取立即更新后的dom
    });
    console.log(`mounted`, this.$el, this.age); //<div></div> 18
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
   *
   */
  beforeUpdate() {
    console.log(
      `beforeUpdate`,
      this.$refs.label && this.$refs.label.innerHTML,
      this.age
    ); //18，19
  },
  /**
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作
   *
   */
  updated() {
    console.log(
      `updated`,
      this.$refs.label && this.$refs.label.innerHTML,
      this.age
    ); //19, 19
  },
  /**
   * keep-alive为vue内置组件, 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
   * keep-alive 组件激活时调用
   *
   */
  activated() {
    console.log(`activated`, this.$el, this.$data);
  },
  /**
   * keep-alive 组件停用时调用
   *
   */
  deactivated() {
    console.log(`deactivated`, this.$el, this.$data);
  },
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用
   *
   */
  beforeDestroy() {
    this.age++; //age is 19 ,实例仍然完全可用
    console.log(`beforeDestroy`, this.$el, this.age);
  },
  /**
   *  Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
   *
   */
  destroyed() {
    console.log(`destroyed`, this.$el, this.age);
  },
  /**
   * 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播
   *
   */
  errorCaptured(err, vm, info) {
    console.log(`errorCaptured`, err, vm, info);
  },
  render(h) {
    return h(
      "div",
      {
        class: {
          foo: true,
          bar: false
        },
        attrs: {
          id: "foo"
        }
      },
      ["hi"]
    );
  },
  computed: {},
  methods: {
    test() {
      console.log("hello world");
    },
    add() {
      this.age++;
    },
    remove() {
      this.$destroy();
    }
  },
  watch: {
    age(n, o) {
      console.log(n, o);
    }
  }
};
</script>
