<template>
  <div class="bg-pink-200 h-auto min-h-screen">
    <div class="py-8 bg-pink-200">
      <h1 class="text-5xl text-center font-bold font-paris">4 years of love</h1>
      <img class="h-24 w-24 rounded-full mx-auto my-5 shadow" src="~@/assets/id.png" alt="anniversary-angger-ulfa">
      <p class="text-center font-light text-pink-400">4.3.21</p>
    </div>
    <div class="mx-auto max-w-sm md:max-w-md py-4">
      <div class="flex justify-between items-center gap-4 bg-pink-50 rounded-md my-3 overflow-hidden shadow-sm max-h-24">
        <h2 class="mx-6 text-3xl font-semibold text-red-700">L</h2>
        <div class="max-h-20">
          <p class="font-semibold text-sm text-gray-800">360 days with you</p>
          <p class="text-base text-gray-700">Saling mengenal diantara kami, setiap hari adalah bahagia</p>
        </div>
        <img class="w-32 h-32" src="~@/assets/annivesary/satu.jpg" alt="360-day">
      </div>
      <div class="flex justify-between items-center gap-4 bg-pink-50 rounded-md my-3 overflow-hidden shadow-sm max-h-24">
        <h2 class="mx-6 text-3xl font-semibold text-red-700">O</h2>
        <div class="max-h-20">
          <p class="font-semibold text-sm text-gray-800">Second anniversary</p>
          <p class="text-base text-gray-700">Berjuang bersama dalam suka dan duka</p>
        </div>
        <img class="w-32 h-32" src="~@/assets/annivesary/dua.jpg" alt="360-day">
      </div>
      <div class="flex justify-between items-center gap-4 bg-pink-50 rounded-md my-3 overflow-hidden shadow-sm max-h-24">
        <h2 class="mx-6 text-3xl font-semibold text-red-700">V</h2>
        <div class="max-h-20">
          <p class="font-semibold text-sm text-gray-800">Third anniversary</p>
          <p class="text-base text-gray-700">Kepercayan dan kesabaran adalah kunci dari hubungan</p>
        </div>
        <img class="w-32 h-32" src="~@/assets/annivesary/tiga.jpg" alt="360-day">
      </div>
      <router-link :to="{name: 'Home'}" class="flex justify-between items-center gap-4 bg-pink-50 rounded-md my-3 overflow-hidden shadow-sm max-h-24">
        <h2 class="mx-6 text-3xl font-semibold text-red-700">E</h2>
        <div class="max-h-20">
          <p class="font-semibold text-sm text-gray-800">Right now</p>
          <p class="text-base text-gray-700">Hari yang dinanti, doa dan harapan kita mulai bersama</p>
        </div>
        <img class="w-32 h-32" src="~@/assets/annivesary/empat.jpg" alt="360-day">
      </router-link>
    </div>
    <h2 class="text-gray-600 text-sm text-center h-8">The Journey Just Begun 💕</h2>
  </div>
</template>
