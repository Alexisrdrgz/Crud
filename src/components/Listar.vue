<template>
  <div>Vamos a Listar</div>

</template>

<script>
export default {
    created:function(){
        this.consultarEmpleados()
    },
    methods: {
       
        consultarEmpleados(){
            fetch('http://localhost/empleados/')
            .then(respuesta => respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
            })
            .catch(console.log)
        }
    }


}
</script>

<style>

</style>