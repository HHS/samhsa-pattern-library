---
layout: page
title: Tooltip
category: elements
section: elements
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

![closed state](../assets/img/forms/tooltip_closed.png "Closed State")

**Open state**

![open state](../assets/img/forms/tooltip_open.png "Open State")

<a name="functionality"></a>
## Functionality
OnHover/OnTouch/OnFocus tooltip shows in open state.

<a name="snippets"></a>
## Code Snippets
**html**
```
<i class="fas fa-question-circle"></i>
```

**scss**
*Tooltip Icon*
font-size: 22px;
color: #A3A7A9;

**scss**
*Tooltip Overlay*
font-family: Tahoma, Verdana, Segoe, sans-serif;
font-size: 12px;
font-weight: regular;
line-height: 15px;
background-color: #FFFFFF;
color: #4A4A4A;
padding: 20px;
border: solid 1px #DDDDDD;
