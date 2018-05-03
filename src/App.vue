<template>
  <div id="app">
    <router-view class="view one"></router-view>
    <router-view class="view two" name="child1"></router-view>
    <router-view class="view three" name="child2"></router-view>
  </div>
</template>

<script>
import Child2 from './components/Child2.vue'
import Child1 from './components/Child1.vue'
export default {
  name: 'App',
  methods: {
    addCounter () {
      this.$store.state.counter++
      console.log(this.$store.state.counter)
    },
    subCounter () {
      this.$store.state.counter--
      console.log(this.$store.state.counter)
    }
  },
  components: {
    'child1': Child1,
    'child2': Child2
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
