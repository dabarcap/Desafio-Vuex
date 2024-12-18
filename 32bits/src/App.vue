<script>
import {mapState, mapActions} from "vuex";
import Juego from "./components/Juego.vue"

export default {
  name: "App",
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["incrementar", "decrementar"])
  },
  components: {
    Juego
  }
}
</script>

<template>
  <div id="app">
    <h1>Tienda de 32 Bits</h1>
    <h3>Liista de Juegos</h3>
    <table>
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <juego v-for="(juego,index) in juegos" :key="index" :videojuego="juego" :index="index" @aumentar="incrementar" @disminuir="decrementar" />
      </tbody>
    </table>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
