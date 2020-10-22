<template>
  <div>
    <!-- Jika seseorang tidak memilih apa apa, maka template ini yang akan ditampilkan -->
    <div class="aside-right" v-if="getCart.length === 0">
      <div class="img-sidecart"></div>
      <span class="slogan-cart">Your cart is empty</span>
      <span class="message-cart">Please add some items from the menu</span>
    </div>
    <!-- Jika seseorang memilih barang, maka akan masuk ke data cart -->
    <div class="aside-right" v-else>
      <div v-for="(item, index) in getCart" :key="index">
        <!-- <div class="add-cancel-icon" @click="!setAddToCart"></div> -->
        <div class="content">
          <div class="img">
            <img :src="item.image" alt />
          </div>
          <div class="description">
            <div class="name-description">{{ item.name }}</div>
            <div class="button">
              <div
                class="buttonmin"
                @click="setMinPlus({ symbol: '-', index })"
                :disabled="item.count < 1"
              >
                -
              </div>
              <div class="count">{{ item.count }}</div>
              <div
                class="buttonplus"
                @click="setMinPlus({ symbol: '+', index })"
              >
                +
              </div>
            </div>
            <div class="price-description">
              Rp. {{ item.price * item.count }}
            </div>
          </div>
        </div>
      </div>

      <!-- ================================================================ -->
      <!-- Template Button Checkout -->
      <div class="button">
        <div class="description">
          <div class="total">Total:</div>
          <div class="ppn">*Belum termasuk ppn</div>
          <div class="price">Rp. {{ total() }}*</div>
        </div>
        <div class="checkout">
          <button class="yes" @click="showModalCheckout">Checkout</button>
          <button class="no" @click="empetyCart">Cancel</button>
        </div>
      </div>

      <!-- ================================================================ -->
      <!-- Modal Add -->
    </div>
    <div class="modal-show" v-if="isShow">
      <div class="modal-title">
        <div class="title-cashier">
          <p class="checkout" refs='content'>Checkout</p>
          <p class="cashier">Cashier: Pevita Pearce</p>
        </div>
        <div class="title-struk">
          Receipt no: #090834830
          <span><i class="fas fa-times" @click="closeAlert"></i></span>
        </div>
      </div>
      <div class="modal-content" >
        <div class="content-item" v-for="(item, index) in getCart" :key="index">
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">Rp. {{ item.price }}</div>
        </div>
      </div>
      <div class="ppn">
        <div class="title">Ppn%</div>
        <div class="total">Rp.{{ ppn() }}</div>
      </div>
      <div class="total-price">Total : Rp. {{ totalprice() }}</div>
      <div class="method">Payment: Cash</div>
      <div class="modal-checkout-button">
        <button class="btn btn-primary print" @click="printPdf">Print PDF</button>
        <div class="or">Or</div>
        <button class="btn btn-primary send-email" @click="postToHistory()">
            <span v-if="isLoading == false">Checkout</span>
            <Circle2 class="loading-mid" v-if="isLoading"></Circle2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { jsPDF } from 'jspdf'
