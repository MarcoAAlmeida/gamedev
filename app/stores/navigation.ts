import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('nav', () => {
  const menuItems = ref([
    {
      title: 'Home',
      props: {
        prependIcon: 'mdi-home',
        to: '/',
        link: true,
      },
    },
    {
      title: 'Web',
      props: {
        prependIcon: 'mdi-web',
        to: '/web',
        link: true,
      },
    },
    {
      title: 'Meta',
      props: {
        prependIcon: 'mdi-console-line',
        to: '/meta',
        link: true,
      },
    },
    {
      title: 'Wireframes',
      props: {
        prependIcon: 'mdi-console-line',
        to: '/wireframes',
        link: true,
      },
    },
  ])

  return {
    menuItems,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
