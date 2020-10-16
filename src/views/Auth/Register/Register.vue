<template>
  <div>
    <div class="brand">
      <span class="title">King'S Cafe</span>
      <div class="image"></div>
      <span class="description">
        a contemporary cafe that provides many menu variants, ranging from food,
        drinks, desserts, cakes, etc. And we provide and invite every street
        musician to contribute and provide entertainment every weekend
      </span>
    </div>
    <!-- Form Register -->
    <div class="overlay" @submit.prevent="submit">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-4">
            <form>
              <!-- Firstname -->
              <div class="form-group">
                <input
                  type="text"
                  v-model.trim="$v.firstName.$model"
                  placeholder="First Name"
                  class="form-control form-control-lg"
                  :class="{
                    'is-invalid': $v.firstName.$error,
                    'is-valid': !$v.firstName.$invalid
                  }"
                />
                <div class="valid-feedback">Your First Name Valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.firstName.required"
                    >First Name is required</span
                  >
                  <span v-if="!$v.firstName.minLength"
                    >First Name must have at least
                    {{ $v.firstName.$params.minLength.min }} letters</span
                  >
                  <span v-if="!$v.firstName.maxLength"
                    >First Name must have at most
                    {{ $v.firstName.$params.maxLength.max }} letters</span
                  >
                </div>
              </div>
              <!-- Lastname -->
              <div class="form-group">
                <input
                  type="text"
                  v-model.trim="$v.lastName.$model"
                  placeholder="Last Name"
                  class="form-control form-control-lg"
                  :class="{
                    'is-invalid': $v.lastName.$error,
                    'is-valid': !$v.lastName.$invalid
                  }"
                />
                <div class="valid-feedback">Your Last Name Valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.lastName.required"
                    >Last Name is required</span
                  >
                  <span v-if="!$v.lastName.minLength"
                    >Last Name must have at least
                    {{ $v.lastName.$params.minLength.min }} letters</span
                  >
                  <span v-if="!$v.lastName.maxLength"
                    >Last Name must have at most
                    {{ $v.lastName.$params.maxLength }} letters</span
                  >
                </div>
              </div>
              <!-- Email -->
              <div class="form-group">
                <input
                  type="text"
                  v-model.trim="$v.email.$model"
                  class="form-control form-control-lg"
                  placeholder="Your email"
                  :class="{
                    'is-invalid': $v.email.$error,
                    'is-valid': !$v.email.$invalid
                  }"
                />
                <div class="valid-feedback">Your Email Valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required</span>
                  <span v-if="!$v.email.minLength"
                    >Email must have at least
                    {{ $v.email.$params.minLength.min }} letters</span
                  >
                </div>
              </div>
              <!-- Password -->
              <div class="form-group">
                <input
                  type="password"
                  v-model.trim="$v.password.$model"
                  class="form-control form-control-lg"
                  placeholder="password"
                  :class="{
                    'is-invalid': $v.password.$error,
                    'is-valid': !$v.password.$invalid
                  }"
                />
                <div class="valid-feedback">Your Password Valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.password.required">Password is required</span>
                  <span v-if="!$v.password.minLength"
                    >{{ $v.password.$params.minLength.min }} Characters
                    minimum</span
                  >
                  <span v-if="!$v.password.maxLength"
                    >Password must have at most
                    {{ $v.password.$params.maxLength }} letters</span
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="login">
                  Do you have an account?
                  <span @click="linkLogin">Login</span>
                </div>
                <!-- Button Register -->
                <div class="form-group">
                  <button
                    class="btn btn-info btn-block btn-lg"
                    type="submit"
                    :disabled="
                      !$v.firstName.minLength ||
                      !$v.lastName.minLength ||
                      !$v.email.minLength ||
                      !$v.password.minLength
                    "
                  >
                  <span v-if="isLoading == false">Register</span>
                  <Circle2 class="loading" v-if="isLoading"></Circle2>
                  </button>
                </div>
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
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import mixins from '../../../components/mixins/Loading'
export default {
  name: 'Register',
  mixins: [mixins],
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      alertRegister: false,
      submitStatus: ''
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15)
    },
    lastName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(24)
    },
    email: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    }
  },
  methods: {
    ...mapActions(['register']),
    linkLogin () {
      this.$router.push({ path: '/login' })
    },
    submit () {
      this.isLoading = true
      console.log('submit!')
      this.$v.$touch()
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      this.register(data)
        .then((res) => {
          this.isLoading = false
          this.$swal({
            title: 'Successfully registered :))',
            text: 'Please Login',
            icon: 'success'
          })
          this.$router.push('login')
          console.log(res)
        })
        .catch((err) => {
          if (err.response.status === 403) {
            this.$swal({
              title: 'Login Please!',
              text: 'You email has already registered!!!',
              type: 'warning',
              confirmButtonText: 'Login',
              showCloseButton: true
            }).then((result) => {
              if (result.value) {
                this.$router.push({ name: 'Login' })
              } else {
                this.$router.push({ name: 'Register' })
              }
            })
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
  .brand {
    /* border: 1px solid black; */
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 250px;
  }
  .brand .title {
    /* border: 1px solid black;
    font-family: 'Pacifico', cursive;
    display: block;
    text-align: center;
    font-size: 40px;
    color: rgb(73, 65, 65); */
    display: none;
  }
  .brand .image {
    background-image: url('https://raw.githubusercontent.com/alanard/Kingscafe-frontend-vue/master/src/assets/kingscafe-logos.PNG');
    position: relative;
    top: 10px;
    left: 50px;
    width: 370px;
    height: 170px;
    background-size: cover;
    margin-left: 50%;
    transform: translateX(-70%);
  }
  .brand .description {
    /* border: 1px solid black; */
    display: block;
    width: 450px;
    margin: auto;
    text-align: center;
    top: 20px;
    font-size: 18px;
    color: rgb(73, 65, 65);
  }
  .modal-dialog {
    /* border: 1px solid black; */
    width: 450px;
    margin: 350px auto;
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

  /* Display none */
  .img-brand2 {
    display: none
  }
}
</style>
