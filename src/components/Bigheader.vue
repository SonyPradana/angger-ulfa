<template>
  <div id="cheremony">    
    <!-- title and image -->
    <div id="chermony" class="flex flex-col items-center py-8 h-screen w-auto z-50">
      <div class="w-96 text-center mt-24">
        <div class="text-gray-100 text-2xl font-paris font-semibold italic tracking-widest">The Wedding Selebration of</div>
        <div class="text-gray-100 text-4xl font-quiksand font-semibold mt-4 mb-2">
          <span class="border-t border-b border-gray-200 tracking-widest">ANGGER</span>
          ♡
          <span class="border-t border-b border-gray-200 tracking-widest">ULFA M</span>
        </div>
        <div class="text-gray-100 text-2xl">Temanggung</div>
        <div>
          <button class="bg-yellow-400 text-gray-800 shadow-sm px-2 py-3 rounded-md mt-10 focus:ring-4 focus:ring-blue-500">Save the Date</button>
        </div>
      </div>
    </div>
    <!-- perent info -->
    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div class="flex flex-col justify-center items-center p-4 border border-gray-100">
        <p class="text-sm text-gray-600 font-bold">PERENT OF THE BRIDE</p>
        <p class="text-lg text-gray-500 font-medium text-center border-t-2 border-b-2 border-gray-500 py-1 my-1">Bapak Ismaful + Ibu Titik</p>
      </div>
      <div class="flex flex-col justify-center items-center p-4 border border-gray-100">
        <p class="text-sm text-gray-600 font-bold">PERENT OF THE GROOM</p>
        <p class="text-lg text-gray-500 font-medium text-center border-t-2 border-b-2 border-gray-500 py-1 my-1">Bapak Suharso + Ibu Warni</p>
      </div>
    </div>
    <!-- title invate -->
    <h2 class="text-center font-bold text-gray-700 py-4 mx-3">WE CORDIALY INVATE YOU TO SHARE IN THE WEDDING OF</h2>
    <!-- card profile -->
    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div class="flex flex-col justify-center items-center p-4 border border-gray-100">
        <img class="rounded-full shadow-md my-2 w-32 h-32" src="@/assets/ulfa.png" alt="ulfa">
        <p class="text-gray-700 font-bold text-base">THE BRIDE</p>
        <p class="text-2xl text-gray-700 my-3 text-center">ULFA MUTOHAROH, S.K.M</p>
        <p class="max-w-xs text-center text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum eum repellat quaerat laudantium distinctio, ipsa nulla ullam earum sequi.</p>
        <ulfa-sosmed class="text-gray-700 text-sm" />
      </div>
      <div class="flex flex-col justify-center items-center p-4 border border-gray-100">
        <img class="rounded-full shadow-md my-2 w-32 h-32" src="@/assets/angger.png" alt="angger">
        <p class="text-gray-700 font-bold text-base">THE GROOM</p>
        <p class="text-2xl text-gray-700 my-3 text-center">ANGGER MULIA PRADANA, S.K.M</p>
        <p class="max-w-xs text-center text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum eum repellat quaerat laudantium distinctio, ipsa nulla ullam earum sequi.</p>
        <angger-sosmed class="text-gray-700 text-sm" />
      </div>
    </div>
    <!-- card event -->
    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div class="border-r border-gray-100 py-4">
        <p class="text-gray-700 font-bold text-base text-center">cheremony</p>
        <p class="text-center text-base text-gray-700">Minggu / 28 March 2021</p>
        <p class="text-center text-base text-gray-700">Alina Hotel</p>
        <p class="text-center text-base text-gray-700">Jl. Kh Agus Salim No. 7 Gedongan, Temanggung</p>
      </div>
      <div class="border-l border-gray-100 py-4">
        <p class="text-gray-700 font-bold text-base text-center">reception</p>
        <p class="text-center text-base text-gray-700">Sabtu / 3 April 2020</p>
        <p class="text-center text-base text-gray-700">Kediaman Bapak Suharso-Warni</p>
        <p class="text-center text-base text-gray-700">Truko, Branjang, Ungaran</p>
      </div>
    </div>
  </div>
</template>

<script>
import AnggerSosmed from '@/components/sosial_media/angger.vue'
import UlfaSosmed from '@/components/sosial_media/ulfa.vue'

export default {
  components: {
    AnggerSosmed,
    UlfaSosmed
  }  
}
</script>

<style scoped>
  #chermony {
    background-image: url('~@/assets/bg.png');
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
  }
</style>
