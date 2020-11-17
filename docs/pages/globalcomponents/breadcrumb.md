---
layout: page
title: Breadcrumbs
category: elements
permalink: "/breadcrumbs"
---
{% include patterns/breadcrumb/breadcrumb.md %}

## Overview
Breadcrumbs are used to help users navigate the SAMHSA website.

## Usage
Breadcrumbs are used on breakpoints large and greater. They are displayed on all pages with the exception of Home and Search.

## Functionality
* All pages in the breadcrumb are links accept the current page.
* OnClick or OnTap of link, system displays the target page in the same window.
* There is no need to assign special keyboard functions using this code.

## Accessibility
There is not HTML property for breadcrumbs. So to help make them usuable for screen readers, it is recommended that these guidelines are followed.
* Use the ```<nav>``` property to call out the navigational element.
* Use area labels to name both the element as a whole ```<nav aria-label="breadcrumbs">``` and to show the current page ```<li aria-current="location">```
* Make the divider a decorative element by putting it inside the CSS.

## Code
### HTML
```html
  {% include patterns/breadcrumb/breadcrumb.md %}
  ```

### SCSS
  _Note link color and styling is consistent with global styles._  
```scss  
  {% include /patterns/breadcrumb/breadcrumb.scss %}
  ```
