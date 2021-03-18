<template>
  <video ref="myVideo" @click="toglePause()" class="md:w-8/12 w-full object-cover" :poster="require('@/assets/id.png')" muted loop>
      <source :src="video480" type="video/mp4">
      <!-- <source :src="video720" type="video/mp4">
      <source :src="video1080" type="video/mp4"> -->
    Your browser does not support the video tag.
  </video>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
       video1080: require('@/assets/videos/wedding-1080.mp4'),
       video720: require('@/assets/videos/wedding-720.mp4'),
       video480: require('@/assets/videos/wedding-480.mp4'),
       muted: true,
    }
  },
  methods: {
    toglePause() {
      this.muted = !this.muted
      this.$refs.myVideo.muted = this.muted
    }
  },
  mounted() {
    this.$refs.myVideo.volume = 0.25

    ScrollTrigger.create({
      trigger: this.$refs.myVideo,
      onEnter: () => this.$refs.myVideo.play(),
      onLeave: () => this.$refs.myVideo.pause(),
      onEnterBack: () => this.$refs.myVideo.play(),
      onLeaveBack: () => this.$refs.myVideo.pause()
    });
  },
}
</script>
