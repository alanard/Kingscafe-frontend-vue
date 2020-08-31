<template>
  <div class="main-menu">
    <div class="title-card">the most popular menu</div>
    <div class="menu-card">
      <div class="card1"></div>
      <div class="card2"></div>
      <div class="card3"></div>
      <div class="card4"></div>
      <div class="card5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container3'
}
</script>

<style scoped>
.main-menu {
  /* border: 1px solid black; */
  width: 100%;
  height: 1000px;
  background-color: #ffff;
  background-color: #d0c2b6;
}

.main-menu .title-card {
  /* border: 1px solid black; */
  font-family: 'Pacifico', cursive;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 70px;

  /* margin-top: 40px; */
  margin-bottom: 150px;
  padding-top: 40px;
}

.main-menu .menu-card {
  /* border: 1px solid black; */
  width: inherit;
  height: 700px;
  margin: auto;

  display: flex;
}

.main-menu .menu-card .card1 {
  /* border: 1px solid black; */
  /* background-image: url(../img/landingPage/content/mainContent1.jfif); */
  background-size: cover;
  background-position-x: center;

  flex: 1;
  flex-direction: column;
}
.main-menu .menu-card .card2 {
  /* border: 1px solid black; */
  /* background-image: url(../img/landingPage/content/mainContent12.jfif); */
  background-size: cover;
  background-position-x: center;

  flex: 1;
  flex-direction: column;
}
.main-menu .menu-card .card3 {
  /* border: 1px solid black; */
  /* background-image: url(../img/landingPage/content/mainContent8.jfif); */
  background-size: cover;
  background-position-x: center;

  flex: 1;
  flex-direction: column;
}
.main-menu .menu-card .card4 {
  /* border: 1px solid black; */
  /* background-image: url(../img/landingPage/content/mainContent10.jfif); */
  background-size: cover;
  background-position-x: center;

  flex: 1;
  flex-direction: column;
}
.main-menu .menu-card .card5 {
  /* border: 1px solid black; */
  /* background-image: url(../img/landingPage/content/mainContent9.jfif); */
  background-size: cover;
  background-position-x: -90px;

  flex: 1;
  flex-direction: column;
}
</style>
