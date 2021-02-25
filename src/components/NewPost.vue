<template>
  <modal name="newPost" height="auto">
    <form class="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-700" v-on:submit.prevent>
      <h1 class="text-3xl font-bold font-sans text-gray-800 dark:text-gray-300 mb-6">Kirim Pesan</h1>

      <label class="flex flex-col gap-2 text-gray-700">
        Nama
        <input type="text" class="text-gray-900 px-2 py-1 rounded-sm focus:ring ring-blue-500 border-gray-300 border focus:outline-none hover:outline-none active:outline-none" name="nama">
        <p v-show="error.nama" class="text-red-600 flex justify-end">{{ error.nama }}</p>
      </label>

      <label class="flex flex-col gap-2 text-gray-700">
        Pesan
        <input type="text" class="text-gray-900 px-2 py-1 rounded-sm focus:ring ring-blue-500 border-gray-300 border focus:outline-none hover:outline-none active:outline-none" name="pesan">
        <p v-show="error.pesan" class="text-red-600 flex justify-end">{{ error.pesan }}</p>
      </label>

      <section class="flex flex-col gap-2 text-gray-700">
        Relation
        <div class="flex gap-2">
          <label>
            <input type="radio" v-model="relation" value="family">
            Family
          </label>
          <label>
            <input type="radio" v-model="relation" value="friend">
            Friend
          </label>
        </div>
      </section>

      <div class="flex gap-2 mt-3">
        <button v-on:click="null" class="bg-yellow-400 text-gray-500 rounded px-4 py-2">Kirim</button>
        <button v-on:click.prevent="closeModal()" class="text-red-500 hover:bg-red-500 hover:text-gray-100 rounded px-4 py-2">Batal</button>
      </div>

    </form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      relation: 'family',
      error: {}
    }
  },
  methods: {
    sumbit() {},
    closeModal() {
      this.$modal.hide('newPost')
    }
  },
}
</script>
