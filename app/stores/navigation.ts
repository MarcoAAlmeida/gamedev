import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('nav', () => {
  const menuItems = ref([
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Web',
      to: '/web',
    },
    {
      title: 'Meta',
      to: '/meta',
    },
    {
      title: 'Cloudfare',
      to: '/cloudfare',
    },
    {
      title: 'Wireframes',
      to: '/wireframes',
    },
    {
      title: 'Resources',
      to: '/resources',
    },
  ])

  return {
    menuItems,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
