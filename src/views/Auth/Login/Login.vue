<template>
  <div>
    <div class="brand">
      <span class="title">King'S Cafe</span>
      <span class="description">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Officia molestias repellendus
        nesciunt voluptate, assumenda vitae similique doloribus animi cum error.
      </span>
    </div>
    <!-- Add User -->
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
            <div type="submit" class="btn register btn-info btn-lg" @click="linkRegister">Register</div>
          </div>
        </div>
      </div>
    </div>
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
      this.login(data).then(() => {
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
  top: 180px;
  left: 130px;
  width: 480px;
  height: 250px;
}
.brand .title {
  /* border: 1px solid black; */
  font-family: 'Pacifico', cursive;
  display: block;
  font-size: 80px;
  color: rgb(73, 65, 65);
}
.brand .description {
  position: relative;
  top: 15px;
  font-size: 20px;
  font-weight: bolder;
  font-family: 'Lato', sans-serif;
  color: rgb(73, 65, 65);
}
.modal-dialog {
  /* border: 1px solid black; */
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
.btn.register {
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
  .btn.register {
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
