<template>
  <div class="flex text-xl px-8 py-4 bg-black justify-between text-white">
    <a href="/">&lt;Pa<span class="style">sty/&gt;</span></a>
    <div class="flex">
      <button v-show="showSaveButton" class="mx-3" @click="save()">
        <Save />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    showSaveButton: Boolean,
  },
  methods: {
    async save() {
      if (this.$store.state.input.txInput !== '') {
        await this.$axios.post('http://localhost:8080/api/paste/', {
          content: this.$store.state.input.txInput,
        })
      }
    },
  },
})
</script>

<style scoped>
.style {
  color: #ffcb23;
}
</style>
