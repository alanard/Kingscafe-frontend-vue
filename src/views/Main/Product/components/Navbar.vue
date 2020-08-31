<template>
<div class="header">
      <div class="nav search">
        <div class="img-menu"></div>
        <input type="text" placeholder="Search Product">
      </div>
</div>
</template>

<script>
export default {
  name: 'Navabar'
}
</script>

<style scoped>
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.header .nav.search .img-menu {
  background-image: url("https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/menu1.png");
  position: relative;
  background-size: cover;
  width: 25px;
  height: 25px;
  top: 23px;
  left: 20px;
  /* Hanya untuk membantu melihat garis awal */
  /* border: 1px solid black; */
}
.nav.search input {
  margin: auto;
  font-size: 25px;
  font-family: "work sans", sans-serif;
  font-weight: bold;
  padding: 20px;
  border: none;
  text-align: center;
}
</style>
