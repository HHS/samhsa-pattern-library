---
layout: page
title: Toggle Button
category: elements
permalink: "/toggle/"
---

## Overview
Toggle fields are buttons used for binary information. The state is either on or off. Good examples are for use in settings options, or in forms for yes or no questions. The benefit of toggles is that they are touch-friendly. Be sure to use cues, both visual and for screen readers, to make clear the difference between the two states.

{% include /patterns/toggle/toggle.md %}

**Contents**
- [Functionality](#functionality)
- [Usability Guidelines](#usability)
- [Accessibility](#accessibility)
- [Code](#code)

<a name="functionality"></a>
### Functionality
OnClick/OnTap of field state changes.

<a name="usability"></a>
### Usability Guidelines
Use a single word for each side of the switch. Most common would be Yes/No or On/Off.

Toggle Fields should have enough space around tap-able touch targets.

Field label should be included in the clickable area.

{% include /patterns/toggle/toggle-with-label.md %}

<a name="accessibility"></a>
### Accessibility
Aria labels should be used here to communicate the toggle state.

- aria-pressed="true"
- aria-pressed="false"

*Read more about how to make this button fully inclusive in this [Smashing Magazine](https://www.smashingmagazine.com/2017/09/building-inclusive-toggle-buttons/) article.*

<a name=“code”></a>
### Code
### HTML
```html
  {% include /patterns/toggle/toggle.md %}
```

### SCSS
```scss
  {% include /patterns/toggle/toggle.scss %}
``
