<template>
  <div class="home">
    <h1>Nom client: {{ $route.params.id }} </h1>
    <button @click="back">Tornar</button>
  </div>
</template>

<script src="../scripts/ClientsDetalls.js"></script>