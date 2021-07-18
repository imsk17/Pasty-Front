<template>
  <div class="flex flex-col h-screen w-full">
    <Header show-save-button />
    <textarea
      v-model="paste"
      spellcheck="false"
      class="h-full px-6 py-4 outline-none bg-[#1e1e1e]"
      placeholder="Save and Share. Or paste a url to shorten it."
    >
    </textarea>
    <footer class="bg-black px-8 py-4">
      <p class="text-[#ffcb23]">© Sumit Kumar</p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    paste: {
      get() {
        return this.$store.state.input.txInput
      },
      set(t) {
        this.$store.commit('input/set', t)
      },
    },
  },
}
</script>

<style scoped>
textarea {
  color: #fff;
  font-family: 'JetbrainsMono', Courier, monospace;
  font-size: 14px;
  resize: none;
}
</style>
