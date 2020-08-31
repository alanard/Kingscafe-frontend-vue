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
  height: 800px;
  background-color: #d0c2b6;
}

.main-content3 .img-ourcafe {
  /* background-image: url(../img/landingPage/content/ourcafe.jpg); */
  background-size: cover;
  background-position-x: -50px;
  width: 500px;
  height: 500px;

  display: inline-block;
  position: relative;
  left: 200px;
  top: 90px;
}

.main-content3 .title-ourcafe {
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: aliceblue;
  display: inline-block;
  width: 500px;

  position: relative;
  bottom: 50px;
  left: 150px;

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
</style>