import { mapGetters, mapMutations } from 'vuex'
import mixins from '../mixins/Loading'
export default {
  name: 'Aside-right',
  mixins: [mixins],
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    ...mapMutations(['setAddToCart', 'setClearAllCart', 'setMinPlus']),
    showModalCheckout () {
      this.isShow = !this.isShow
    },
    printPdf () {
      /* enable eslint */
      const doc = jsPDF()
      const html = this.$refs.content.innerHTML
      // doc.text('Terima Kasih sudah berbelanja di king\'s cafe, semoga anda senang :))', 15, 15)
      // doc.text(this.getCart.name, 15, 15)
      doc.fromHTML(html, 15, 15, {
        width: 150
      })
      doc.save('king\'s cafe struk.pdf')
    },
    empetyCart () {
      this.$swal({
        title: 'Are you sure?',
        text: 'all your orders will be automatically deleted and canceled',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'cancel order',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((res) => {
        if (res.value) {
          this.$swal({
            title: 'Canceled :((',
            text: 'I hope you get the appropriate item',
            icon: 'success'
          })
          this.setClearAllCart()
        }
      })
    },
    closeAlert () {
      this.isLoading = false
      this.$swal({
        title: 'Are you sure?',
        text: 'Your order will not be processed',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'cancel order',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((res) => {
        if (res.value) {
          this.$swal({
            title: 'Canceled :((',
            text: 'I hope you get the appropriate item',
            icon: 'success'
          })
          this.isShow = false
          // this.$router.push({ path: '/' })
        }
      })
    },
    total () {
      return this.getCart.reduce((a, b) => a + b.count * b.price, 0)
    },
    ppn () {
      return this.getCart.reduce(
        (a, b) => a + ((b.count * 1) / 10) * b.price,
        0
      )
    },
    totalprice () {
      return this.total() + this.ppn()
    },
    totalOrder () {
      return this.getCart.map(({ name }) => name).join(', ')
    },
    postToHistory () {
      this.isLoading = true
      axios
        .post(`${process.env.VUE_APP_BASE_URL}api/v1/histories`, {
          invoice: '#10302390',
          cashier: 'Pevita Pearce',
          orders: this.totalOrder(),
          amount: this.totalprice()
        })
        .then((res) => {
          this.isLoading = false
          console.log(res)
          this.$swal('Order Success', 'Order Successfully', 'success')
          this.showModalCheckout()
          this.setClearAllCart()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters(['getCart'])
  }
}
</script>

<style scoped>
.aside-right .add-cancel-icon {
  /* border: 1px solid black; */
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/logo-img/trash-image2.webp');
  background-size: cover;
  width: 25px;
  height: 25px;
  position: relative;
  top: 25px;
  left: 130px;
  cursor: pointer;
}

.aside-right {
  /* border: 1px solid #e7dcdc; */
  width: 395px;
  box-sizing: border-box;
  background: #ffffff;
  position: relative;
}

.img-sidecart {
  box-sizing: border-box;
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/img-sidecart.png');
  background-size: cover;
  position: relative;
  top: 60px;
  width: 180px;
  height: 180px;
  margin: auto;
}

span.slogan-cart {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  top: 30px;
  font-size: 25px;
  font-weight: 600;
  left: 90px;
}

span.message-cart {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: inline-block;
  position: relative;
  font-size: 16px;
  font-weight: 600;
  top: 40px;
  left: 50px;
  color: #cecece;
  word-spacing: 0.2em;
}

/* Aside Right add to cart */
.aside-right .content {
  display: flex;
  /* border: 1px solid black; */
  height: 120px;
  margin-bottom: 10px;
  z-index: -100;
}

.aside-right .img {
  width: 130px;
  height: 100px;
  background-size: cover;

  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  flex: 1;
}

.aside-right .img img {
  width: 120px;
  height: 100px;
}

.aside-right .description {
  /* border: 1px solid black; */
  flex: 2.5;

  display: flex;
  flex-direction: column;
}

.aside-right .description .name-description {
  /* border: 1px solid black; */
  position: relative;
  top: 14px;
  font-size: 20px;
  font-weight: 500;
}

/* Button Description Count */
.aside-right .description .button {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 35px;
  position: relative;
  top: 40px;
}

.aside-right .description .button .buttonmin {
  border: 1px solid #82de3a;
  background: rgba(130, 222, 58, 0.2);
  color: #82de3a;
  width: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
}
.aside-right .description .button .count {
  border: 1px solid #82de3a;
  color: #82de3a;
  width: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
}
.aside-right .description .button .buttonplus {
  border: 1px solid #82de3a;
  background: rgba(130, 222, 58, 0.2);
  color: #82de3a;
  width: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
}

/* Price Description */
.aside-right .description .price-description {
  /* border: 1px solid black; */
  position: relative;
  top: -8px;
  width: 90px;
  left: 140px;
  font-size: 18px;
  font-weight: 600;
}

/* Template Button Checkout */
/* Description Checkout */
.button .description {
  /* border: 1px solid black; */
  position: relative;
  bottom: -80px;
  padding: 0px 15px 0px 15px;
}

.button .description .total {
  /* border: 1px solid black; */

  font-size: 20px;
  font-weight: 700;
}
.button .description .ppn {
  /* border: 1px solid black; */
  margin-top: 5px;
  font-weight: 600;
}
.button .description .price {
  /* border: 1px solid black; */
  position: relative;
  width: 150px;
  top: -57px;
  left: 220px;

  text-align: right;
  font-size: 20px;
  font-weight: 700;
}

/* Button Checkout */
.button .checkout {
  /* border: 1px solid black; */
  position: relative;
  top: 54px;
  display: flex;
  flex-direction: column;
  margin: 8px 10px 0px 10px;
}

.button .checkout .yes {
  border: none;
  margin-bottom: 10px;
  background: #57cad5;
  height: 50px;
  color: white;
  font-size: 19px;
  font-weight: 600;
}
.button .checkout .no {
  border: none;
  background: #f24f8a;
  height: 50px;
  color: white;
  font-size: 19px;
  font-weight: 600;
}

/* ================================================================================== */
/* Checkout Modal */
.modal-show {
  /* border: 1px solid black; */
  position: absolute;
  top: 30px;
  left: 320px;
  right: 30px;
  background-color: white;
  border-radius: 20px;
  overflow: scroll;
  padding: 20px 35px 20px 35px;
  height: 100vh;
  width: 45%;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.modal-show::-webkit-scrollbar {
  display: none;
}

/* Modal title */
.modal-title {
  /* border: 1px solid black; */
  flex: 1;

  display: flex;
}

.modal-title .title-cashier {
  /* border: 1px solid black; */
  flex: 1;
  font-size: 30px;
  line-height: 39px;
}

.modal-title .title-cashier .checkout {
  /* border: 1px solid black; */
  font-size: 28px;
  line-height: 39px;
  font-weight: bold;
}

.modal-title .title-cashier .cashier {
  /* border: 1px solid black; */
  font-size: 20px;
  font-weight: bold;
}

.modal-title .title-struk {
  /* border: 1px solid black; */
  flex: 1;

  font-size: 20px;
  font-weight: bold;
}

.modal-title .title-struk i {
  font-size: 30px;
  padding-left: 10px;
  cursor: pointer;
}

/* Modal content */
.modal-content {
  /* border: 2px solid red; */
  flex: 2;

  font-size: 20px;
  font-weight: 500;
  height: max-content;
}

.modal-content .content-item {
  /* border: 1px solid black; */
  flex: 3;

  display: flex;
  flex-direction: row;
  /* box-sizing: border-box; */
}

.content-item .product-name {
  /* border: 1px solid black; */
  flex: 2;
}

.content-item .product-price {
  /* border: 1px solid black; */
  flex: 1;

  padding-left: 100px;
}

.ppn {
  /* border: 1px solid black; */

  display: flex;

  font-size: 20px;
  font-weight: 600;
}

.ppn .title {
  /* border: 1px solid black; */

  flex: 2;
}

.ppn .total {
  /* border: 1px solid black; */

  flex: 1;
  margin-left: 100px;
}

/* Total price */
.total-price {
  /* border: 1px solid black; */

  font-size: 20px;
  line-height: 33px;
  text-align: right;
  padding-right: 40px;
  color: #000000;
  font-size: 20px;
  font-weight: 500;

  margin-top: 20px;
}

.method {
  /* border: 1px solid black; */

  font-size: 20px;
  line-height: 33px;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px 20px 0px;
}

/* Modal checkout button */
.modal-checkout-button {
  /* border: 1px solid black; */
  flex: 1.6;
}

.modal-checkout-button .print {
  /* border: 1px solid black; */
  width: 100%;
  height: 50px;
  background: #f24f8a;
  border: none;

  font-size: 20px;
}

.modal-checkout-button .or {
  text-align: center;
  padding: 10px 0px 10px 0px;

  font-size: 20px;
  font-weight: bold;
}

.modal-checkout-button .send-email {
  /* border: 1px solid black; */
  width: 100%;
  height: 50px;
  background: #57cad5;

  border: none;
  font-size: 20px;
}

/* Settingan untuk tablet */
@media screen and (max-width: 768px) {
  .aside-right {
    width: 308px;
  }
  span.slogan-cart {
    top: 30px;
    font-size: 20px;
    font-weight: 600;
    left: 70px;
  }

  span.message-cart {
    font-size: 12px;
    font-weight: 600;
    top: 40px;
    left: 45px;
    color: #cecece;
    word-spacing: 0.2em;
  }
  /* Aside Right add to cart */
  .aside-right .content {
    display: flex;
    /* border: 1px solid black; */
    height: 120px;
    margin-bottom: 10px;
    z-index: -100;
  }

  .aside-right .img {
    width: 130px;
    height: 100px;
    background-size: cover;

    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    flex: 1;
  }

  .aside-right .img img {
    width: 100px;
    height: 80px;
  }

  .aside-right .description {
    /* border: 1px solid black; */
    flex: 2.5;

    display: flex;
    flex-direction: column;
  }

  .aside-right .description .name-description {
    /* border: 1px solid black; */
    width: 160px;
    position: relative;
    top: 10px;
    font-size: 15px;
    font-weight: 500;
  }

  /* Button Description Count */
  .aside-right .description .button {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    width: 80px;
    height: 25px;
    position: relative;
    top: 35px;
  }

  .aside-right .description .button .buttonmin {
    border: 1px solid #82de3a;
    background: rgba(130, 222, 58, 0.2);
    color: #82de3a;
    width: 25px;
    text-align: center;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;
  }
  .aside-right .description .button .count {
    border: 1px solid #82de3a;
    color: #82de3a;
    width: 25px;
    text-align: center;
    font-size: 17px;
    font-weight: bolder;
  }
  .aside-right .description .button .buttonplus {
    border: 1px solid #82de3a;
    background: rgba(130, 222, 58, 0.2);
    color: #82de3a;
    width: 25px;
    text-align: center;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;
  }

  /* Price Description */
  .aside-right .description .price-description {
    /* border: 1px solid black; */
    position: relative;
    top: 4px;
    width: 90px;
    left: 100px;
    font-size: 15px;
    font-weight: 600;
  }

  /* Template Button Checkout */
  /* Description Checkout */
  .button .description {
    /* border: 1px solid black; */
    position: relative;
    bottom: -80px;
    padding: 0px 15px 0px 15px;
  }

  .button .description .total {
    /* border: 1px solid black; */

    font-size: 19px;
    font-weight: 700;
  }
  .button .description .ppn {
    /* border: 1px solid black; */
    margin-top: 5px;
    font-weight: 600;
  }
  .button .description .price {
    /* border: 1px solid black; */
    position: relative;
    width: 150px;
    top: -57px;
    left: 140px;

    text-align: right;
    font-size: 18px;
    font-weight: 700;
  }

  /* Button Checkout */
  .button .checkout {
    /* border: 1px solid black; */
    position: relative;
    top: 54px;
    display: flex;
    flex-direction: column;
    margin: 8px 10px 0px 10px;
  }

  .button .checkout .yes {
    border: none;
    margin-bottom: 10px;
    background: #57cad5;
    height: 50px;
    color: white;
    font-size: 19px;
    font-weight: 600;
  }
  .button .checkout .no {
    border: none;
    background: #f24f8a;
    height: 50px;
    color: white;
    font-size: 19px;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  .aside-right {
    display: none;
  }
}
</style>
