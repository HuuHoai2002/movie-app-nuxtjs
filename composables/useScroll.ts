import { onMounted, onUnmounted, ref } from '@nuxtjs/composition-api'

export default function useScroll() {
  const active = ref(false)
  onMounted(() => {
    window.addEventListener('scroll', () => {
      active.value = window.scrollY > 0
    })
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', () => {
      active.value = window.scrollY > 0
    })
  })

  return {
    active,
  }
}
