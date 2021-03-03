<template>
  <div class="bg-gray-50">
    <Navigation />
    <big-header />
    <count-down />
    <our-story />
    <People />
    <Galery />
    <new-post />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import BigHeader from '@/components/Bigheader.vue'
import CountDown from '@/components/CountDown.vue'
import OurStory from '@/components/OurStory.vue'
import NewPost from '@/components/NewPost.vue'
import People from '@/components/People.vue'
import Galery from '@/components/Galery.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    BigHeader,
    CountDown,
    OurStory,
    People,
    Galery,
    NewPost,
    Footer
  }
}
</script>
