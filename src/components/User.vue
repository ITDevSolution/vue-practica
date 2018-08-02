<template>
     <div class="user">
          <h1>User Components</h1>
          <ul>
               <li v-for="user in users">
               <input type="text" v-model="user.name" disabled>
               <input type="text" v-model="user.email" disabled>
               <button v-on:click="deleteUser(user)">x</button>
               <br>
               </li>
          </ul>
          <form v-on:submit.prevent="addUser">
               <input type="text" v-model="newUser.name" placeholder="name">
               <input type="email" v-model="newUser.email" placeholder="email">
               <button type="submit">Add User</button>
          </form>
     </div>
</template>

<script>
export default {
 name: "User",
     data(){
          return {
               users: [],
               newUser: {} //objeto 
          }
     },
     methods:{
          addUser(){
               this.users.push(this.newUser)
               //clear textbox this form
               this.newUser = "";
          },
          deleteUser(user){
               this.users.splice(this.users.indexOf(user),1)
          }  
     },

     created(){
       //consumir una api rest full json dentro de una dependencia vue-resource
       this.$http.get('https://jsonplaceholder.typicode.com/users')
       .then(response => this.users = response.body)
     }

}
</script>

<style scoped>
.user{
     background: #333;
}
ul{
     list-style-type: none;
     padding: 0px;
     padding-bottom: 50px;
}
li{
     display: inline;
}
form{
     padding-bottom: 20px;
}
</style>
