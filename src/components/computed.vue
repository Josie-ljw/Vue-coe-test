<template>
  <div class="message-container">
    <div id="demo">{{ fullName }}</div>
<!--     <h1>{{firstName}}</h1>
    <h1>{{lastName}}</h1> -->
    <button @click="change">点击</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      // fullName: 'Foo Bar'
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        alert(newValue);
        // this.fullName = 11;
        // var names = newValue.split(' ')
        // this.firstName = names[0]
        // this.lastName = names[names.length - 1]
      }
    }
  },
  // watch: {
  //   firstName: function (val) {
  //     this.fullName = val + ' ' + this.lastName
  //   },
  //   lastName: function (val) {
  //     this.fullName = this.firstName + ' ' + val
  //   }
  // },
  methods: {
    change() {
      this.fullName = 'XX XX';
    }
  }
}
</script>

<style>
  .children-box .message-container {
    line-height: 30px;
    background-color: #e5fddb;
  }
</style>