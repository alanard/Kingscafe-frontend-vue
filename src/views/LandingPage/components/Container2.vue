<template>
  <div class="main-content2">
    <div class="title">
      <div class="title-card">Extra Ordinary Menus</div>
      <div class="content-card">
        Coffee with the best taste, coffee beans come directly from farmers in
        the village, so awake the natural taste and aroma.
        <br />The best food which is processed directly by the best cheff and with
        the best ingredients imported from abroad and number quality one.
        <br />Is no less delicious desert that is so tempting you, various cakes and
        other deserts
      </div>
    </div>

    <div class="card-group">
      <div class="group1">
        <div class="card-image1"></div>
        <div class="card-image2"></div>
      </div>
      <div class="group2">
        <div class="card-image3"></div>
        <div class="card-image4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container2'
}
</script>

<style scoped>
.main-content2 {
  /* border: 1px solid black; */
  width: 100%;
  height: 1200px;
  background-color: #997357;
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/backgroundlandingpage5.png');
  background-size: 800px;
}

.main-content2 .title {
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: aliceblue;
  display: inline-block;
  width: 500px;

  position: relative;
  top: 500px;
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

.card-group {
  /* border: 1px solid black; */
  width: 600px;
  height: 600px;
  position: relative;
  left: 600px;
  top: 70px;

  display: flex;
  flex-direction: column;
}

.card-group .group1 {
  /* border: 1px solid black; */
  flex: 1;

  display: flex;
  flex-direction: row;
}

.card-group .group2 {
  /* border: 1px solid black; */
  flex: 1;

  display: flex;
  flex-direction: row;
}

.card-group .card-image1 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/grupcard1.jpg');
  background-size: cover;
  background-position-x: -80px;
  margin: 20px 10px 10px 20px;
  flex: 1;
}
.card-group .card-image2 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/grupcard2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 20px 20px 10px 10px;
  flex: 1;
}
.card-group .card-image3 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/grupcard3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px 10px 20px 20px;
  flex: 1;
}
.card-group .card-image4 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/grupcard4.jpg');
  background-size: cover;
  background-position-x: -20px;
  background-repeat: no-repeat;
  margin: 10px 20px 20px 10px;
  flex: 1;
}

@media screen and (max-width: 576px) {
  .main-content2 {
    /* border: 1px solid black; */
    width: 100%;
    height: 1100px;
    background-color: #997357;
    background-size: 800px;
  }

  .main-content2 .title {
    /* border: 1px solid black; */
    border-radius: 10px;
    background-color: aliceblue;
    display: inline-block;
    width: 90%;

    position: relative;
    top: 720px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    box-shadow: -10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  .main-content2 .title .title-card {
    /* border: 1px solid black; */
    font-size: 25px;
    color: #997357;
    margin: 10px 20px 10px 20px;
  }

  .main-content2 .title .content-card {
    /* border: 1px solid black; */
    font-size: 14px;
    margin: 10px 20px 10px 20px;
    font-family: 'Poppins', sans-serif;
  }

  .card-group {
    /* border: 1px solid black; */
    width: 380px;
    height: 380px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 70px;

    display: flex;
    flex-direction: column;
  }
  .card-group .card-image1 {
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    background-position-x: -60px;
    margin: 20px 0px 0px 20px;
  }
  .card-group .card-image2 {
  margin: 20px 20px 0px 10px;
  }
  .card-group .card-image3 {
  margin: 5px 0px 20px 20px;
  }
  .card-group .card-image4 {
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    background-position-x: -20px;
    background-repeat: no-repeat;
    margin: 5px 20px 20px 10px;
  }
}
</style>
