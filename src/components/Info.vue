<template>
  <div class="p-6 my-3 mx-1 border border-gray-200 rounded-2xl" v-show="!this.$store.state.covid_agreement">
    <div class="max-w-2xl text-left">
      Mengingat kondisi & situasi dengan adanya pendemi covid 19.
      Tanpa mengurangi rasa hormat & sesuai anjuran pemerintah, resespi penikahan hanya dihadiri keluarga & undangan yang terbatas.
    </div>
    <div class="">
      <button v-on:click="agreeCovid()" class="bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 mt-5">Saya Mengerti</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    agreeCovid() {
      this.$store.commit('covidAgreement')
    }
  }
}
</script>
