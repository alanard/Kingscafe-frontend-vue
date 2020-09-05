<template>
  <div class="header">
    <div class="nav search">
      <div class="img-menu"></div>
      <input type="text" id="search" placeholder="FOOD ITEMS" v-on:keyup="setSearch" />
      <label class="img-src" for="search"></label>
      <div class="cart-togle"></div>
    </div>
    <div class="nav cart">
      <span>Cart</span>
      <div class="count">{{countCart}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['handleSearch']),
    setSearch(e) {
      this.handleSearch(e.target.value)
    }
  },
  computed: {
    ...mapGetters({
      // Untuk menambah nilai di jika cart di klik
      countCart: 'countCart'
    })
  }
}
</script>

<style scoped>
/* nav search */
.header {
  /* border: 1px solid black; */
  height: 80px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
}

.nav {
  /* border: 1px solid black; */
  flex: 1;
  width: 100%;
}

.nav.search {
  display: flex;
  flex: 2.43;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.header .nav.search .img-menu {
  /* border: 1px solid black; */
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/menu1.png');
  position: relative;
  background-size: cover;
  width: 25px;
  height: 25px;
  top: 23px;
  left: 30px;
}
.nav.search input {
  border: 0;
  margin: auto;
  font-size: 25px;
  font-family: 'airbnb', sans-serif;
  font-weight: bold;

  padding: 20px;
  text-align: center;
}

.header .nav.search .img-src {
  /* border: 1px solid black; */
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/magnifying-glass.png');
  background-size: cover;
  position: relative;
  width: 28px;
  height: 28px;
  top: 30px;
  right: 50px;
  cursor: pointer;
}

/* Start Nav Cart */
.nav.cart {
  display: flex;
  z-index: 1;
  /* width: 200px; */
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border: 1px solid #e7e2e2;
}

.nav.cart span {
  margin: auto;
  font-size: 25px;
  font-family: 'airbnb', sans-serif;
  font-weight: bolder;

  position: relative;
}

.header .nav.cart .count {
  /* Hanya untuk membantu melihat garis awal */
  /* border: 1px solid black; */
  background: #57cad5;
  border-radius: 100%;
  position: relative;
  top: 26px;
  left: -153px;

  width: 27px;
  height: 28px;

  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

/* End Header */

/* Ukuran Tablet */
@media screen and (max-width: 768px) {
  .nav.search {
    flex: 1.5;
  }
  .nav.search input {
    position: relative;
    text-align: center;
    font-size: 18px;
    left: 90px;
    width: 200px;
    height: 20;
    font-size: 20px;
    margin: 0px 60px 0px 10px;
  }
  .nav.cart {
    flex: 1;
  }
  .header .nav.search .img-menu {
    /* border: 1px solid black; */
    background-size: cover;
    position: relative;
    left: 20px;
  }
  .header .nav.search .img-src {
    top: 20px;
    left: 70px;
  }
}

/* Ukuran Mobile */

@media screen and (max-width: 576px) {
  .nav.cart {
    display: none;
  }
  .nav.search input {
    position: relative;
    top: 10px;
    text-align: center;
    /* left: 100px; */
    width: 150px;
    /* margin-left: -10px; */
    height: 20px;
    font-size: 18px;
  }
  .header {
    height: 60px;
  }
  .header .nav.search .img-menu {
    /* border: 1px solid black; */
    background-size: cover;
    position: relative;
    width: 22px;
    height: 22px;
    left: 15px;
  }
  .header .nav.search .img-src {
    display: none;
  }
  .cart-togle {
    background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/logo-img/cart.jpg');
    background-size: cover;
    position: relative;
    width: 30px;
    height: 30px;
    top: 13px;
    left: 75px;
    /* top: 33px; */
  }
}
</style>
