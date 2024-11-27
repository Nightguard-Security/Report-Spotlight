---
title: Report Spotlight
layout: blog.njk
permalink: /blog/
---

<!-- {% for key, value in collections.articles[0] %}
  {{ key }}, {{value }}
{% endfor %} -->

## {{ collections.articles[0].data.title }}
{{collections.articles[0].content | safe}}

