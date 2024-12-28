import { useRouter } from 'vue-router'

export function useListPages(folder) {
  const router = useRouter()
  const pages = router.getRoutes()

  // Filter routes to get pages in the desired folder
  const filteredPages = pages
    .filter(route => route.path.startsWith(`/${folder}`))
    .map(route => ({
      name: route.name,
      path: route.path,
    }))

  return filteredPages
}
