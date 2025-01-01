export default defineNuxtRouteMiddleware((to, from) => {
  const navigationStore = useNavigationStore()
  const { currentRoute } = storeToRefs(navigationStore)

  currentRoute.value = to.fullPath
})
