export const state = () => ({
  txInput: '',
})

export const mutations = {
  set(state, text) {
    state.txInput = text
  },
}
