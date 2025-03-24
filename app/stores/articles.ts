import type { DocsCollectionItem } from '@nuxt/content'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const useArticleStore = defineStore('articles', () => {
  const featured: Ref<DocsCollectionItem[]> = ref([])

  const reloadFeatured = async () => {
    const data = await queryCollection('articles').all()
    featured.value = data.filter(article => article.meta.featured)
      .map((article: DocsCollectionItem) => ({
        ...article,
        flex: 12,
        to: article.path,
      }))
  }

  return {
    featured,
    reloadFeatured,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
