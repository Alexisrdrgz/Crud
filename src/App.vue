<template>
 
<div>
  <nav class="navbar navbar-expand-lg bg " style="background-color:#003478; margin-bottom: 25px;">
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style="margin-left: 40%;">
        <a class="nav-link link-dark " ><router-link to="/crear" class="nav-link" style="font-size:xx-large;color: white;">Crear</router-link></a>
        <a class="nav-link link-dark" ><router-link to="/listar" class="nav-link" style="font-size:xx-large;;color: white;">Pacientes</router-link></a>
       
      </div>
    </div>
  </nav>
</div>
 


  <router-view/>
  
  

</template>

<style>
main{
  background-image: url('./assets/logo1.png');
  background-size: cover;
  position: absolute;
  opacity: 0.2;
  z-index: 1;
}
</style>