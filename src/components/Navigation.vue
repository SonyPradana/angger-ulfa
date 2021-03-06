<template>
  <div class="flex items-center justify-between gap-2 px-3 py-2 bg-gray-900 bg-opacity-75 max-h-20 fixed top-0 w-full z-10">
    <div class="flex flex-grow ">
      <img class="w-16 h-16" src="~@/assets/logo.png" alt="angger-ulfa-logo" v-on:click="goto('header')">
    </div>
    <div class="flex flex-shrink flex-wrap gap-2 cursor-pointer select-none text-md text-gray-100 font-sans font-semibold">
      <div v-on:click="goto('ceremony')" >Ceremony</div> / 
      <div v-on:click="goto('our-story')" >Our Story</div> /
      <div v-on:click="goto('people')" >People</div> /
      <div v-on:click="goto('galery')" >Galery</div> /
      <div v-on:click="goto('location')" >Location</div>
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    goto(el) {
      document.getElementById(el).scrollIntoView();
    }
  }
}
</script>
