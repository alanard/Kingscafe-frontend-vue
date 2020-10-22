<template>
  <div class="main-content3">
    <div class="img-ourcafe"></div>
    <div class="title-ourcafe">
      <div class="title">King's Cafe</div>
      <div class="content">
        A place that is both convenient and strategic, makes anyone who passes
        in front of King's Cafe definitely want to visit it.
        <br />Clean and secure, you can invite your family both children and adults
        to stop by at King's Cafe
        <br />there are many variants of the menu that can spoil your tongue, and
        guaranteed quality taste
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
.main-content3 {
  /* border: 1px solid black; */
  width: 100%;
  height: 1100px;
  background-color: #d0c2b6;
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/backgroundlandingpage3.png');
  background-repeat: no-repeat;
  background-position-x: 260px;
  background-position-y: -70px;
}

.main-content3 .img-ourcafe {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/ourcafe.jpg');
  background-size: cover;
  background-position-x: -50px;
  width: 550px;
  height: 550px;

  display: inline-block;
  position: relative;
  left: 100px;
  top: 200px;
}

.main-content3 .title-ourcafe {
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: aliceblue;
  display: inline-block;
  width: 550px;
  height: 300px;

  position: relative;
  bottom: 40px;
  left: 60px;
  /* z-index: 10; */

  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
}

.main-content3 .title-ourcafe .title {
  /* border: 1px solid black; */
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  color: #997357;
  margin: 10px 20px 10px 20px;
}

.main-content3 .title-ourcafe .content {
  /* border: 1px solid black; */

  margin: 10px 20px 10px 20px;
  font-family: 'Poppins', sans-serif;
}

/* Setingan untuk hp */
@media screen and (max-width: 576px) {
  .main-content3 {
    /* border: 1px solid black; */
    width: 100%;
    height: 900px;
    background-position-x: 260px;
    background-position-y: -70px;
  }

  .main-content3 .img-ourcafe {
    background-position-x: -50px;
    width: 410px;
    height: 410px;

    display: inline-block;
    position: relative;
    left: 0px;
    top: 200px;
  }

  .main-content3 .title-ourcafe {
    /* border: 1px solid black; */
    border-radius: 10px;
    display: inline-block;
    width: 90%;
    height: 280px;

    position: relative;
    bottom: -150px;
    left: 50%;
    transform: translateX(-50%);

    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  .main-content3 .title-ourcafe .title {
    /* border: 1px solid black; */
    font-size: 25px;
    color: #997357;
    margin: 10px 20px 10px 20px;
  }

  .main-content3 .title-ourcafe .content {
    /* border: 1px solid black; */
    font-size: 14px;
    margin: 10px 20px 10px 20px;
  }
}
</style>
