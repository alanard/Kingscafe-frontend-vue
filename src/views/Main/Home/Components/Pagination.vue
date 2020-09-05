<template>
  <div>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link">1</a>
        </li>
        <li class="page-item" @click="page2">
          <a class="page-link">2</a>
        </li>
        <li class="page-item">
          <a class="page-link">3</a>
        </li>
        <li class="page-item">
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'pagination',
  methods: {
    ...mapActions(['pagination']),
    page2(e) {
      e.preventDefault()
      this.pagination()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters({ products: 'products' })
  },
  mounted() {
    this.pagination()
  }
}
</script>

<style scoped>
.container {
  margin-left: 50px;
  margin-top: 20px;
  padding: 0;
}
</style>
