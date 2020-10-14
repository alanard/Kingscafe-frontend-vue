<template>
  <!-- Table -->
  <div>
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
            <tr
              class="text-center"
              v-for="product in products"
              :key="product.id"
            >
              <td>{{ product.id }}</td>
              <td>
                <img :src="product.image" alt />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.idCategory }}</td>
              <td>{{ product.nameCategory }}</td>
              <td>{{ product.status }}</td>
              <td>
                <!-- Ini Show Modal edit -->
                <!-- Emit membutuhkan parameter untuk menampilkan data yang mau di update -->
                <button
                  class="text-success"
                  @click="$emit('event-update', product)"
                >
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
        <!-- Alert -->
        <div
          class="alert alert-danger"
          role="alert"
          v-show="deleteProductAlert"
        >
          Data has ben deleted!!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
// import ErrHandling from './errHandling'
export default {
  name: 'Card',
  data () {
    return {
      deleteProductAlert: false
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    deleteProduct (id) {
      axios
        .delete(`http://localhost:4100/api/v1/products/${id}`)
        .then(() => {
          this.$swal({
            title: 'Are you sure to delete?',
            text: "You can't revert your action",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete it!',
            cancelButtonText: 'No, Keep it!',
            showCloseButton: true,
            showLoaderOnConfirm: true
          }).then((result) => {
            if (result.value) {
              this.$swal(
                'Deleted',
                'You successfully deleted this product',
                'success'
              )
              this.getProducts()
            } else {
              this.$swal('Cancelled', 'Your file is still intact', 'info')
            }
          })
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  computed: mapGetters({
    products: 'products'
  }),
  mounted () {
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
.alert {
  width: 100%;
  font-size: 18px;
  font-weight: 500;
}
</style>
