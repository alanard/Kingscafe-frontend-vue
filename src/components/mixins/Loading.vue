<template>
  <div id="app">
    <Circle2></Circle2>
  </div>
</template>

<script>
import { Circle2 } from 'vue-loading-spinner'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Circle2
  }
}
</script>

<style scoped>
</style>
