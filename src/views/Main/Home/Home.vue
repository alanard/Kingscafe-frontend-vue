<template>
  <div>
    <div class="header">
      <Navbar />
    </div>
    <div class="content">
      <AsideLeft />
      <div class="main-content">
        <div class="filter">
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Order By</a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" @click="OrderName">A - Z</a>
              <a class="dropdown-item" @click="OrderNameDesc">Z - A</a>
              <a class="dropdown-item" @click="OrderPriceMin">cheapest price</a>
              <a class="dropdown-item" @click="OrderPricePlus">expensive price</a>
            </div>
          </div>
        </div>
        <div class="card" v-for="product in products" :key="product.id">
          <Card
            :id="product.id"
            :image="product.image"
            :name="product.name"
            :price="product.price"
          />
        </div>
      </div>
      <AsideRight />
    </div>
  </div>
</template>

<script>
// import navbar from '../../../components/_base/Navbar'
import AsideLeft from '../../../components/_base/Aside-left'
import AsideRight from '../../../components/_base/Aside-right'
import Card from '../../../components/_base/Card'
// import axios from 'axios'
import Navbar from '../../../components/_base/Navbar'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    AsideLeft,
    AsideRight,
    Card,
    Navbar
  },
  data() {
    return {
      // products: [],
      username: '',
      password: '',
      search: ''
    }
  },
  methods: {
    // getAllProduct () {
    //   axios
    //     .get('http://localhost:4000/api/v1/products')
    //     .then((res) => {
    //       this.products = res.data.result
    //     })
    //     .catch(() => {
    //       alert('Error Load Data')
    //     })
    // },
    // handleLogin() {
    //   const data = {
    //     username: this.username,
    //     password: this.password
    //   }
    //   this.login(data)
    // },
    ...mapActions([
      'login',
      'getProducts',
      'getProductsByName',
      'getProductsByPriceMin',
      'getProductsByPricePlus',
      'getProductsByNameDesc'
    ]),
    OrderName(e) {
      e.preventDefault()
      this.getProductsByName()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderNameDesc(e) {
      e.preventDefault()
      this.getProductsByNameDesc()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderPriceMin(e) {
      e.preventDefault()
      this.getProductsByPriceMin()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderPricePlus(e) {
      e.preventDefault()
      this.getProductsByPricePlus()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters({
      products: 'products'
    })
  },
  mounted() {
    this.getProducts()
    // this.getProductsByName()
  }
}
</script>

<style scoped>
.navbar {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
}

.content {
  /* border: 1px solid black; */
  display: flex;
  height: 100vh;
}

.main-content {
  /* border: 1px solid black; */
  background: rgba(190, 195, 202, 0.3);
  flex: 3.3;
  overflow: auto;
}
.main-content .card {
  border: 1px solid black;
  /* width: 200px; */
  /* height: 180px; */
  /* margin: 10px; */
  border: none;
  border-radius: 10px 10px 0 0;
  margin: 20px 30px 10px 30px;
  background: none;
  display: inline-block;
  /* overflow: hidden; */
  /* box-sizing: border-box; */
}

.filter {
  position: relative;
  left: 850px;
  margin-top: 10px;
}

/* Tampilan Tablet */
@media screen and (max-width: 768px) {
  .main-content .card {
    border: 1px solid black;
    /* width: 200px; */
    border: none;
    border-radius: 10px 10px 0 0;
    margin: 20px 20px 10px 38px;
    background: none;
    display: inline-block;
  }
}

/* Tampilan Mobile */
@media screen and (max-width: 576px) {
  .main-content .card {
    /* border: 1px solid black; */
    /* width: 200px; */
    border: none;
    border-radius: 10px 10px 0 0;
    /* margin: 20px 20px 10px 38px; */
    background: none;
    display: inline-block;
  }
  .filter {
    left: 0;
  }
}
</style>
