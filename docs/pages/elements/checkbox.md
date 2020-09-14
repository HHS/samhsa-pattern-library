---
layout: page
title: Checkbox
category: elements
permalink: "/checkbox/"
---

## Overview
Checkboxes allow users to select one or more options from a visible list.

{% include patterns/checkbox/checkbox.md %}


**Contents**
- [Functionality](#functionality)
- [Usability Guidelines](#usability)
- [Accessibility](#accessibility)
- [Code](#code)

<a name="functionality"></a>
## Functionality
The default state should have nothing selected.
OnClick/OnTap, checkbox goes between selected and unselected state.

<a name="usability"></a>
## Usability Guidelines
Both box and label should be part of the clickable space.

There should be enough space between items to make them easily tap-able on touch screen devices.

List should always be displayed vertically.

Try to keep this list on short (not more than a can be seen on a mobile screen). If there are a lot of options try grouping types of items together to create shorter list.

**When to choose something else**
- If there can only be one selection use a [radio buttons]({{ site.url }}/radio-buttons) or [dropdown]({{ site.url }}/dropdown)
- If there is only a binary option, like yes & no, consider using a [toggle]

<a name="accessibility"></a>
## Accessibility
Surround a related set of checkboxes with a `<fieldset>`. The `<legend>` provides context for the grouping. Do not use fieldset and legend for a single check.
The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with `position: absolute; left: -999em`.
Each input should have a semantic id attribute, and its corresponding label should have the same value in it’s `for` attribute.


<a name="code"></a>
## Code
### HTML
```html
  {% include patterns/checkbox/checkbox.md %}
```

### SCSS
```scss
  {% include patterns/checkbox/checkbox.scss %}
```
