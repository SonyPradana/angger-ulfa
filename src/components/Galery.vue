<template>
  <div id="galery" class="flex justify-center items-center gap-10 flex-col h-screen">
    <img class="w-32 h-32" src="@/assets/galery.png" alt="our-story">
    <p class="text-center text-gray-600 font-base max-w-sm mt-2">{{ qoute }}</p>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
      <div class="h-36 w-36 transform hover:scale-105">
        <img class="w-full h-full" src="@/assets/id.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
