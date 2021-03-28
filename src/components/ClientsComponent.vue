<template>
  <div class="hello">
  <h1>Clients</h1>
    <ul v-for="(client, index) in clientList" :key="index">
      <li>
        {{client}}
        <router-link :to="{ name: 'ClientsDetalls', params: {id: client} }">
        <button>Veure client</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script src="../scripts/ClientsComponent.js"></script>

<style src="../styles/ClientsComponent.css" scoped></style>
