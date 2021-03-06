<template>
  <div class="bg-gray-800 h-40 p-5 text-xl">
    <h3 class="text-center text-gray-100 tracking-wider">
      <router-link :to="{name: 'Anniversary'}">Angger ❤ Ulfa</router-link>
    </h3>    
    <angger-sosmed class="text-gray-100" />
    <p class="text-center text-gray-300 text-lg mt-3">Make with ♡ by <a href="https://twitter.com/AnggerMPd">AMP</a></p>
  </div>
</template>

<script>
import AnggerSosmed from '@/components/sosial_media/angger.vue'

export default {
  components: {
    AnggerSosmed
  }  
}
</script>
