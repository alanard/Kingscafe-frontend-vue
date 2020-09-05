<template>
  <div class="header">
    <div class="nav search">
      <div class="img-menu"></div>
      <span>History</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
/* Start Header */

.header {
  /* border: 1px solid black; */
  height: 80px;
  box-sizing: border-box;
  display: flex;
  /* width: 100%; */
}

.nav {
  /* border: 1px solid black; */
  flex: 1;
  width: 100%;
}

.nav.search {
  display: flex;
  flex: 2.85;
  background: #ffffff;
  border-bottom: rgba(0, 0, 0, 0.25);
}

.header .nav.search .img-menu {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/menu1.png');
  position: relative;
  background-size: cover;
  width: 25px;
  height: 25px;
  top: 23px;
  left: 20px;
  /* Hanya untuk membantu melihat garis awal */
  /* border: 1px solid black; */
}
.nav.search span {
  margin: auto;
  font-size: 25px;
  font-family: 'work sans', sans-serif;
  font-weight: bold;
}

/* End Nav Search */

/* End Header */
</style>
