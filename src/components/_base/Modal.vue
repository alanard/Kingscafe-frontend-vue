<template>
  <div>
    <!-- Add PRoduct -->
    <div class="overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{data.id ? 'Update Product' : 'Add New Product'}}</h5>
            <button type="button" class="close" @click="$emit('close-modal')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form>
              <div class="form-group">
                <!-- eslint-disable -->
                <input
                  type="text"
                  name="name"
                  class="form-control form-control-lg"
                  placeholder="Name"
                  v-model="data.name"
                />
              </div>
              <div class="form-group">
                <input type="file" class="form-control form-control-lg" @change="handleFile" />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="price"
                  class="form-control form-control-lg"
                  placeholder="Price"
                  v-model="data.price"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="idCategory"
                  class="form-control form-control-lg"
                  placeholder="idCategory"
                  v-model="data.idCategory"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="status"
                  class="form-control form-control-lg"
                  placeholder="Status"
                  v-model="data.status"
                />
              </div>
            </form>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-info btn-block btn-lg"
                @click="$emit('fire-event')"
              >{{data.id ? 'Update Product' : 'Add Product'}}</button>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-info btn-block btn-lg"
                @click="$emit('close-modal')"
              >cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  // props juga bisa melempar function
  // Jadi tidak perlu menggunakan emit
  props: {
    data: {
      type: Object
    },
    closeModal: {
      type: Function
    }
  },
  methods: {
    handleFile (e) {
      /* eslint-disable */
      this.data.image = e.target.files[0]
    }
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
