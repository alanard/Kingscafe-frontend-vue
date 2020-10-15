<template>
  <div>
    <Navbar />
    <div class="main-content">
      <AsideLeft class="aside-left" />
      <div class="container">
        <div class="row mt-3">
          <div class="col-lg-6">
            <h3 class="text-info">Add Product</h3>
          </div>
          <div class="col-lg-6">
            <button class="btn btn-info float-right" @click="toggleModal">
              <i class="fas fa-plus-circle"></i>&nbsp;&nbsp;Add New Product
            </button>
          </div>
        </div>
        <hr class="bg-info" />

        <!-- Table Product -->
        <Table :products="products" @event-update="setUpdate" />
        <!-- Modal Add Data -->
      </div>
      <!-- Ada Pengkondisian dimana jika modal menerima id maka modal tersebut akan digunakan di update -->
      <!-- Tapi jika modal tidak mendapat id, maka akan digunakan untuk add data, karena add data tidak membutuhkan id -->
      <Modal
        v-show="modalActive"
        :data="dataModal"
        @close-modal="toggleModal"
        @fire-event="handleEventModal"
        :Loading="isLoading"
      />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Table from './components/Table'
import AsideLeft from '../../../components/_base/Aside-left'
import Modal from '../../../components/_base/Modal'
import { mapActions, mapGetters } from 'vuex'
import mixins from '../../../components/mixins/Loading'
export default {
  name: 'Product',
  mixins: [mixins],
  components: {
    Navbar,
    Table,
    AsideLeft,
    Modal
  },
  data: () => ({
    modalActive: false,
    modalAlert: false,
    dataModal: {
      id: null,
      name: '',
      price: '',
      idCategory: '',
      status: '',
      image: null
    }
  }),
  methods: {
    ...mapActions(['getProducts', 'postProducts', 'patchProduct']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
        this.isLoading = false
      }
    },
    handleEventModal () {
      this.isLoading = false
      this.dataModal.id ? this.updateProduct() : this.addProduct()
    },
    updateProduct () {
      this.isLoading = true
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('idCategory', this.dataModal.idCategory)
      data.append('status', this.dataModal.status)
      const container = { id: this.dataModal.id, data: data }
      this.patchProduct(container)
        .then(() => {
          this.clearModal()
          this.getProducts()
          console.log('update')
          this.modalActive = false
          this.isLoading = false
          // Alert
          this.$swal('Success', 'Data Successfuly updated', 'OK')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addProduct () {
      this.isLoading = true
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('idCategory', this.dataModal.idCategory)
      data.append('status', this.dataModal.status)
      this.postProducts(data)
        .then(() => {
          this.clearModal()
          this.modalActive = false
          this.isLoading = false
          // Alert
          this.$swal('Success', 'Data Successfuly added', 'OK')
          this.getProducts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setUpdate (data) {
      this.modalActive = true
      this.dataModal.id = data.id
      this.dataModal.name = data.name
      this.dataModal.price = data.price
      this.dataModal.idCategory = data.idCategory
      this.dataModal.status = data.status
      this.dataModal.image = data.image
    },
    clearModal () {
      this.isLoading = false
      this.dataModal.id = null
      this.dataModal.name = ''
      this.dataModal.price = ''
      this.dataModal.idCategory = ''
      this.dataModal.status = ''
      this.dataModal.image = null
    }
  },
  computed: {
    ...mapGetters({
      products: 'products'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
}
.aside-left {
  flex: 0.4;
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
  margin: 10px 20px 0px 20px;
  font-size: 18px;
  font-weight: 500;
}
</style>
