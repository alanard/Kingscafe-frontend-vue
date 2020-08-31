<template>
  <div>
    <Navbar/>
    <div class="content">
      <AsideLeft/>
      <div class="main-content"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import AsideLeft from '../../../components/_base/Aside-left'
export default {
  name: 'History',
  components: {
    Navbar,
    AsideLeft
  }

}
</script>

<style scoped>
.content {
    /* border: 1px solid black; */
    display: flex;
    height: 100vh;
}

.main-content {
    /* border: 1px solid black; */
    flex: 4.7;
}
</style>
