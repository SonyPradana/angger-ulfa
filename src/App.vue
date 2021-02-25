<template>
  <div id="app">    
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
