<template>
  <div class="main-content">
    <div class="img-content1"></div>
    <div class="img-content2"></div>

    <div class="about">
      <div class="title">About US</div>
      <div class="content">
        I founded this cafe since 2018, the first time I only sold coffe
        cappuccino, then after my cafe began to grow and I have quite a lot of
        employees, finally a lot of menus
        <br />
        <br />"Big people grow with the big decisions he makes. Not by the
        living facilities he got. ” We will not fall by a mountain. But
        gravel, it is what most often makes us stagger.
      </div>
      <div class="mapcontent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container1'
}
</script>

<style scoped>
.main-content {
  /* border: 1px solid black; */
  box-sizing: border-box;
  width: 100%;
  height: 1000px;
  background-color: #d0c2b6;
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/backgroundlandingpage2.png');
}

.main-content .img-content1 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/image2.jfif');
  background-size: cover;
  display: inline-block;
  width: 300px;
  height: 520px;

  margin: 100px 20px 0px 100px;
}

.main-content .img-content2 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/image3.jfif');
  background-size: cover;
  display: inline-block;
  width: 300px;
  height: 520px;
}

.main-content .about {
  /* border: 1px solid black; */
  border-radius: 5px;
  background-color: aliceblue;
  display: inline-block;
  width: 550px;
  height: 280px;
  box-sizing: border-box;

  position: relative;
  left: -30px;
  bottom: 130px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
}

.main-content .about .title {
  /* border: 1px solid black; */

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  color: #997357;
  margin: 10px 20px 10px 20px;
}

.main-content .about .content {
  /* border: 1px solid black; */

  margin: 10px 20px 10px 20px;
  font-family: 'Poppins', sans-serif;
}

.mapcontent {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/mapcontent.png');
  border: 1px solid black;
  background-size: cover;
  background-position-y: -60px;
  width: 1100px;
  height: 350px;
  position: relative;
  top: 300px;
  left: -560px;
}
</style>
