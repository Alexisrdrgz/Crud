<template>
  <div class="container">
    <div class="card">
        <div class="card-header">
            Empleados
        </div>
        <div class="card-body">
          
            <table class="table">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Nombre:</th>
                        <th>Correos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr  v-for="empleado in empleados" :key="empleado.id">
                        <td>{{empleado.id}}</td>
                        <td>{{empleado.nombre}}</td>
                        <td>{{empleado.correo}}</td>
                        <td>
                            <div>
                                <router-link :to="{name:'Editar',params:{id:empleado.id}}" class="btn btn-success">Editar</router-link>
                                <a name="" id="" class="btn btn-danger" href="#" role="button" v-on:click="borrarEmpleado(empleado.id)">Borrar</a>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
       
    </div>
    <div>

    </div>


  </div>

</template>

<script>
export default {
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