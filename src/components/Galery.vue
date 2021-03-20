<template>
  <div id="galery" class="flex justify-center items-center gap-10 flex-col my-6">
    <MyVideo />    
    <p>click to unmuted</p>

    <img class="w-32 h-32" src="@/assets/galery.png" alt="our-story">
    <div ref="galery" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <div class="test h-40 w-40 transform"
        v-for="image in images" :key="image">
        <img class="w-full h-full object-cover object-top" :src="image" alt="angger-ulfa">
      </div>
    </div>
  </div>
</template>

<script>
import MyVideo from '@/components/video.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      images: [
        require('@/assets/galery/4.jpg'),
        require('@/assets/galery/5.jpg'),
        require('@/assets/galery/6.jpg'),
        require('@/assets/galery/7.jpg'),
        require('@/assets/galery/8.jpg'),
        require('@/assets/galery/9.jpg'),
        require('@/assets/galery/10.jpg'),
        require('@/assets/galery/11.jpg'),
        require('@/assets/galery/1.jpg'),
        require('@/assets/galery/2.jpg'),
      ]
    }
  },
  components: {
    MyVideo
  },
  mounted() {
    const target = this.$refs.galery.childNodes
    const tl = gsap.timeline({})

    gsap.utils.toArray(target).forEach(element => {
      tl.from(element, {
        y: 12,
        scale: .6,
        opacity: 0,
        // duration: .8,
        scrub: .8,
      })    
    })

    ScrollTrigger.create({
      trigger: this.$refs.galery,
      animation: tl,
      // toggleActions: "restart none reverse pause",
      start: "top center",
      end: "+=50",

      autoAlpha: 1, 
      ease: "power1.in",
      overwrite: "auto",
    })
  },
}
</script>
