<template>
  <div class="aside-right">
    <div class="img-sidecart"></div>
    <span class="slogan-cart">Your cart is empty</span>
    <span class="message-cart">Please add some items from the menu</span>
  </div>
</template>

<script>
export default {
  name: 'Aside-left'
}
</script>

<style scoped>
.aside-right {
  border: 1px solid #e7dcdc;
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
