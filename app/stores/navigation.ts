import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('nav', () => {
  interface MenuItems {
    title?: string
    props?: MenuItemsProps
  }

  interface MenuItemsProps {
    prependIcon?: string
    to?: string
    link?: boolean
  }

  const currentRoute: Ref<string> = ref('pinia')
  const rootMenuItems: Ref<MenuItems[]> = ref([
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
      title: 'Design',
      props: {
        prependIcon: 'mdi-web',
        to: '/web/design',
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
        prependIcon: 'mdi-web',
        to: '/wireframes',
        link: true,
      },
    },
    {
      title: 'greyzone',
      props: {
        prependIcon: 'mdi-sign-caution',
        to: '/web/greyzone',
        link: true,
      },
    },
    {
      title: 'Meta',
      props: {
        prependIcon: 'mdi-web',
        to: '/meta',
        link: true,
      },
    },
  ])

  const navigationConfig = ref<Map<string, MenuItems[]>>(new Map())

  navigationConfig.value.set('/', rootMenuItems.value)
  navigationConfig.value.set('/web', webMenuItems.value)
  navigationConfig.value.set('/web/nuxt', webMenuItems.value)
  navigationConfig.value.set('/web/nuxt/server', webMenuItems.value)
  navigationConfig.value.set('/web/nuxt/vuetify', webMenuItems.value)
  navigationConfig.value.set('/web/design', webMenuItems.value)
  navigationConfig.value.set('/web/design/iconography', webMenuItems.value)
  navigationConfig.value.set('/web/greyzone', webMenuItems.value)

  const currentRouteMenuItems = computed(() =>
    !!navigationConfig.value.get(currentRoute.value)
      ? navigationConfig.value.get(currentRoute.value)
      : navigationConfig.value.get('/'))

  return {
    currentRoute,
    currentRouteMenuItems,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
