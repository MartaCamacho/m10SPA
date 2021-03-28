<template>
  <div class="home">
    <BotigaComponent/>
    <!-- 
      NIVELL 2
      
      <div class="d-flex justify-content-center">
        <div><router-link to="/botiga/alimentacio">Alimentació</router-link></div>
        <div class="ml-3"><router-link to="/botiga/congelats">Congelats</router-link></div>
      </div>
    <router-view></router-view> -->

    <!-- NIVELL 3 -->
    <div class="d-flex justify-content-center">
      <div><a href="/botiga/alimentacio">Alimentació</a></div>
      <div class="ml-3"><a href="/botiga/congelats">Congelats</a></div>
    </div>
    <div v-if="$route.path == '/botiga/alimentacio'">
    <AlimentacioComponent/>
    </div>
    <div v-if="$route.path == '/botiga/congelats'">
    <CongelatsComponent/>
    </div>
  </div>
</template>

<script src="../scripts/Botiga.js"></script>