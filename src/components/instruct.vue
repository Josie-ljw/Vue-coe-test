<template>
  <div>
    <div>
      <h2 class="title"><span class="green">#</span> v-bind， v-show， v-if， v-for</h2>

      <h2>问：猩猩最讨厌什么线？</h2>
      <div>
        <button
          v-for="item, index in btns"
          v-bind:class="[{active: item.active}, 'js-button btn-answer']"
          @click="clickHandle(index)">
          {{item.text}}
        </button>
      </div>
      <div v-show="show">
        <div v-if="answer == 0">
          bingo！平行线没有相交（香蕉）
        </div>
        <div v-else-if="answer == 1">
          你怕是个假猩猩吧
        </div>
        <div v-else>
          你怕是个假猩猩吧
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery';

export default {

  data () {
    return {
      show: false,
      answer: 0,
      btns: [
        {
          key: 0,
          text: 'A、平行线',
          active: false
        },
        {
          key: 1,
          text: 'B、线段',
          active: false
        },
        {
          key: 2,
          text: 'C、交叉线',
          active: false
        }
      ],
      msgs: [{
        text: 'hello'
      }]
    }
  },
  mounted() {
    // $('.js-button').click(function(e) {
    //   let index = $(e.target).index();
    //   let answerText = '';
    //   index ? (answerText = '你怕是个假猩猩吧') : (answerText = 'bingo！平行线没有相交（香蕉）');
    //   $('.js-answer').text(answerText);
    //   $(this).addClass('active').siblings().removeClass('active');
    // });
  },

  methods: {
    clickHandle(index) {
      this.show = true;
      this.answer = index;
      this.btns.forEach( item=> {
        if (item.key == index) {
          item.active = true;
        } else {
          item.active = false;
        }
      })
    }
  }
}
</script>

<style scope>
  .title {
    width: 25%;
    margin: 0 auto;
    margin-bottom: 40px;
    border-bottom: 1px dashed #999;
  }
  .green {
    color: green;
  }
  .btn-answer {
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 4px 10px;
    font-size: 20px;
    border-radius: 4px;
  }
  .btn-answer.active {
    outline: none;
    background-color: #b5ebff;
  }
</style>


