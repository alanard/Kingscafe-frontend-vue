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
    <!-- Form Register -->
    <div class="overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-4">
            <form class="was-validated">
              <div class="form-group">
                <input
                  type="text"
                  name="firstName"
                  class="form-control form-control-lg"
                  placeholder="First Name"
                  required
                  v-model="firstName"
                />
                <div class="valid-feedback">Look Good</div>
                <div class="invalid-feedback">e.g. Ansell</div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="lastName"
                  class="form-control form-control-lg"
                  placeholder="Last Name"
                  v-model="lastName"
                  required
                />
                <div class="valid-feedback">Look Good</div>
                <div class="invalid-feedback">e.g. Jenkins</div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="email"
                  class="form-control form-control-lg"
                  placeholder="Email"
                  v-model="email"
                  required
                />
                <div class="valid-feedback">Look Good</div>
                <div class="invalid-feedback">e.g. jenkins24@gmail.com</div>
              </div>

              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  v-model="password"
                  required
                />
                <div class="valid-feedback">Look Good</div>
                <div class="invalid-feedback">Password Must Be Min 6 Char</div>
              </div>

              <div class="form-group">
                <div class="login">
                  Do you have an account?
                  <span @click="linkLogin">Login</span>
                </div>
                <div
                  type="submit"
                  class="btn btn-info btn-block btn-lg"
                  @click="handleRegister"
                >Register</div>
              </div>
            </form>
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
  name: 'register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  errhandling: {
    // errorMsg: this.err.response.status === 403
  },
  methods: {
    ...mapActions(['register']),
    linkLogin() {
      this.$router.push({ path: '/login' })
    },
    handleRegister(e) {
      e.preventDefault()
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      this.register(data)
        .then((res) => {
          console.log('user berhasil ditambahkan')
          this.$router.push('login')
          console.log(res)
        })
        .catch((err) => {
          if (err.response.status === 403) {
            alert('Email Already Redistered, Please Login!')
          } else if (err.response.result === '') {
            alert('Data Harus diisi')
          }
        })
    }
  }
}
</script>

<style scoped>
.brand {
  /* border: 1px solid black; */
  display: inline-block;
  position: absolute;
  top: 60px;
  left: 600px;
  width: 480px;
  height: 250px;
  width: 590px;
  height: 250px;
  z-index: 100;
}
.brand .title {
  /* border: 1px solid black; */
  font-family: 'Pacifico', cursive;
  display: block;
  font-size: 90px;
  color: rgb(73, 65, 65);

  text-shadow: 0px 8px 10px rgb(104, 88, 88);
}
.brand .description {
  position: relative;
  top: 15px;
  font-size: 20px;
  font-weight: bolder;
  font-family: 'Lato', sans-serif;
  /* display: block; */
  /* text-align: right; */
  color: rgb(73, 65, 65);

  text-shadow: 0px 5px 5px rgb(167, 146, 146);
}
.modal-dialog {
  /* border: 1px solid black; */
  margin-top: 100px;
  margin-left: -100px;
  width: 450px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
}
.line {
  border: 1px solid rgb(111, 203, 226);
  width: 80%;
  margin: auto;
}
.btn.register {
  margin-left: 50%;
  margin-top: 25px;
  width: 200px;
  transform: translateX(-50%);
  background-color: rgb(42, 44, 42);
}

/* Overlay */
.overlay {
  /* border: 1px solid black; */
  position: absolute;
  width: 600px;
  left: 200px;
}
.img-brand2 {
  background-image: url('https://raw.githubusercontent.com/alanard/web-slicing-kingscafe/master/assets/img/landingPage/content/backgroundcoffevektor.png');
  background-size: cover;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 210px;
  left: 950px;
}

.login {
  margin: 10px 140px 10px 5px;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  color: gray;
}

.login span {
  margin-left: 5px;
  text-align: center;
  /* margin: 25px 35px 0px 35px; */
  font-weight: bold;
  color: rgb(67, 117, 224);
  cursor: pointer;
}

@media screen and (max-width: 576px) {
  .container {
    width: 360px;
  }
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
    padding-left: 100px;
    left: 20px;
    font-size: 25px;
    color: rgb(73, 65, 65);
  }
  .brand .description {
    border: 1px solid black;
    display: block;
    width: 350px;
    text-align: center;
    top: 15px;
    font-size: 14px;
    font-weight: bolder;
    font-family: 'Lato', sans-serif;
    color: rgb(73, 65, 65);
  }
  .modal-dialog {
    /* border: 1px solid black; */
    width: 300px;
    margin-left: 30px;
    margin-top: 140px;
    margin-right: 150px;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  }
  .line {
    border: 1px solid rgb(111, 203, 226);
    width: 80%;
    margin: auto;
  }
  .btn.register {
    margin-left: 50%;
    margin-top: 25px;
    width: 200px;
    transform: translateX(-50%);
    background-color: rgb(42, 44, 42);
  }

  /* Overlay */
  .overlay {
    /* border: 1px solid black; */
    position: absolute;
    width: 600px;
    left: 0px;
  }
}
</style>
