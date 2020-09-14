---
layout: page
title: Tertiary Navigation
category: global-component
permalink: "/tertiary-nav/"
---

## Overview
The Tertiary Nav is displayed in the left rail on the large and medium breakpoints. It is not used on medium and small breakpoints.

{% include /patterns/nav/tertiary.md %}

**Functionality**

OnClick/OnTap of link, system displays target page.

Navigation displays in open state based on current page. For instance, if view a 3rd level page, the navigation will be expanded to show the children of the 3rd level, the siblings of the 3rd level, and the "secondary" section title.

### Code
### HTML
```html
  {% include /patterns/nav/tertiary.md %}
```
### SCSS
```scss
  {% include /patterns/nav/tertiary.scss %}
```
