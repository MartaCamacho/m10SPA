<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand><router-link to="/">🖤</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/clients">Clients</router-link></b-nav-item>
            <b-nav-item><router-link to="/proveidors">Proveïdors</router-link></b-nav-item>
            <b-nav-item><router-link to="/magatzem">Magatzem</router-link></b-nav-item>
            <b-nav-item><router-link to="/botiga">Botiga</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div></div>
    </div>
    <router-view />
  </div>
</template>

<style src="./styles/App.css">

</style>
