<template>
  <div id="countdown" class="bg-fixed bg-center bg-cover w-full max-h-32 flex flex-col justify-center items-center py-20 my-7">
    <h2 class="text-gray-100 font-bold text-xl mb-8">COUNT DOWN</h2>
    <div class="grid grid-cols-4 gap-6">
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ hari }}</div>
        <p class="text-center text-gray-100">Day</p>
      </div>
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ jam }}</div>
        <p class="text-center text-gray-100">Hours</p>
      </div>
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ menit }}</div>
        <p class="text-center text-gray-100">Minute</p>
      </div>
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ detik }}</div>
        <p class="text-center text-gray-100">Second</p>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      hari: 3,
      jam: 12,
      menit: 25,
      detik: 15,
      countDownDate: '',
      picker: ''
    }
  },
  methods: {
    dataPicker: function() {
      this.picker = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.countDownDate - now;
  
        this.hari   = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.jam    = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.menit  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.detik  = Math.floor((distance % (1000 * 60)) / 1000);
  
        if (distance < 0 ) {
          clearInterval(this.picker);
        }
      }, 1000);
    },    
  },
  beforeDestroy() {
    clearInterval(this.picker)
  },
  mounted() {
    this.countDownDate = new Date("March 28, 2021 08:00:00").getTime();
    this.dataPicker();
  },
}
</script>

<style scoped>
  #countdown {
    background-image: url('~@/assets/bg-2.png');
  }
</style>
