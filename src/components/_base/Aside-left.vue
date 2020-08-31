<template>
  <div class="aside-left">
    <div class="fork-image" @click="linkHome"></div>
    <div class="clipboard-image" @click="linkProduct"></div>
    <div class="add-image"></div>
    <div class="history-image" @click="linkHistory"></div>
  </div>
</template>

<script>
export default {
  name: 'Aside-left',
  methods: {
    linkHistory() {
      this.$router.push('history')
    },
    linkHome() {
      this.$router.push('home')
    },
    linkProduct() {
      this.$router.push('product')
    }
  }
}
</script>

<style scoped>
.aside-left {
  /* border: 1px solid black; */
  flex: 0.3;
  box-sizing: border-box;
  /* display: flex; */
  /* flex-wrap: nowrap; */
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.aside-left .fork-image {
  /* border: 1px solid black; */
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/fork.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 30px;
  height: 30px;
  top: 23px;
  left: 25px;
  cursor: pointer;
}

.aside-left .clipboard-image {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/clipboard.png');
  position: relative;
  background-size: cover;
  width: 30px;
  height: 30px;
  top: 80px;
  left: 25px;
  cursor: pointer;
}

.aside-left .add-image {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/add.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 30px;
  height: 30px;
  top: 150px;
  left: 25px;
  cursor: pointer;
}

.aside-left .history-image {
  background-image: url('https://cdn.onlinewebfonts.com/svg/img_391456.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 32px;
  height: 32px;
  top: 200px;
  left: 27px;
  cursor: pointer;
}

/* Settingan untuk tablet */
@media screen and (max-width: 768px) {
  .aside-left {
    flex: 0.5;
  }
  .aside-left .fork-image {
    /* border: 1px solid black; */
    position: relative;
    width: 35px;
    height: 35px;
    top: 23px;
    left: 15px;
  }

  .aside-left .clipboard-image {
    width: 35px;
    height: 35px;
    top: 80px;
    left: 15px;
  }

  .aside-left .add-image {
    width: 35px;
    height: 35px;
    top: 150px;
    left: 15px;
  }
  .aside-left .history-image {
    width: 35px;
    height: 35px;
    top: 210px;
    left: 18px;
  }
}

/* Setingan untuk hp */
@media screen and (max-width: 576px) {
  .aside-left .fork-image {
    /* border: 1px solid black; */
    background-size: cover;
    position: relative;
    width: 25px;
    height: 25px;
    top: 18px;
    left: 12px;
  }

  .aside-left .clipboard-image {
    background-size: cover;
    width: 25px;
    height: 25px;
    top: 60px;
    left: 12px;
  }

  .aside-left .add-image {
    background-size: cover;
    position: relative;
    width: 25px;
    height: 25px;
    top: 100px;
    left: 12px;
  }
  .aside-left .history-image {
    background-size: cover;
    position: relative;
    width: 25px;
    height: 25px;
    top: 130px;
    left: 15px;
  }
}
</style>
