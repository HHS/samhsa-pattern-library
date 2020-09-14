---
layout: page
title: Tabs
category: elements
permalink: "/tabs/"
---

## Overview
Tabs are used on many websites when there are several different aspects of information to display. Having a tab setup allows for easier and faster navigation by users and does not tie up the webpage in contrast to having the data for the different aspects listed on page one after the other.

Be aware of how many tabs you have and the ability of the tab to fit on smaller screens. For responsiveness, tabs may be switched to [accordions] on smaller screen sizes. Alternatively, [accordions] may be a more useful approach if there are too many tabs or the tab labels are long. A maximum of 30 characters in length, including spaces if there are two tab choices; a maximum of 25 characters if there are three tabs and so on.

**Contents**
- [Design](#design)
- [Functionality](#functionality)
- [Accessibility](#accessibility)
- [Code](#code)

<a name="design"></a>
## Design
This example is from the Data section of SAMHSA.
{% include /patterns/tabs/tabs.md %}


<a name="functionality"></a>
## Functionality
On default,

- The first tab is selected. In this state the tab is not clickable and appears visibly as disabled. The tabs' content is exposed.
- The other tabs are clickable and appear visibly as clickable.

OnClick / OnTab of a tab, that tab becomes the selected tab, it is not longer clickable and appears visibly as disabled. The tabs' content is exposed.

<a name="accessibility"></a>
## Accessibility
Focus Expectations

- Tabs should activate automatically when receiving focus as long as associated tab panels are rendered quickly.
- Tabs should have visible `:focus` state.
- Tabs should have visible `aria-selected="true"` state

Labelling Expectations

- The element that wraps tabs has role [tablist](https://www.w3.org/TR/wai-aria-1.1/#tablist).
- Each tab has role [tab](https://www.w3.org/TR/wai-aria-1.1/#tab) and is contained within the element with role `tablist`.
- Each tab content panel has role [tabpanel](https://www.w3.org/TR/wai-aria-1.1/#tabpanel).
- Each `tab` has the property [aria-controls](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) referring to its `tabpanel`.
- The active `tab` has [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set to `true` and all other `tab` elements have it set to `false`.
- Each `tabpanel` has the property [aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) referring to its associated `tab`.

Keyboard Expectations

- Space or Enter = Activate Tab
- ← → = Cycles tab focus
- ↑ ↓ = Cycles tab focus (vertical tabs)
- Home = Focus first tab
- End = Focus last tab

<a name="code"></a>
## Code
### HTML
```html
  {% include /patterns/tabs/tabs.md %}
```

### SCSS
```scss
  {% include /patterns/tabs/tabs.scss %}
```
