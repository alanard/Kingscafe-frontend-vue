<template>
  <div>
    <div class="image-card" :class="active? 'active' : ''">
      <img :src="image" alt @click="$emit('select-product')" />
    </div>
    <div class="container">
      <div class="title-card id">{{id}}</div>
      <div class="title-card">{{name}}</div>
      <div class="price-card">Rp. {{price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'price', 'id', 'image', 'active']
}
</script>

<style scoped>
.container {
  /* border: 1px solid black; */
  margin-left: -10px;
  width: 230px;
}
.image-card {
  /* border: 1px solid black; */
  width: 200px;
  height: 160px;
  border-radius: 10px 10px 0 0;
  margin-left: 20px;
  cursor: pointer;
}
.image-card img {
  width: 200px;
  height: 160px;
}
.title-card {
  /* border: 1px solid black; */
  font-family: 'Nunito', sans-serif;
  position: relative;
  top: 3px;
  font-size: 17px;
  left: 15px;
}
.title-card.id {
  display: none;
}
.price-card {
  /* border: 1px solid black; */
  position: relative;
  top: 5px;
  left: 15px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}

.active {
  filter: brightness(50%);
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/logo-img/logout.png');
  /* background-repeat: no-repeat; */
  background-size: cover;

  width: 200px;
  height: 160px;
  /* border: 4px solid black; */
  /* z-index: 100;
  position: relative; */
  /* top: 20px; */
}

/* Tampilan tablet */
@media screen and (max-width: 768px) {
  .image-card {
    margin-bottom: -60px;
  }
  .image-card img {
    width: 130px;
    height: 100px;
    border-radius: 10px 10px 0 0;
  }
  .price-card {
    left: -12px;
    font-size: 18px;
  }
  .title-card {
    font-size: 17px;
  }
}

/* Tampilan mobile */

@media screen and (max-width: 576px) {
  div .container {
    margin-left: 50px;
  }
  .image-card img {
    width: 120px;
    height: 100px;
    border-radius: 10px 10px 0 0;
    margin-left: 50px;
  }
  .title-card {
    /* border: 1px solid black; */
    font-family: 'Nunito', sans-serif;
    position: relative;
    /* top: 180px; */
    font-size: 15px;
  }
  .price-card {
    /* border: 1px solid black; */
    position: relative;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
}
</style>
