---
layout: page
title: Tertiary Navigation
category: component
section: global-component
permalink: "/teritary-nav/"
---

## Overview
The Tertiary Nav is displayed in the left rail on the large and medium breakpoints. It is not used on medium and small breakpoints.

![Teritary Nav](../assets/img/header/ter-nav.png)

**Functionality**

OnClick/OnTap of link, system displays target page.

Navigation displays in open state based on current page. For instance, if view a 3rd level page, the navigation will be expanded to show the children of the 3rd level, the siblings of the 3rd level, and the "secondary" section title.

```
/* Section link */
/* level 1 */
.nav-section-link {
  background-color: $ruby;
  font-size: 14px;
  font-weight: bold;
  color: $white;
  padding: 15px;
  margin-bottom: 2px;
}

/* level 2 */
.nav-secondary-link {
  background-color: $smoke;
  font-size: 14px;
  font-weight: regular;
  color: $charcoal;
  padding: 15px;
  margin-bottom: 2px;
  &:active {
    font-weight: bold;
  }
}

/* level 3 */
.nav-tertiary-link {
  background-color: $mist;
  font-size: 14px;
  font-weight: regular;
  color: $charcoal;
  padding: 15px;
  &:active {
    font-weight: bold;
  }
}

/* level 4 */
.nav-quaternary-link {
  background-color: $mist;
  font-size: 14px;
  font-weight: regular;
  color: $charcoal;
  padding: 15px 0px 15px 30px;
  &:active {
    font-weight: bold;
  }
}
```
