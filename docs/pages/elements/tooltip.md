---
layout: page
title: Tooltip
category: elements
permalink: "/tooltip/"
---

## Overview
Tooltips are used to give users extra information to users to explain usage of a particular object or tool.  Often tool tips are used in forms to explain to the user why as certain items is being requested, or how the information should be supplied... for example password requirements.

*Be sure to make this component touch screen and screen reader compliant.*

**Contents**
- [Design](#design)
- [Functionality](#functionality)
- [Code Snippets](#snippets)

<a name="design"></a>
## Design
**Closed state**
{% include /patterns/tooltip/tooltip-closed.md %}

**Open state**
{% include /patterns/tooltip/tooltip-open.md %}

<a name="functionality"></a>
## Functionality
OnHover/OnTouch/OnFocus tooltip shows in open state.


<a name=“code”></a>
### Code
### HTML
**closed**
```html
  {% include /patterns/tooltip/tooltip-closed.md %}
```

**open**
```html
  {% include /patterns/tooltip/tooltip-open.md %}
```

### SCSS
```scss
  {% include /patterns/tooltip/tooltip.scss %}
```
