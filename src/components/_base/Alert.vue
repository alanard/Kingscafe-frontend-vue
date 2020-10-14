<template>
  <div>
    <div
      class="alert alert-primary"
      role="alert"
      v-show="addProductAlert"
    >Yeeee! Data success added!</div>
    <div
      class="alert alert-primary"
      role="alert"
      v-show="updateProductAlert"
    >Yeeee! Data success Updated!</div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      addProductAlert: false,
      updateProductAlert: false
    }
  }
}
</script>

<style scoped>
.alert {
  width: 100%;
  margin: 10px 20px 0px 20px;
  font-size: 18px;
  font-weight: 500;
}
</style>
