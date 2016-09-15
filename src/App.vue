<template>
  <div id="app">
    <h1>{{ msg }}</h1>


    <button @click="doLogin">Login</button>
  </div>
</template>

<script>
import store from './store'
import {doLogin} from './modules/login/actions'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  vuex : {
  	actions : {
  		doLogin
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
