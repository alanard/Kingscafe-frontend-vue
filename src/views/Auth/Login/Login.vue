<template>
  <div>
    <div class="brand">
      <div class="img-brand"></div>
      <span class="title">King'S Cafe</span>
      <span class="description">
        a contemporary cafe that provides many menu variants, ranging from food, drinks, desserts, cakes, etc.
        And we provide and invite every street musician to contribute and provide entertainment every weekend
      </span>
    </div>
    <!-- Form Login -->
    <div class="overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-4">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control form-control-lg"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="Password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-info btn-block btn-lg"
                  @click="handleLogin"
                >Login</button>
              </div>
            </form>
          </div>
          <div class="line"></div>
          <div class="register-text">Do not have an account?</div>
          <div class="form-group">
            <div type="submit" class="btn reg btn-info btn-lg" @click="linkRegister">Register</div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-brand2"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login', 'getProducts']),
    handleLogin(e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data).then((res) => {
        this.getProducts()
        this.$router.push({ path: '/home' })
      })
    },
    linkRegister() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style scoped>
.brand {
  /* border: 1px solid black; */
  display: inline-block;
  position: absolute;
  top: 160px;
  left: 150px;
  width: 590px;
  height: 250px;
}
.img-brand {
  /* border: 1px solid black; */
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/pngwing.com%20(6).png');
  width: 230px;
  height: 230px;
  background-size: cover;
  position: absolute;
  top: -135px;
  left: -100px;
  right: 0px;
  transform: rotate(-20deg);
  z-index: -100;
}
.brand .title {
  /* border: 1px solid black; */
  font-family: 'Pacifico', cursive;
  text-shadow: khaki;
  display: block;
  font-size: 110px;
  color: rgb(73, 65, 65);
  z-index: 100;

  text-shadow: 0px 10px 10px rgb(104, 88, 88);
}
.brand .description {
  position: relative;
  top: 15px;
  font-size: 22px;
  font-weight: bolder;
  font-family: 'Lato', sans-serif;
  color: rgb(73, 65, 65);
}
.modal-dialog {
  /* border: 1px solid black; */
  margin-top: 140px;
  margin-right: 80px;
  width: 460px;
  /* Depan untuk mengatur arah bayangan */
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
}
.line {
  border: 1px solid rgb(111, 203, 226);
  width: 80%;
  margin: auto;
}
.btn.reg {
  margin-left: 50%;
  margin-top: 20px;
  width: 180px;
  height: 40px;
  transform: translateX(-50%);
  padding-top: 6px;
  background: #f24f8a;
  font-size: 16px;
}

div .register-text {
  /* border: 1px solid black; */
  text-align: center;
  margin: 25px 35px 0px 35px;
  font-weight: bold;
  color: gray;
}
/* Setingan hp */
@media screen and (max-width: 576px) {
  .brand {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 480px;
    height: 250px;
  }
  .brand .title {
    border: 1px solid black;
    font-family: 'Pacifico', cursive;
    display: block;
    padding-left: 70px;
    left: 20px;
    font-size: 25px;
    color: rgb(73, 65, 65);
  }
  .brand .description {
    border: 1px solid black;
    display: block;
    width: 280px;
    text-align: center;
    top: 15px;
    font-size: 12px;
    font-weight: bolder;
    font-family: 'Lato', sans-serif;
    color: rgb(73, 65, 65);
  }
  .modal-dialog {
    width: 260px;
    margin-top: 140px;
    margin-right: 150px;
    /* Depan untuk mengatur arah bayangan */
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  }
  .line {
    border: 1px solid rgb(111, 203, 226);
    width: 80%;
    margin: auto;
  }
  .btn {
    margin-left: 50%;
    margin-top: 20px;
    width: 200px;
    transform: translateX(-50%);
    background-color: rgb(42, 44, 42);
  }

  div .register-text {
    /* border: 1px solid black; */
    margin: 25px 35px 0px 35px;
    font-weight: bold;
    color: gray;
  }
}
</style>
