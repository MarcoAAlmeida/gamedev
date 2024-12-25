---
title: 'Front-matter'
description: 'provide metadata to pages'
---

# Front-matter

Inspired by [Jekill](https://jekyllrb.com/docs/front-matter/):

> Front-matter is a convention of Markdown-based CMS to provide meta-data to pages, like description or title. In Nuxt Content, the front-matter uses the YAML syntax with key: value pairs.

It takes the form of data section, in the beginning of each markdown document

```yaml
---
title: 'Front-matter'
description: 'provide metadata to pages'
---

```


## Bindings

In your markdown, you can use bindings like this:

```markdown
> The Title is '{{ $doc.title }}' and customVariable is '{{ $doc.customVariable || 'defaultValue'  }}'
```

which renders like:

> The title is '{{ $doc.title }}' and customVariable is '{{ $doc.customVariable || 'defaultValue' }}'

