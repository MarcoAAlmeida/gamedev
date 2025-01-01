---
title: backlog
description: stuff that could be done
icon: i-material-symbols:logo-dev
url: https://www.atlassian.com/agile/scrum/backlogs
---

As stated in [Atlassian Scrum Agile definitions](https://www.atlassian.com/agile/scrum/backlogs)
> A product backlog is a prioritized list of work for the development team that is derived from the product roadmap and its requirements.

# 1. Landing page, layout, and navigation improvements

- add a nice landing page
  1. breadcrumbs at top
  2. [add Patreon like footer [medievalists.net](https://www.medievalists.net/)]{style="text-decoration: line-through"}!
  3. support several layouts
  4. leverage [og-image](https://nuxt.com/modules/og-image)
  5. leverage [Nuxt I18n](https://i18n.nuxtjs.org/)

## 1.2 Make navigation.ts menuItem selection hierarchical

avoid sections like these in `app/stores/navigation.ts`
```
navigationConfig.value.set('/', rootMenuItems.value)
navigationConfig.value.set('/web', webMenuItems.value)
navigationConfig.value.set('/web/nuxt', webMenuItems.value)
navigationConfig.value.set('/web/design', webMenuItems.value)
navigationConfig.value.set('/web/design/iconography', webMenuItems.value)
navigationConfig.value.set('/web/greyzone', webMenuItems.value)
```

if `/web/design` is not found, pick `/web`


# 2. NuxtHub
- experiment with Nuxthub fullstack features
  1. [OpenAPI feature](https://hub.nuxt.com/docs/features/open-api)
  2. leverage cloudfare database

# 3. Image widget
- integrate an image component, similar to the one in [nuxt-image-gallery](https://admin.hub.nuxt.com/marco-a-almeida/nuxt-image-gallery/production)

# 4. Code widget
- code highlighting
  1. https://www.docs4.dev/posts/how-to-build-a-custom-code-block-with-nuxt-mdc-and-prose-pre

# 5. Search widget

- [nuxt search](https://content.nuxt.com/usage/search)

## 6. Book gallery layouts

- cards to display book reviews

- [Goodreads gallery](https://www.goodreads.com/genres/art)
- [Amazon bookstore](https://www.amazon.com.br/Livros/b?ie=UTF8&node=6740748011)
- [Livraria Cultura](https://www.livrariacultura.com.br/saraiva)


## 7. Gutenify

holds [Project Gutenberg](https://www.gutenberg.org) metadata collected from [feed site](https://www.gutenberg.org/cache/epub/feeds/)

[Project Gutemberg offline catalog](https://www.gutenberg.org/ebooks/offline_catalogs.html#xmlrdf)

parses metadata with [rdf-parse](https://www.npmjs.com/package/rdf-parse)

stores the parsed metadata in a database

create an OpenAPI to retrieve metadata using [Nuxt server support](/web/nuxt/server)

[Open Publication Distribution System](https://en.wikipedia.org/wiki/Open_Publication_Distribution_System)

## 6. Patreonizing

- [egghead.io](https://egghead.io/)
