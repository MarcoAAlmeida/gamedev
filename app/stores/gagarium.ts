import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const useGagariumStore = defineStore('gagarium', () => {
  const gagarium: Ref<string[]> = ref([
    '/gagarium/0b2b9ab806cdccc70e1941f671ce0103.jpg',
    '/gagarium/6afb394f760a9b1deac2c5d6dc43ad9d.jpg',
    '/gagarium/15aafcd6c04d11835d6c668d9d3482ba.jpg',
    '/gagarium/2412b12eba32d83688b02dbea87d9961.jpg',
    '/gagarium/40877ddce58ab4b7d381aa8f7d7616e8.jpg',
    '/gagarium/be19d7a598f61a19067bacca29a38990.jpg',
    '/gagarium/c245508b2444fc59cc9bc636868a5cdd.jpg',
    '/gagarium/d7d8e0c91192f718316f8cacc84058af.jpg',
    '/gagarium/d617e17aaa15c8d9ec5c5b30445d5431.jpg',
    '/gagarium/f52eb8bf95166120fa47e40a17ac2e8b.jpg',
  ])
  const reshuffle = () => {
    return gagarium.value
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  return {
    gagarium,
    reshuffle,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
