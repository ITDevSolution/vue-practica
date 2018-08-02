<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/>
    <Test msg="hello world from father class" />
    <User /> -->
    <h1>NAVEGACION VUE-ROUTER</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">User</router-link>
        </li>
        <li>
          <router-link to="/test">Test</router-link>
        </li>
        <li>
          <router-link to="/HelloWorld">HelloWorld</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import User from './components/User'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
