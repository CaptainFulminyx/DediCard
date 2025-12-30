import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    text: 'Write your dedication here 💖',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: 500,
    background: 'bg1'
  }),

  getters: {
    cardStyle: (state) => ({
      fontFamily: state.fontFamily,
      fontSize: state.fontSize + 'px',
      fontWeight: state.fontWeight
    })
  }
})