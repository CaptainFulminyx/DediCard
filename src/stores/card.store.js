import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    content: {
      title: 'Thank You 💛',
      message: 'For always being there when it mattered the most.'
    },

    typography: {
      fontFamily: 'Poppins',
      titleSize: 36,
      bodySize: 20,
      weight: 500,
      align: 'center'
    },

    layout: {
      width: 1080,
      height: 1080,
      padding: 64
    },

    background: {
      id: 'warm-sun',
      color: '#FDE68A'
    }
  }),

  getters: {
    cardStyle(state) {
      return {
        fontFamily: state.typography.fontFamily,
        textAlign: state.typography.align,
        padding: state.layout.padding + 'px'
      }
    }
  }
})