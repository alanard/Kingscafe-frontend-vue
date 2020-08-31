<template>
  <!-- Table -->
  <div class="row">
    <div class="col-lg-12">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="text-center bg-info text-light">
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>ID Category</th>
            <th>Name Category</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="product in products" :key="product.id">
            <td>{{product.id}}</td>
            <td>
              <img :src="product.image" alt />
            </td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.idCategory}}</td>
            <td>{{product.nameCategory}}</td>
            <td>{{product.status}}</td>
            <td>
              <button class="text-success" @click="showEditModal">
                <i class="fas fa-edit"></i>
              </button>
            </td>
            <td>
              <button class="text-success" @click="deleteProduct(product.id)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Update Product -->
    <div class="overlay" v-if="isShow">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Product</h5>
            <button type="button" class="close" @click="showEditModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="editProduct">
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
                  type="text"
                  name="img"
                  class="form-control form-control-lg"
                  placeholder="image"
                  v-model="image"
                />
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
                <button type="submit" class="btn btn-info btn-block btn-lg">Edit Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import ErrHandling from './errHandling'
export default {
  name: 'Card',
  mixins: [ErrHandling],
  data() {
    return {
      isShow: false,
      errMesage: 'false'
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    showEditModal() {
      this.isShow = !this.isShow
    },
    deleteProduct(id) {
      axios
        .delete(`http://localhost:4100/api/v1/products/${id}`)
        .then((response) => {
          this.message = alert('Data has ben deleted')
          // this.items = this.items.filter((val) => val.id !== id)
          this.getProducts()
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  computed: mapGetters({
    products: 'products'
  }),
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 80px;
}

.text-success {
  border: none;
  background: inherit;
}
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
