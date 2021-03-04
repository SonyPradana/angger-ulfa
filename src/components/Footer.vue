<template>
  <div class="bg-gray-700 h-40 mt-10 p-5 text-xl">
    <h3 class="text-center text-gray-100">
      <router-link :to="{name: 'Anniversary'}">Angger ❤ Ulfa</router-link>
    </h3>    
    <angger-sosmed class="text-gray-100" />
    <p class="text-center text-gray-300 text-lg">Make with ♡ by <a href="https://twitter.com/AnggerMPd">AMP</a></p>
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
