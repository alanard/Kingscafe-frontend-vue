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
      <div v-for="item in getCart" :key="item.id">
        <!-- <div class="add-cancel-icon" @click="!setAddToCart"></div> -->
        <div class="content">
          <div class="img">
            <img :src="item.image" alt />
          </div>
          <div class="description">
            <div class="name-description">{{item.name}}</div>
            <div class="button">
              <div class="buttonmin">-</div>
              <div class="count">1</div>
              <div class="buttonplus" @click="item.price*countCart">+</div>
            </div>
            <div class="price-description">Rp. {{item.price}}</div>
          </div>
        </div>
      </div>

      <!-- Template Button Checkout -->
      <div class="button">
        <div class="description">
          <div class="total">Total:</div>
          <div class="ppn">*Belum termasuk ppn</div>
          <div class="price">Rp. 105.000*</div>
        </div>
        <div class="checkout">
          <button class="yes" @click="showModalCheckout">Checkout</button>
          <button class="no">Cancel</button>
        </div>
      </div>

      <!-- Modal Add -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        v-show="isShow"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <!-- <div class="modal-title" id="exampleModalLongTitle"></div> -->
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="main">
                <div class="title">
                  <div class="checkout">Checkout</div>
                  <div class="receipt">Receipt no: #010410919</div>
                </div>
                <div class="cashier-name">Cashier : Pevita Pearce</div>
                <div class="content">
                  <div class="title">
                    <div class="title">Coffee Latte 1x</div>
                    <div class="title">Black Forest 1x</div>
                    <div class="title">Salmon Truffle Teriyaki 1x</div>
                    <div class="title">Ppn 10%</div>
                    <div class="title">Total :</div>
                  </div>
                  <div class="price">
                    <div class="price">Rp. 15.000</div>
                    <div class="price">Rp. 15.000</div>
                    <div class="price">Rp. 15.000</div>
                    <div class="price">Rp. 15.000</div>
                    <div class="price">Rp. 115.500</div>
                  </div>
                </div>
                <div class="method-payment">Payment : cash</div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn print" data-dismiss="modal">Print</button>
              <div>Or</div>
              <button type="button" class="btn email">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Aside-right',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    ...mapMutations(['setAddToCart']),
    showModalCheckout() {
      this.isShow = !this.isShow
    },
    setPlus() {
      console.log('plus')
    }
  },
  computed: {
    ...mapGetters(['getCart', 'countCart'])
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
  /* flex: 1.1; */
  width: 395px;
  box-sizing: border-box;
  background: #ffffff;
  position: relative;
  /* top: 5px; */
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

/* Checkout Modal */

.modal-body .main {
  /* border: 1px solid black; */
  padding: 0px 10px 0px 10px;
  background-color: #ffffff;
}

/* Modal Title */
.modal-body .title {
  /* border: 1px solid black; */
  /* width: 450px; */
  display: flex;
  justify-content: space-between;
}

.modal-body .title .checkout {
  /* border: 1px solid black; */
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}
.modal-body .title .receipt {
  /* border: 1px solid black; */

  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}

/* End Modal Title */

/* Cashier Name */
.modal-body .main .cashier-name {
  /* border: 1px solid black; */
  font-size: 13px;
  /* width: 100px; */
  height: 50px;
  font-weight: 600;
}
/* End Cashier Name */

/* Content */
.modal-body .main .content {
  /* border: 1px solid black; */
  /* width: 100px; */
  height: 192px;
  display: flex;
  margin-top: 20px;
  font-weight: 600;
}

/* Title */
.modal-body .main .content .title {
  /* border: 1px solid black; */
  background-color: #ffffff;
  /* width: 100px; */
  height: inherit;
  flex: 4;

  display: flex;
  flex-direction: column;
}

.modal-body .main .content .title .title {
  /* border: 1px solid black; */
  margin: 0px 0px 5px 0px;
}

.modal-body .main .content .title .title:last-child {
  /* border: 1px solid black; */
  margin: 15px 0px 5px 0px;
  display: flex;
  align-items: flex-end;
}
/* End Title */

/* Price */
.modal-body .main .content .price {
  /* border: 1px solid black; */
  background-color: #ffffff;
  /* width: 100px; */
  height: inherit;
  flex: 1;

  display: flex;
  flex-direction: column;
}

.modal-body .main .content .price .price {
  /* border: 1px solid black; */
  margin: 0px 0px 5px 0px;

  display: flex;
  align-items: flex-end;
}

.modal-body .main .content .price .price:last-child {
  margin-top: 15px;
}

/* End Price */
/* End Content */

.modal-body .main .total-price {
  /* border: 1px solid black; */
  /* width: 100px; */
  height: 50px;
  font-family: 'Poppins', sans-serif;
}
.modal-body .main .method-payment {
  /* border: 1px solid black; */
  /* width: 100px; */
  /* height: 50px; */
  margin-top: 5px;

  font-weight: 600;
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
}

@media screen and (max-width: 576px) {
  .aside-right {
    display: none;
  }
}
</style>
