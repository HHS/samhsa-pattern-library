---
layout: page
title: Radio Buttons
category: elements
section: elements
permalink: "/radio-buttons/"
---

## Overview
Radio buttons allow users to select multiple options from a group of pre-detemined options. This element is typical seen on webforms. If there are more than 7 options, a dropdown would be an alternative to use.

![radio button](../assets/img/forms/radio_button.png "Radio Button")

**Contents**
- [Functionality](#functionality)
- [Usability Guidelines](#usability)
- [Accessibility](#accessibility)

<a name="functionality"></a>
## Functionality
The default state should have the top radio button selected.

OnClick/OnTap, radio button goes between selected and unselected state.

Only one radio button can be selected out at a time. If the user selects an option, the previous option becomes unselected.

<a name="usability"></a>
## Usability Guidelines
Both box and label should be part of the clickable space.

There should be enough space between items to make them easily tap-able on touch screen devices.

List should always be displayed vertically.

Try to keep this list on short (not more than a can be seen on a mobile screen). If there are a lot of options try grouping types of items together to create shorter list.

**When to choose something else**
- If the selection list is more than 7 options  [dropdown]({{ site.url }}dropdown)
- If the user can select multiple options use [checkboxes]({{ site.url }}checkbox)
- If there is only a binary option, like yes & no, consider using a [toggle button]({{ site.url }}toggle-button)

<a name="accessibility"></a>
## Accessibility
- **Use fieldset and legend.** Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- **Use proper labels and attributes.** Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.
- The `title` attribute can replace `<label>`.
