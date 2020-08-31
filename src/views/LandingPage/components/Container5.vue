<template>
  <div class="main-content2">
    <div class="title">
      <div class="title-card">Music</div>
      <div class="content-card">
        Every weekend night, we invite street musicians to join us in
        entertaining those of you who come to King's Cafe Most of them are
        very talented, and can perform very good songs, which can make you
        more comfortable eating
        <br />if you have a band, you can register it at king's cafe, we have an
        interesting offer for those of you who have talent to sing
      </div>
    </div>

    <div class="card-group">
      <div class="group1">
        <div class="card-image-music1"></div>
        <div class="card-image-music2"></div>
      </div>
      <div class="group2">
        <div class="card-image-music3"></div>
        <div class="card-image-music4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container4'
}
</script>

<style scoped>
.main-content2 {
  /* border: 1px solid black; */
  width: 100%;
  height: 1000px;
  background-color: #997357;
}

.main-content2 .title {
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: aliceblue;
  display: inline-block;
  width: 500px;

  position: relative;
  top: 450px;
  left: 140px;
  z-index: 100;

  box-shadow: -10px 10px 10px 5px rgba(0, 0, 0, 0.25);
}

.main-content2 .title .title-card {
  /* border: 1px solid black; */
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  color: #997357;
  margin: 10px 20px 10px 20px;
}

.main-content2 .title .content-card {
  /* border: 1px solid black; */

  margin: 10px 20px 10px 20px;
  font-family: 'Poppins', sans-serif;
}

.card-group .card-image-music1 {
  /* background-image: url(../img/landingPage/content/grupcardmusic1.jpg); */
  background-size: cover;
  margin: 20px 10px 10px 20px;
  flex: 1;
}
.card-group .card-image-music2 {
  /* background-image: url(../img/landingPage/content/grupcardmusic2.jpg); */
  background-size: cover;
  background-repeat: no-repeat;

  background-position-x: -50px;
  margin: 20px 20px 10px 10px;
  flex: 1;
}
.card-group .card-image-music3 {
  /* background-image: url(../img/landingPage/content/grupcardmusic3.jpg); */
  background-size: cover;
  background-repeat: no-repeat;

  background-position-x: -40px;
  margin: 10px 10px 20px 20px;
  flex: 1;
}
.card-group .card-image-music4 {
  /* background-image: url(../img/landingPage/content/grupcardmusic4.jpg); */
  background-size: cover;
  background-position-x: -60px;
  background-repeat: no-repeat;
  margin: 10px 20px 20px 10px;
  flex: 1;
}
</style>
