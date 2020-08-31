<template>
  <div>
    <!-- Nav Home About Login Etc -->
    <Nav />
    <!-- About Us -->
    <Container1 />
    <!-- Extra Ordinary Menus -->
    <Container2 />
    <!-- The Most Popular Menu -->
    <Container3 />
    <!-- Place KingsCafe -->
    <Container4 />
    <!-- Music Entertaint -->
    <Container5 />
  </div>
</template>

<script>
import Nav from '../LandingPage/components/Nav'
import Container1 from '../LandingPage/components/Container1'
import Container2 from '../LandingPage/components/Container2'
import Container3 from '../LandingPage/components/Container3'
import Container4 from '../LandingPage/components/Container4'
import Container5 from '../LandingPage/components/Container5'
export default {
  name: 'landingpage',
  components: {
    Nav,
    Container1,
    Container2,
    Container3,
    Container4,
    Container5
  }
}
</script>

<style scoped>
</style>
