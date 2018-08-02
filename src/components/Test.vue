<template>
     <div class="test">
          <hr>
          <div v-text="title"></div>
          <div v-if="showName">
               <p>{{user.firstName + ' ' + user.lastName}}</p>
          </div>
          <div v-else>
               <p>No puedo mostrar el Componente</p>
          </div>
          <hr>
          <ul>
               <li v-for="task in tasks">
                  {{task.title + ' - '}}
               </li>
          </ul>

          <hr>
          <input type="text" v-model="user.firstName">
          <button v-on:click="saludar(user.firstName)">Click ME!</button>

          <hr>
          <h5>v-on:keyup(permite capturar el valor de las teclas )</h5>
          <input type="text" v-on:keyup="typping">
          <h5>v-on:keyup.enter (permite capturar el valor enter en consola )</h5>
          <input type="text" v-on:keyup.enter="typedEnter">

          <hr>
          <h5>Computed Properties(Propiedades Computadas)</h5>
          <p>{{ fullName }}</p>
          
          <hr>
          <h5>Propiedades Independientes</h5>
          <p class="msg"> {{msg}} </p>

     </div>
</template>

<script>
export default {
  // properties it contains: datos or variables or array or objets type json in JavaScript
  name: "Test",
  data() {
    return {
      title: "Componente Creado por Joel",
      user: {
        firstName: "Joel",
        lastName: "Ronceros"
      },
      myHtml: "<h3>Prueba de Etiqueta</h3>",
      showName: true,
      tasks: [
        { title: "eat" },
        { title: "dinner" },
        { title: "play" },
        { title: "study" }
      ]
      
    }
  },
  //Metodos
  methods: {
    saludar(name){
      alert('hello ' + name)
    },
    typping(e){
      console.log(e.target.value)
    },
    typedEnter(e){
      alert('DIO UN ENTER!!')
    }
  },
  //Properties Computed
  computed: {
    fullName(){
      return this.user.firstName + ' ' + this.user.lastName
    }
  },
  //Component propeties
  props:{
    msg:{
      type: String,
      default: 'Mensaje por defecto'
    }
  }

}
</script>


<style scoped>

.msg{ 
  background-color: #eee;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  color: #42b983;
}

</style>
