<template>
  <div>
    <nav aria-label="..." class="page">
      <ul class="pagination">
        <li class="page-item">
          <div class="page-link">
            Page {{ data.currentPage }} of {{ data.lastPage }}
          </div>
        </li>
        <li class="page-item" v-show="data.currentPage > 1">
          <div class="page-link" @click="setPagination(1)">&laquo;</div>
        </li>
        <li class="page-item" v-show="data.currentPage > 1">
          <div class="page-link" @click="setPagination(data.currentPage - 1)">
            &lsaquo;
          </div>
        </li>
        <li
          class="page-item"
          v-show="
            n == data.currentPage ||
            n == data.currentPage - 1 ||
            n == data.currentPage + 1
          "
          :class="n == data.currentPage ? 'active' : ''"
          v-for="n in data.lastPage"
          :key="n"
        >
          <div class="page-link" @click="setPagination(n)">{{ n }}</div>
        </li>
        <li class="page-item" v-show="data.currentPage < data.lastPage">
          <div class="page-link" @click="setPagination(data.currentPage + 1)">
            &rsaquo;
          </div>
        </li>
        <li class="page-item" v-show="data.currentPage < data.lastPage">
          <div class="page-link" @click="setPagination(data.lastPage)">
            &raquo;
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Pagination',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['getAllUser']),
    setPagination (number) {
      const url = `&page=${number}`
      this.getAllUser(url)
    }
  }
}
</script>

<style scoped>
nav {
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25); */
}
.page {
  /* border: 1px solid black; */
  width: 50%;
  margin-top: 30px;
  margin-left: 50%;
  margin-bottom: 20px;
  transform: translateX(-30%);
}

.page .pagination {
  /* border: 1px solid yellow; */
  width: 60%;
}
</style>
