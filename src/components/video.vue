<template>  
  <video ref="myVideo" class=" md:w-8/12 w-full object-cover" :poster="require('@/assets/id.png')" controls muted loop>
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
    }
  },
  mounted() {
    const myVideo = this.$refs.myVideo
    myVideo.volume = 0.25

    ScrollTrigger.create({
      trigger: myVideo,
      onEnter: () => myVideo.play(),
      onLeave: () => myVideo.pause(),
      onEnterBack: () => myVideo.play(),
      onLeaveBack: () => myVideo.pause()
    });
  },
}
</script>
