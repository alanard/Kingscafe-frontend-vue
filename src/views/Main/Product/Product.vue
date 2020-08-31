<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-6">
          <h3 class="text-info">Add Product</h3>
        </div>
        <div class="col-lg-6">
          <button class="btn btn-info float-right" @click="showAddModal">
            <i class="fas fa-plus-circle"></i>&nbsp;&nbsp;Add New Product
          </button>
        </div>
      </div>
      <hr class="bg-info" />
      <!-- box error message -->
      <div class="alert alert-danger" v-if="errorMsg">Error Message</div>
      <div class="alert alert-success" v-if="successMsg">Success Message</div>
      <!-- Table Product -->
      <Table :products="products" />
    </div>
    <!-- Add User -->
    <div class="overlay" v-if="isShow">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Product</h5>
            <button type="button" class="close" @click="showAddModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="addProduct" enctype="multipart/form-data">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control form-control-lg"
                  placeholder="Name"
                  v-model="name"
                />
              </div>
              <div class="form-group">
                <input
                  type="file"
                  class="form-control form-control-lg"
                  @change="selectFile"
                  ref="image"
                />
              </div>
              <div v-if="message" :class="`message ${error ? 'is-danger' : 'is-succes'}`">
                <div class="message-body">{{message}}</div>
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="price"
                  class="form-control form-control-lg"
                  placeholder="Price"
                  v-model="price"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="idCategory"
                  class="form-control form-control-lg"
                  placeholder="idCategory"
                  v-model="idCategory"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="status"
                  class="form-control form-control-lg"
                  placeholder="Status"
                  v-model="status"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-info btn-block btn-lg">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Table from './components/Table'
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  components: {
    Navbar,
    Table
  },
  data() {
    return {
      // products: [],
      isShow: false,
      name: '',
      image: '',
      price: '',
      idCategory: '',
      status: '',
      file: '',
      message: '',
      err: false
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    selectFile() {
      this.file = this.$refs.image.files[0]
      this.message = ''
      this.err = false
    },
    addProduct() {
      const formData = new FormData()
      formData.append('image', this.file)
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('idCategory', this.idCategory)
      formData.append('status', this.status)
      axios
        .post('http://localhost:4100/api/v1/products', formData)
        .then((res) => {
          alert('Data Success added!!!')
          this.getProducts()
        })
        .catch((err) => {
          console.log(err)
        })
      this.isShow = false
    },
    showAddModal() {
      this.isShow = !this.isShow
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
