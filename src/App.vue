<template>
  <div id="app" class="w-full font-heebo font-normal">    
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer,
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
