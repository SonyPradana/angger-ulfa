<template>
  <div>    
    <!-- title and image -->
    <div id="header" class="flex flex-col items-center py-8 h-screen max-h-700 w-auto z-50 bg-center">
      <div class="w-96 text-center sm:mt-36 md:mt-32 lg:mt-28 mt-32">
        <div class="text-gray-100 text-2xl font-paris font-semibold italic tracking-widest">The Wedding Selebration of</div>
        <div class="text-gray-100 text-4xl font-quiksand font-semibold mt-4 mb-2">
          <span class="border-t border-b border-gray-200 flex-row-reverse border-opacity-50 tracking-widest">ANGGER</span>
          ♡
          <span class="border-t border-b border-gray-200 flex-row-reverse border-opacity-50 tracking-widest">ULFA M</span>
        </div>
        <div class="text-gray-100 text-2xl">Temanggung</div>
        <div>
          <button v-on:click="showModal()" class="bg-yellow-400 text-gray-50 shadow-md px-2 py-3 rounded-md mt-10 focus:ring-4 focus:ring-yellow-200 focus:outline-non">Save the Date</button>
        </div>
      </div>
    </div>
    <!-- perent info -->
    <div id="ceremony" class="grid sm:grid-cols-2 grid-cols-1 py-4">
      <div class="flex flex-col justify-center items-center p-4 border border-gray-100">
        <p class="text-sm text-gray-600 font-bold">ORANG TUA PENGANTIN</p>
        <p class="text-lg text-gray-500 font-medium text-center border-double border-t-4 border-b-4 border-gray-400 py-1 my-1">Bapak Ismakpul + Ibu Titik</p>
      </div>
      <div class="flex flex-col justify-center items-center p-4 border border-gray-100">
        <p class="text-sm text-gray-600 font-bold">ORANG TUA MEMPELAI PRIA</p>
        <p class="text-lg text-gray-500 font-medium text-center border-double border-t-4 border-b-4 border-gray-400 py-1 my-1">Bapak Suharso + Ibu Warni</p>
      </div>
    </div>
    <!-- title invate -->
    <h2 class="text-center font-bold text-gray-700 py-8 mx-3">KAMI SECARA KHUSUS MENGUNDANG ANDA UNTUK BERBAGI DALAM PERNIKAHAN</h2>
    <!-- card profile -->
    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div ref="trigger" class="flex flex-col justify-start items-center p-4 border border-gray-100">
        <img class="rounded-full shadow-md my-2 w-32 h-32" src="@/assets/ulfa.png" alt="ulfa">
        <p class="text-gray-700 font-bold text-base mt-2">PENGANTIN</p>
        <p class="text-2xl text-gray-600 font-quiksand my-3 text-center">ULFA MUTOHAROH, S.K.M</p>
        <p class="max-w-64 text-center text-sm text-gray-700">Menikah itu cinta yang diberkahi. awalnya janji, selanjutnya adalah ibadah, penghujungnya insyallah ridha ilahi.</p>
        <ulfa-sosmed class="text-gray-700 text-sm" />
      </div>
      <div ref="trigger2" class="flex flex-col justify-start items-center p-4 border border-gray-100">
        <img class="rounded-full shadow-md my-2 w-32 h-32" src="@/assets/angger.png" alt="angger">
        <p class="text-gray-700 font-bold text-base mt-2">MEMPELAI PRIA</p>
        <p class="text-2xl text-gray-600 font-quiksand my-3 text-center">ANGGER MULIA PRADANA, S.K.M</p>
        <p class="max-w-64 text-center text-sm text-gray-700">Menikah selain menjadi ibadah untuk selamanya, juga menjadi langkah menjadi manusia terbaik, karena akhlak terbaik kepada istri dan keluarga</p>
        <angger-sosmed class="text-gray-700 text-sm" />
      </div>
    </div>
    <!-- card event -->
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-3 py-4">
      <div ref="trigger3" class="border-r border-gray-100 P-4">
        <p class="text-gray-700 font-bold text-base text-center mb-2">CEREMONY</p>
        <p class="text-center text-base text-gray-700">Minggu / 28 Maret 2021</p>
        <p class="text-center text-base text-gray-700">Aliana Hotel & Resto</p>
        <p class="text-center text-base text-gray-700">Jl. Kh Agus Salim No. 7 Gedongan, Temanggung</p>
      </div>
      <div ref="trigger4" class="border-l border-gray-100 P-4">
        <p class="text-gray-700 font-bold text-base text-center mb-2">RECEPTION</p>
        <p class="text-center text-base text-gray-700">Sabtu / 3 April 2021</p>
        <p class="text-center text-base text-gray-700">Kediaman Bapak Suharso-Warni</p>
        <p class="text-center text-base text-gray-700">Truko, Branjang, Ungaran</p>
      </div>
    </div>
  </div>
</template>

<script>
import AnggerSosmed from '@/components/sosial_media/angger.vue'
import UlfaSosmed from '@/components/sosial_media/ulfa.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    AnggerSosmed,
    UlfaSosmed
  },
  methods: {
    showModal() {
      this.$modal.show('newPost')
    }
  },
  mounted() {
    const trigger = [
      this.$refs.trigger, 
      this.$refs.trigger2,
      this.$refs.trigger3,
      this.$refs.trigger4,
      ]
    
    const tl = gsap.timeline()
    const option = {
      scale: .4,
      opacity: .05,
      duration: .75,
      scrub: .4,
    }

    tl.from(trigger[0], option)
    tl.from(trigger[1], option)
    tl.from(trigger[2], option)
    tl.from(trigger[3], option)

    ScrollTrigger.create({
      trigger: '#ceremony',
      animation: tl,
      toggleActions: "restart none reverse pause",
      start: "top center",
      end: "bottom center",

      autoAlpha: 1, 
      ease: "power1.in",
      overwrite: "auto",
    })
  },
}
</script>

<style scoped>
  #header {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/bg-1.jpg');

    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
</style>
