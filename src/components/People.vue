<template>
  <div id="people" class="flex flex-col justify-center items-center mt-16 mb-10">
    <div class="flex justify-center items-center bg-gray-500 text-gray-100 font-bold text-sm rounded-full ring-4 ring-gray-50 w-32 h-32 -mt-16">
      <p>WE JUST MERIED</p>
    </div>
    <div class="border-gray-200 border-b-2 px-8 my-4">
      <p class="text-gray-100 text-lg font-bold border-gray-400 border-b-4 -my-1">Our Family / Friend / Guest</p>
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-10 mb-32 px-10 max-h-80">
      <div class="flex flex-row gap-3 bg-gray-900 bg-opacity-60 p-3 rounded"
        v-for="people in peoples" :key='people.id'>

        <img class="rounded-full w-20 h-20 p-1" :src="people.img" :alt="people.name">
        <div>
          <p class="text-base text-gray-300">{{ people.message }}</p>
          <p class="text-base text-gray-200 font-semibold mt-2">{{ people.name }}</p>
          <p class="text-xs text-gray-400 font-semibold">- {{ people.relation }}</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      peoples: [
        {
          img: require('@/assets/no-image.png'),
          name: 'eksan',
          message: 'selmat ya kalian berdua',
          relation: 'friend',
          id: 10
        },
        {
          img: require('@/assets/no-image.png'),
          name: 'airin',
          message: 'selamat ya om angger',
          relation: 'family',
          id: 1
        },
        {
          img: require('@/assets/no-image.png'),
          name: 'bela',
          message: 'selamat ya om angger tente ulfa',
          relation: 'family',
          id: 2
        },
      ]
    }
  },
}
</script>

<style scoped>
  #people {
    background-image: url('~@/assets/bg.png');    
    clip-path: polygon(100% -64px, 100% 90%, 50% 100%, 0 90%, 0 -64px);
  }
</style>
