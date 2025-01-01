---
title: 'backlog'
description: 'stuff that could be done'
icon: 'mdi-web'
url: 'https://web.dev/'
---

# Backlog


- add a nice landing page
    1. breadcrumbs at top
    2. add Patreon like footer [medievalists.net](https://www.medievalists.net/)
    3. support several layouts

- cards to display book reviews

- code highlighting
    1. https://www.docs4.dev/posts/how-to-build-a-custom-code-block-with-nuxt-mdc-and-prose-pre


- integrate an image component, similar to the one in [nuxt-image-gallery](https://admin.hub.nuxt.com/marco-a-almeida/nuxt-image-gallery/production)

- experiment with Nuxthub fullstack features 
    1. leverage cloudfare database

## Gutenify

holds [Project Gutenberg](https://www.gutenberg.org) metadata collected from [feed site](https://www.gutenberg.org/cache/epub/feeds/)

[Project Gutemberg offline catalog](https://www.gutenberg.org/ebooks/offline_catalogs.html#xmlrdf)

parses metadata with [rdf-parse](https://www.npmjs.com/package/rdf-parse)

stores the parsed metadata in a database

create an OpenAPI to retrieve metadata using [Nuxt server support](/web/nuxt/server)

[Open Publication Distribution System](https://en.wikipedia.org/wiki/Open_Publication_Distribution_System)

## Book gallery layouts

- [Goodreads gallery](https://www.goodreads.com/genres/art)
- [Amazon bookstore](https://www.amazon.com.br/Livros/b?ie=UTF8&node=6740748011)
- [Livraria Cultura](https://www.livrariacultura.com.br/saraiva)

## Make navigation.ts menuItem selection hierarchical

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

## Patreonizing

- [egghead.io](https://egghead.io/)
