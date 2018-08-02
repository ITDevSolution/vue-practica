// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//importando la dependencia vue-resource para hacer uso de promesas 
import VueResource from 'vue-resource';
Vue.use(VueResource);

//importando la dependencia vue-router para hacer paginas independientes en los componentes
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//para crear rutas debemos importar los componentes a utilizar
import Test from './components/Test';
import User from './components/User';
import HelloWorld from './components/HelloWorld'

const router = new VueRouter({
  mode: 'history',
  base: __dirname, //indicamos donde va a encontrar el archivo
  routes : [
    {
      path: '/',
      component : User
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
