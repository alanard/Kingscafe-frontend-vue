<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.loading {
  width: 60px;
  position: relative;
  left: 165px;
}

.loading-mid {
  width: 60px;
  position: relative;
  left: 235px;
}

.loading-panjang {
  width: 60px;
  position: relative;
  left: 180px;
}
</style>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  },
  created () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>
