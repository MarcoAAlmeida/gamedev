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

  const barMenu: Ref<MenuItems> = ref ({
    title: 'BAR',
    props: {
      prependIcon: 'i-material-symbols:web',
      to: '/projects/bar',
      link: true,
    },
  })

  const recoilMenu: Ref<MenuItems> = ref ({
    title: 'Recoil',
    props: {
      prependIcon: 'i-material-symbols:web',
      to: '/projects/recoil',
      link: true,
    },
  })

  const rootMenuItems: Ref<MenuItems[]> = ref([
    homeMenu.value,
    barMenu.value,
    recoilMenu.value,
  ])

  const barMenuItems = ref([
    homeMenu.value,
    barMenu.value,
  ])

  const navigationConfig = ref<Map<string, MenuItems[]>>(new Map())

  navigationConfig.value.set('/', rootMenuItems.value)
  navigationConfig.value.set('/bar', barMenuItems.value)

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
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
