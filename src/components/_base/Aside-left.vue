<template>
  <div class="aside-left">
    <div class="fork-image" @click="linkHome"></div>
    <div class="clipboard-image" @click="linkProduct"></div>
    <div class="add-image"></div>
    <div class="history-image" @click="linkHistory"></div>
    <div class="logout-image" @click="linkLogout"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Aside-left',
  methods: {
    ...mapActions(['logout']),
    linkLogout () {
      this.$swal({
        title: 'Are you sure to Logout?',
        text: "You can't revert your action",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((res) => {
        if (res.value) {
          this.$swal('Logout!', 'You successfully logout', 'success')
          this.logout()
          // this.$router.push({ path: '/' })
        } else {
          this.$swal('Cancelled', 'I hope you enjoy', 'info')
        }
      })
    },
    linkHistory () {
      this.$router.push('history')
    },
    linkHome () {
      this.$router.push('home')
    },
    linkProduct () {
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
  box-shadow: 10px 6px 10px rgba(0, 0, 0, 0.25);
}

.aside-left .fork-image {
  /* border: 1px solid black; */
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/fork.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 25px;
  cursor: pointer;
}

.aside-left .clipboard-image {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/clipboard.png');
  position: relative;
  background-size: cover;
  width: 30px;
  height: 30px;
  top: 50px;
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
  top: 80px;
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
  top: 110px;
  left: 27px;
  cursor: pointer;
}

.aside-left .logout-image {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/logo-img/logout.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 32px;
  height: 40px;
  top: 140px;
  left: 25px;
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
  .aside-left {
    /* border: 1px solid black; */
    flex: 0.6;
    box-sizing: border-box;
    /* display: flex; */
    /* flex-wrap: nowrap; */
    background: #ffffff;
    box-shadow: 10px 6px 10px rgba(0, 0, 0, 0.25);
  }
  .aside-left .fork-image {
    /* border: 1px solid black; */
    width: 30px;
    height: 30px;
    top: 20px;
    left: 14px;
    cursor: pointer;
  }

  .aside-left .clipboard-image {
    width: 30px;
    height: 30px;
    top: 50px;
    left: 14px;
    cursor: pointer;
  }

  .aside-left .add-image {
    width: 30px;
    height: 30px;
    top: 80px;
    left: 14px;
    cursor: pointer;
  }

  .aside-left .history-image {
    width: 32px;
    height: 32px;
    top: 110px;
    left: 17px;
    cursor: pointer;
  }

  .aside-left .logout-image {
    width: 32px;
    height: 40px;
    top: 140px;
    left: 14px;
    cursor: pointer;
  }
}
</style>
