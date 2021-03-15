<template>
  <div id="people" class="bg-center bg-cover flex flex-col justify-center items-center mt-16 mb-10">
    <div class="flex justify-center items-center bg-gray-500 text-gray-100 font-bold text-sm rounded-full ring-4 ring-gray-50 w-32 h-32 -mt-16">
      <p>WE JUST MERIED</p>
    </div>
    <div class="border-gray-200 border-b-2 px-8 my-4">
      <p class="text-gray-100 text-lg font-bold border-gray-400 border-b-4 -my-1">Our Family / Friend / Guest</p>
    </div>
    <div class="grid grid-rows-3 grid-flow-col gap-y-4 gap-x-10 mb-32 px-10  overflow-x-auto lg:overflow-x-hidden w-96 lg:w-auto scroll-snap-x">
      
      <div class="flex flex-row gap-3 bg-pink-900 bg-opacity-60 p-2 rounded-md w-80 shadow-lg"
        v-for="people in this.$store.state.peoples" :key='people.id'>

        <img class="rounded-full w-16 h-16 p-1 m-1 ring ring-pink-600" :src="people.image" :alt="people.nama">
        <div>
          <p class="text-base text-gray-300">{{ people.pesan }}</p>
          <p class="text-base text-gray-200 font-semibold mt-2">{{ people.nama }}</p>
          <p class="text-xs text-gray-400 font-semibold">- {{ people.kategory }}</p>
        </div>
      </div>

    </div>
  </div>  
</template>

<script>
export default {
  mounted() {
    // this.loadPeople()
    this.$store.commit('loadPeople')
  }
}
</script>

<style scoped>
  #people {
    background-image: url('~@/assets/bg-2.jpg');    
    clip-path: polygon(100% -64px, 100% 90%, 50% 100%, 0 90%, 0 -64px);
  }
</style>
