import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('nav', () => {
  const currentRoute = ref('pinia')
  const rootMenuItems = ref([
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
        prependIcon: 'mdi-responsive',
        to: '/wireframes',
        link: true,
      },
    },
  ])
  const webMenuItems = ref([
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
      title: 'Nuxt',
      props: {
        prependIcon: 'mdi-web',
        to: '/web/nuxt',
        link: true,
      },
    },
    {
      title: 'Wireframes',
      props: {
        prependIcon: 'mdi-responsive',
        to: '/wireframes',
        link: true,
      },
    },
  ])

  const navigationConfig = ref({
    '/': rootMenuItems,
    '/web': webMenuItems,
  })

  const currentRouteMenuItems = computed(() =>
    navigationConfig.value.hasOwnProperty(currentRoute.value)
      ? navigationConfig.value[currentRoute.value]
      : navigationConfig.value.value['/'])

  return {
    currentRoute,
    currentRouteMenuItems,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
