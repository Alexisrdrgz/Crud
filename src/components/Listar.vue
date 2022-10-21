<template>
 <navbar />
    
  <div class="container"><br/>
   
    <div class="card">
        <div class="card-header" style="color:black">
            Pacientes
        </div>
        <div class="card-body">
          
            <table class="table">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Nombre:</th>
                        <th>correo</th>
                        <th>edad</th>
                        <th>Sexo</th>
                        <th>Caso clinico</th>
                        <th>accion</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr  v-for="empleado in empleados" :key="empleado.id">
                        <td>{{empleado.id}}</td>
                        <td>{{empleado.nombre}}</td>
                        <td>{{empleado.correo}}</td>
                        <td>{{empleado.edad}}</td>
                        <td>{{empleado.sexo}}</td>
                        <td>{{empleado.casoClinico}}</td>
                       
                        
                        <td>
                            <div>
                                <router-link :to="{name:'Editar',params:{id:empleado.id}}" class="btn btn-success">Editar</router-link>
                                <a name="" id="" class="btn btn-danger" href="#" role="button" v-on:click="borrarEmpleado(empleado.id)">Borrar</a>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/crear" class="btn btn-success">Agregar nuevo paciente</router-link>
        </div>
       
    </div>
  </div>

</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },
    data(){
        return{
            empleados:[]
        }
    },

    created:function(){
        this.consultarEmpleados()
    },
    methods: {
       
        consultarEmpleados(){
            fetch('http://localhost/empleados/')
            .then(respuesta => respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)

                this.empleados=[]
                if(typeof datosRespuesta[0].success === 'undefined')
                {
                    
                    this.empleados=datosRespuesta;

                }

            })
            .catch(console.log)
        },
        borrarEmpleado(id){
            console.log(id)

            fetch('http://localhost/empleados/?borrar='+id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                
             window.location.href="listar"

            })
            .catch(console.log)
        }
    }


}
</script>

<style>

</style>