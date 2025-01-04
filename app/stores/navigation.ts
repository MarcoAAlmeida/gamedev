import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

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

  const homeMenu: Ref<MenuItems> = ref ({
    title: 'Home',
    props: {
      prependIcon: 'i-material-symbols:home',
      to: '/',
      link: true,
    },
  })

  const webMenu: Ref<MenuItems> = ref ({
    title: 'Web',
    props: {
      prependIcon: 'i-material-symbols:web',
      to: '/web',
      link: true,
    },
  })

  const metaMenu: Ref<MenuItems> = ref ({
    title: 'Meta',
    props: {
      prependIcon: 'file-icons:codemeta',
      to: '/meta',
      link: true,
    },
  })

  const wireframeMenu: Ref<MenuItems> = ref ({
    title: 'Wireframes',
    props: {
      prependIcon: 'openmoji:wireframes',
      to: '/wireframes',
      link: true,
    },
  })

  const designMenu: Ref<MenuItems> = ref ({
    title: 'Design',
    props: {
      prependIcon: 'material-symbols:design-services',
      to: '/web/design',
      link: true,
    },
  })

  const nuxtMenu: Ref<MenuItems> = ref ({
    title: 'Nuxt',
    props: {
      prependIcon: 'vscode-icons:file-type-nuxt',
      to: '/web/nuxt',
      link: true,
    },
  })

  const greyzoneMenu: Ref<MenuItems> = ref ({
    title: 'greyzone',
    props: {
      prependIcon: 'material-symbols:dangerous',
      to: '/web/greyzone',
      link: true,
    },
  })

  const changelogMenu: Ref<MenuItems> = ref ({
    title: 'changelog',
    props: {
      prependIcon: 'unjs:changelogen',
      to: '/meta/changelog',
      link: true,
    },
  })

  const backlogMenu: Ref<MenuItems> = ref ({
    title: 'backlog',
    props: {
      prependIcon: 'i-material-symbols:logo-dev',
      to: '/meta/backlog',
      link: true,
    },
  })

  const rootMenuItems: Ref<MenuItems[]> = ref([
    homeMenu.value,
    webMenu.value,
    metaMenu.value,
    wireframeMenu.value,
  ])

  const webMenuItems = ref([
    homeMenu.value,
    webMenu.value,
    designMenu.value,
    nuxtMenu.value,
    wireframeMenu.value,
    greyzoneMenu.value,
    metaMenu.value,
  ])

  const metaMenuItems = ref([
    homeMenu.value,
    webMenu.value,
    changelogMenu.value,
    backlogMenu.value,
  ])

  const wireframesMenuItems = ref([
    {
      title: 'baseline',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/baseline',
      },
    },
    {
      title: 'constrained',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/constrained',
      },
    },
    {
      title: 'discord',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/discord',
      },
    },
    {
      title: 'extended-toolbar',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/extended-toolbar',
      },
    },
    {
      title: 'side-navigation',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/side-navigation',
      },
    },
    {
      title: 'steam',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/steam',
      },
    },
    {
      title: 'system-bar',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/system-bar',
      },
    },
    {
      title: 'three-column',
      value: 1,
      props: {
        prependIcon: 'mdi-page-layout-body',
        to: '/wireframes/three-column',
      },
    },
  ])

  const navigationConfig = ref<Map<string, MenuItems[]>>(new Map())

  navigationConfig.value.set('/', rootMenuItems.value)
  navigationConfig.value.set('/web', webMenuItems.value)
  navigationConfig.value.set('/meta', metaMenuItems.value)

  const matchByClosestRoute = (route: string): MenuItems[] | undefined => {
    let largestPrefix = ''

    for (const key of navigationConfig.value.keys()) {
      if (route.startsWith(key) && key.length > largestPrefix.length) {
        largestPrefix = key
      }
    }
    return navigationConfig.value.get(largestPrefix)
  }

  const currentRouteMenuItems = computed(() =>
    navigationConfig.value.get(currentRoute.value)
      ? navigationConfig.value.get(currentRoute.value)
      : matchByClosestRoute(currentRoute.value))

  return {
    currentRoute,
    currentRouteMenuItems,
    wireframesMenuItems,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
