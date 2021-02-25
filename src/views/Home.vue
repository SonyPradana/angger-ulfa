<template>
  <div class="bg-gray-50">
    <big-header />
    <count-down />
    <our-story />
    <People />
    <Galery />
  </div>
</template>

<script>
// @ is an alias to /src
import BigHeader from '@/components/Bigheader.vue'
import CountDown from '@/components/CountDown.vue'
import OurStory from '@/components/OurStory.vue'
import People from '@/components/People.vue'
import Galery from '@/components/Galery.vue'

export default {
  name: 'Home',
  components: {
    BigHeader,
    CountDown,
    OurStory,
    People,
    Galery,
  }
}
</script>
