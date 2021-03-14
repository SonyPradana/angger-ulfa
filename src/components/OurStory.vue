<template>
  <div id="our-story" class="flex justify-center items-center flex-col">
    <img class="w-32 h-32" src="@/assets/our-story.png" alt="our-story">
    <p class="text-center text-gray-600 font-base max-w-sm mt-2">{{ qoute }}</p>
    <!-- time line -->
    <div id='time-line' class="flex flex-col gap-8 my-8 text-right">
      <div class="snap-left one flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" src="@/assets/id.png" alt="" srcset="">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">Frist We Meet</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-right">{{ meet.date }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ meet.text }}</p>
        </div>
      </div>
      
      <div class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" src="@/assets/id.png" alt="" srcset="">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">Frist Date</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-left">{{ frist.date }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ frist.text }}</p>
        </div>
      </div>

      <div class="snap-left three flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" src="@/assets/id.png" alt="" srcset="">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">In Relationship</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-right">{{ relation.date }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ relation.text }}</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      qoute: 'Pernikahan adalah komitmen bersama untuk mencintai tanpa kondisi dan tanggal kadaluarsa',
      meet: {
        date: 'Selasa, 5 Agustus 2014',
        text: 'Pertama kali bertemu saat itu saat masuk kuliah semester 1 di kampus kami di jogjakarta, saat itu kami belum mengenal satu sama lain sampai beberapa minggu kemudaian kami saling bertegur sapa.'
      },
      frist: {
        date: 'Sabtu, 4 Maret 2017',
        text: 'Kemudian kami memberanikan diri memutuskan untuk menjalin hubungan lebih dekat setalah 3 tahun menjadi sahabat bersama.'
      },
      relation: {
        date: 'Minggu, 18 Oktober 2020',
        text: 'Alhamdulillah deberikan kepercayaan untuk melamar dia pada hari sangat berbagia dan dinanti-nanti. Terimaksih untuk Dia telah sabar dan menerima setalah penantian panjang Kami bersama.'
      }
    }
  },
  methods: {
    startSnap(target, rtl, trigger = target) {
      gsap.fromTo(target, {
        x: rtl ? 100 : -100,
        opacity: 0
      }, {        
        x: 0,
        opacity: 1,
        duration: 2.5,
        scrub: true,

        scrollTrigger: {
          trigger: trigger,
          toggleActions: "restart none reverse pause",
          start: "top center",
          // end: "bottom center",
          end: "+=150",

          autoAlpha: 1, 
          ease: "power1.in",
          overwrite: "auto",
        },
      })
    }
  },
  mounted() {
    this.startSnap('.snap-left.one', false, '#our-story')
    this.startSnap('.snap-right.two', true, '#our-story')
    this.startSnap('.snap-left.three', false, '#our-story')    
  },
}
</script>
