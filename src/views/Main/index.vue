<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from '../../components/_base/Navbar'

export default {
  name: 'Main',
  components: {
    navbar
  }
}
</script>

<style scoped>
</style>
