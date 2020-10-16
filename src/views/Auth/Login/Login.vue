<template>
  <div>
    <div class="brand">
      <div class="img-brand"></div>
      <span class="title">King'S Cafe</span>
      <span class="description">
        a contemporary cafe that provides many menu variants, ranging from food,
        drinks, desserts, cakes, etc. And we provide and invite every street
        musician to contribute and provide entertainment every weekend
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
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="Password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  v-model="password"
                  required
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-info btn-block btn-lg"
                  @click="handleLogin"
                >
                  <span v-if="isLoading == false">Login</span>
                <Circle2 class="loading" v-if="isLoading"></Circle2>
                </button>
              </div>
            </form>
          </div>
          <div class="line"></div>
          <div class="register-text">Do not have an account?</div>
          <div class="form-group">
            <div
              type="submit"
              class="btn reg btn-info btn-lg"
              @click="linkRegister"
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="img-brand2"></div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import mixins from '../../../components/mixins/Loading'
export default {
  name: 'Login',
  mixins: [mixins],
  data () {
    return {
      email: '',
      password: '',
      alertRegister: false
      // isLoading: true
    }
  },
  methods: {
    ...mapActions(['login', 'getProducts']),
    handleLogin (e) {
      this.isLoading = true
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then((res) => {
          this.isLoading = false
          this.getProducts()
          this.$router.push({ path: '/home' })
        })
        .catch((err) => {
          this.isLoading = false
          if (err.response.status === 403 || err.response.status === 401) {
            this.$swal({
              title: 'Email Or Password Wrong',
              text: "If you don't have an account, please Register first",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Register',
              cancelButtonText: 'No, Keep Login',
              showCloseButton: true,
              showLoaderOnConfirm: true
            }).then((result) => {
              if (result.value) {
                this.$router.push({ name: 'Register' })
              } else {
                this.$router.push({ name: 'Login' })
              }
            })
          }
        })
    },
    linkRegister () {
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
  margin-bottom: 40px;
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
    /* border: 1px solid black; */
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    /* overflow-x: hidden; */
  }
  .brand .img-brand {
    background-image: url('https://raw.githubusercontent.com/alanard/Kingscafe-frontend-vue/master/src/assets/kingscafe-logos.PNG');
    width: 250px;
    height: 115px;
    position: relative;
    top: 7px;
    left: 50px;
    right: 0px;
    transform: rotate(0deg);
    z-index: -100;
  }
  .brand .title {
    display: none;
  }
  .brand .description {
    /* border: 1px solid black; */
    display: block;
    width: 300px;
    text-align: center;
    top: 15px;
    font-size: 14px;
    margin: auto;
  }
  .overlay {
    /* border: 1px solid black; */
    margin: 280px auto;
  }
  .modal-dialog {
    width: 320px;
    margin: 140px auto;
    /* Depan untuk mengatur arah bayangan */
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  }
  .modal-content {
    /* border: 1px solid black; */
  }
  .modal-body {
    /* border: 1px solid black; */
  }
  .form-group {
    /* border: 1px solid black; */
  }
  .form-control {
    /* border: 1px solid black; */
    height: 45px
  }
  .btn {
    height: 45px;
    font-size: 19px;
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
}
</style>
