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
     </div>
</template>

<script>
export default {
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

  methods: {
    saludar(name){
      alert('hello ' + name)
    }
  }
}
</script>


<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  color: #42b983;
}

</style>
