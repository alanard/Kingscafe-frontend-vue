<template>
  <div class="nav-content">
    <div class="opacity">
      <!-- Nav Link -->
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" @click="linkLogin">Login/Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="linkHome">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <!-- End Nav Link -->

      <!-- Brand -->
      <div class="wellcome">Wellcome to</div>
      <div class="brand-title">King'S Cafe</div>
      <div class="brand-title-item">the number one selling cafe in the world</div>
      <!-- End Brand -->
      <!-- <button class="btn-brand">Find A Table</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  methods: {
    linkLogin() {
      this.$router.push('login')
    },
    linkHome() {
      this.$router.push('home')
    }
  }
}
</script>

<style scoped>
.nav-content {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/backgroundnav.jpg');
  background-size: cover;
  width: 100%;
  height: 650px;
  border: 1px solid black;
}

.opacity {
  width: 100%;
  height: 650px;
  background: rgba(0, 0, 0, 0.7);
}

.nav.justify-content-end {
  /* border: 1px solid rgb(221, 165, 165); */
}

.nav .nav-item {
  border: 1px solid black;
  font-family: 'Poppins', sans-serif;
  margin-left: 40px;
  color: rgb(189, 176, 176);
}

.nav .nav-item .nav-link {
  color: white;
  opacity: 0.8;
  cursor: pointer;
}

.nav .nav-item .nav-link:hover {
  color: rgb(175, 162, 162);
}

.nav-content .wellcome {
  font-family: 'Pacifico', cursive;
  /* border: 1px solid black; */
  font-size: 40px;
  margin-top: 170px;
  color: rgb(189, 185, 185);
  /* text-align: center; */
  padding-left: 100px;
}

.nav-content .brand-title {
  font-family: 'Pacifico', cursive;
  /* border: 1px solid black; */
  font-size: 100px;
  color: white;
  /* text-align: center; */
  padding-left: 50px;
  text-shadow: 100px 100px 100px rgba(0, 0, 0, 0.25);
}

.nav-content .brand-title-item {
  font-family: 'Lato', sans-serif;
  color: rgb(211, 196, 176);
  font-size: 30px;
  padding-left: 50px;
  margin-top: 10px;
}

/* Settingan untuk tablet */
@media screen and (max-width: 768px) {
}

/* Setingan untuk hp */
@media screen and (max-width: 576px) {
  .nav.justify-content-end {
    border: 1px solid rgb(221, 165, 165);
  }

  .nav .nav-item {
    border: 1px solid black;
    font-size: 11px;
    margin: 0 auto;
    padding: 0;
  }
  .nav .nav-item .nav-link {
    margin: 0;
    padding: 5px;
  }
  .nav-content {
    background-size: cover;
    overflow: hidden;
    width: 360px;
    height: 650px;
  }
  .nav-content .wellcome {
    font-size: 30px;
    margin-top: 125px;
    padding-left: 80px;
  }

  .nav-content .brand-title {
    font-size: 55px;
    /* border: 1px solid black; */
    color: white;
    display: inline-block;
    padding-top: 40px;
  }

  .nav-content .brand-title-item {
    color: rgb(211, 196, 176);
    font-size: 17px;
    padding-left: 50px;
    margin-top: 30px;
  }
}
</style>
