<template>
   
<div class="container">
    <div class="card">
      <div class="card-header">
        Editar empleados
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro" class="row g-3">

          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text"
              class="form-control" required name="nombre" v-model = "empleado.nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del empleado</small>
          </div>


          <div class="form-group">
            <div class="form-group">
              <label for="">Correo:</label>
              <input type="email"
                class="form-control" required name="correo" v-model = "empleado.correo" id="correo" aria-describedby="helpId" placeholder="correo">
              <small id="helpId" class="form-text text-muted">Ingrese correo del empleado</small>
            </div>
          </div>
          <!-- edad -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Edad:</label>
              <input
                type="number"
                class="form-control"
                required
                name="edad"
                v-model="empleado.edad"
                id="edad"
                aria-describedby="helpId"
                placeholder="edad"
              />
              <small id="helpId" class="form-text text-muted"
                >Ingrese la edad del paciente</small
              >
            </div>
          </div>

          <!-- sexo -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Sexo:</label>
              <input
                type="text"
                class="form-control"
                required
                name="sexo"
                v-model="empleado.sexo"
                id="sexo"
                aria-describedby="helpId"
                placeholder="sexo"
              />
              <small id="helpId" class="form-text text-muted"
                >Sexo del paciente</small
              >
            </div>
          </div>
          <!-- caso clinico -->

          <div class="form-group">
            <div class="form-group">
              <label>Caso Clinico:</label>
              <textarea
                type="text"
                class="form-control"
                required
                name="casoClinico"
                v-model="empleado.casoClinico"
                id="casoClinico"
                aria-describedby="helpId"
                placeholder="caso clinico"
                rows="3"
              >
              </textarea>
              <small id="helpId" class="form-text text-muted"
                >Ingrese correo del empleado</small
              >
            </div>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">modificar</button>

            <router-link :to="{name:'Listar'}" class="btn btn-warning">Cancelar</router-link>

           
          </div>
        </form>
      </div>
      
    </div>


  </div>

</template>

<script>
export default {
  data(){
    return{
      empleado:{}
    }
  },
  created:function(){

  },
  methods:{
    obtenerInformacionID(){
      
            fetch('http://localhost/empleados/?consultar='+this.$route.params.id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)

                this.empleado=datosRespuesta[0];

            })
            .catch(console.log)
        
    },
    actualizarRegistro(){
      var datosEnviar = {
        nombre: this.empleado.nombre,
        correo: this.empleado.correo,
        edad: this.empleado.edad,
        sexo:this.empleado.sexo,
        casoClinico:this.empleado.casoClinico,
      };
      fetch('http://localhost/empleados/?actualizar=1'+this.$route.params.id,{

        method:"POST",
        body:JSON.stringify(datosEnviar)
      })

            .then(respuesta => respuesta.json())
            .then((datosRespuesta=>{
               console.log(datosRespuesta)
               window.location.href='../listar'
            }))
    }

  }

}
</script>

<style>

</style>