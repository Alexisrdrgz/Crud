<template>
<div id="app">
  <nav class="navbar navbar-expand navbar-light  " style="background-color:#003478; margin-bottom: 25px;">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ">
          <li class="navbar-item">
            <a class="nav-link link-dark " ><router-link to="/crear" class="nav-link" style="font-size:xx-large;color: white;">Crear</router-link></a>
          </li>
          <li>
            <a class="nav-link link-dark" ><router-link to="/listar" class="nav-link" style="font-size:xx-large;color: white;">Pacientes</router-link></a>
          </li>
          <li style="margin-left:180%">
            <a class="nav-link link-dark" ><router-link to="/" class="nav-link" style="font-size:x-large;color: white;">Cerrar Sesion</router-link></a>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>



</template>

<script>
export default {
    

}
</script>

<style>

</style>