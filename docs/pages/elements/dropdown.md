---
layout: page
title: Dropdown
category: elements
permalink: "/dropdown/"
---

## Overview
Dropdowns allow users to select one option from a list of options.

Dropdown list should be using sparingly. If the list is fewer than 7 options, it may be better to use [radio buttons]. If more than 15, it may be better to use a [text field] with auto-fill functionality. If the user is to select multiple items, [checkboxes] should be used instead.

The default option of the select menu should be language directing the user, for instance "Select a State".

{% include /patterns/dropdown/dropdown.md %}

**Contents**
- [Accessibility](#accessibility)
- [Functionality](#functionality)
- [Dropdown as Select Menu](#select)
- [Accessibility](#accessibilityselect)
- [Functionality](#functionalityselect)
- [Code](#code)


<a name="accessibility"></a>
## Accessibility
Always use a label, do not rely on the default option to guide the user.
Avoid using JavaScript for automatically submitting, because this disrupts screen readers.

<a name="functionality"></a>
## Functionality
OnHold, select menu displays options list.

OnClick/OnTap of option item, select menu returns to closed state and displays selected option

<a name="select"></a>
## Dropdown as Select Menu
In general, dropdowns should not auto-submit information, except when they are being used as navigation menus.

<a name="accessibilityselect"></a>
### Accessibility
[A11-Nutrition Cards](https://davatron5000.github.io/a11y-nutrition-cards/components/menu) has a write up on how to make sure these navigation menus are accessible.

<a name="functionalityselect"></a>
### Functionality
OnHold, select menu displays options list.

OnClick/OnTap of option item, system displays destination target or page.

## Code
### HTML
```html
  {% include /patterns/dropdown/dropdown.md %}
```

### SCSS
```scss
  {% include /patterns/dropdown/dropdown.scss %}
```
