<template>
  <div class="hello">
    <h1 class="outline" v-text="outlineText"></h1>
    <h3 class="theme-title" v-for="title in titles">
      <span style="color: green"># </span>{{ title.name }}
      <router-link :to="title.router" v-if="title.router">
        <span v-html="example"></span>
      </router-link>
    </h3>
  </div>
</template>

<script>

export default {

  data () {
    return {
      titles: [
        {
          name: '数据表达式',
          router: ''
        },
        {
          name: '常用指令',
          router: 'instruct'
        },
        {
          name: '实例中的事件和方法',
          router: 'event'
        },
        {
          name: '生命周期',
          router: 'cycle'
        },
        {
          name: 'Vue中的计算属性和侦听器',
          router: 'computed'
        }
      ],
      outlineText: 'Vue.js基础大纲',
      example: '<span style="color:blue">示例</span>',
    }
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
  .theme-title {
    width: 40%;
    margin: 0 auto;
    padding: 20px 0;
    text-align: left;
  }
  .btn-answer {
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>
