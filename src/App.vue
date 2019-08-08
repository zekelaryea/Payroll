<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/all-employees">All Employees</router-link> |
      <router-link to="/add-employee">Add Employee</router-link>

    </div>
    <router-view/>


  </div>
</template>

<style>
#nav{
  display: block;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
