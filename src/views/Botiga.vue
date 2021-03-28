<template>
  <div class="home">
    <BotigaComponent/>
    <div class="d-flex justify-content-center">
      <div><router-link to="/botiga/alimentacio">Alimentació</router-link></div>
      <div class="ml-3"><router-link to="/botiga/congelats">Congelats</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src="../scripts/Botiga.js"></script>