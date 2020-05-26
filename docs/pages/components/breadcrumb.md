---
layout: page
title: Breadcrumbs
category: component
section: global-component
permalink: "/breadcrumbs/"
---


<nav class="breadcrumb" aria-label="breadcrumbs">
  <ol>
    <li><a href="/"> Home </a></li>
    <li><a href="/grandparent"> Grandparent </a></li>
    <li><a href="/grandparent/parent"> Parent </a></li>
    <li aria-current="location"> Current </li>
  </ol>
</nav>

## Overview
Breadcrumbs are used to help users navigate the SAMHSA website.

## Usage
Breadcrumbs are used on breakpoints large and greater. The are displayed on all pages with the exception of Home and Search.

## Functionality
* All pages in the breadcrumb are links accept the current page.
* OnClick or OnTap of link, system displays the target page in the same window.
* There is no need to assign special keyboard functions using this code.

## Accessibility
There is not HTML property for breadcrumbs. So to help make the usuable for screen readers, it is recommended that these guidelines are followed.
* Use the ```<nav>``` property to call out the navigational element.
* Use area labels to name both the element as a whole ```<nav aria-label="breadcrumbs">``` and to show the current page ```<li aria-current="location">```
* Make the divider a decorative element by putting it inside the CSS.

## Code
### HTML
```
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ol>
    <li><a href="/"> Home </a></li>
    <li><a href="/grandparent"> Grandparent </a></li>
    <li><a href="/grandparent/parent"> Parent </a></li>
    <li aria-current="location"> Current </li>
  </ol>
</nav>
```

### SCSS
_Note link color and styling is consistent with global styles._
```
.breadcrumb  ol {
    padding: 10px 16px;
    list-style: none;
    li {
      display: inline;
      font-size: 14px;
    }
    li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
  }
 }
 ```
