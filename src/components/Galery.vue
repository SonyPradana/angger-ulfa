<template>
  <div id="galery" class="flex justify-center items-center gap-10 flex-col my-6">
    <MyVideo />    
    <p>click to unmuted</p>

    <img class="w-32 h-32" src="@/assets/galery.png" alt="our-story">
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <div class="h-40 w-40 transform"
        v-for="image in images" :key="image">
        <img class="w-full h-full object-cover object-top" :src="image" alt="angger-ulfa">
      </div>
    </div>
  </div>
</template>

<script>
import MyVideo from '@/components/video.vue'

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
  }
}
</script>
