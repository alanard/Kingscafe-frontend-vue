<template>
  <div>
    <div class="dropdown">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Order By</a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">Name</a>
        <a class="dropdown-item" href="#">cheapest price</a>
        <a class="dropdown-item" href="#">expensive price</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter'
}
</script>

<style scoped>
</style>
