import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: '**/*.md',
      type: 'page',
    }),
  },
})
