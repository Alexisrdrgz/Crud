<template>
    <navbar />
  <div class="container">
    <div class="card">
      <div class="card-header" style="color:black">Agregar nuevos pacientes</div>
      <div class="card-body">
        <!-- Aqui empieza el form -->
        <form v-on:submit.prevent="agregarRegistro" class="row g-3">
          <!-- Nombre -->
          <div class="col-md-6">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              class="form-control"
              required
              name="nombre"
              v-model="empleado.nombre"
              id="nombre"
              aria-describedby="helpId"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el nombre del empleado</small
            >
          </div>

          <!-- Email -->

          <div class="col-md-6">
            <label for="">Correo:</label>
            <input
              type="email"
              class="form-control"
              required
              name="correo"
              v-model="empleado.correo"
              id="correo"
              aria-describedby="helpId"
              placeholder="correo"
            />
            <small id="helpId" class="form-text text-muted"
              >Ingrese correo del empleado</small
            >
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
            <!-- Botones empiezan aqui -->
            <button
              type="submit"
              class="btn btn-success"
              style="margin-right: 25px"
            >
              Agregar
            </button>
            <router-link :to="{ name: 'Listar' }" class="btn btn-warning"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './Navbar.vue'
export default {
  components: {
    navbar,
  },
  data() {
    return {
      empleado: {},
    };
  },
  methods: {
    agregarRegistro() {
      console.log(this.empleado);

      var datosEnviar = {
        nombre: this.empleado.nombre,
        correo: this.empleado.correo,
        edad: this.empleado.edad,
        sexo:this.empleado.sexo,
        casoClinico:this.empleado.casoClinico,
      };
      fetch("http://localhost/empleados/?insertar=1", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
      })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          window.location.href = "listar";
        });
    },
  },
};
</script>

<style></style>
