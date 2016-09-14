<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import store from './store'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  store
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
