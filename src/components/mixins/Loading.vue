<template>
  <div id="app">
    <Circle8></Circle8>
  </div>
</template>

<script>
import { Circle8 } from 'vue-loading-spinner'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Circle8
  }
}
</script>

<style scoped>
</style>
