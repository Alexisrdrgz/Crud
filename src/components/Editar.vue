<template>
<div class="container">
    <div class="card">
      <div class="card-header">
        Editar empleados
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">

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

                this.empleados=[]
                if(typeof datosRespuesta[0].success === 'undefined')
                {
                    
                    this.empleados=datosRespuesta[0]
                }

            })
            .catch(console.log)
        
    }
  }

}
</script>

<style>

</style>