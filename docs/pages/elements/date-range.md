---
layout: page
title: Date Range
category: elements
permalink: "/date-range/"
---

## Overview
Date ranges are used most often as a filter for search results, but they can be useful in other instances.

{% include /patterns/date-range/date-range.md %}


**Contents**
- [Functionality](#functionality)
- [When used for forms](#formuse)
- [When used for search](#searchuse)
- [Accessibility](#accessibility)
- [Code](#code)

<a name="functionality"></a>
## Functionality

<a name="formuse"></a>
### When used for forms
*Note that even though the icon appears visibly within the input box, it is it's own element.*

Please see date input specification on to construct each date field.

<a name="searchuse"></a>
### When used for search
On  Default,

- From date is set to the earliest collection date of all records.
- To date is set the the current year.

On select of either year, the result set is filtered to new date range.

<a name="accessibility"></a>
## Accessibility
Group these two inputs together with <fieldset> and describe the group with <legend>.

<a name="code"></a>
## Code
### HTML
```html
  {% include /patterns/date-range/date-range.md %}
```

### SCSS
```scss
  {% include /patterns/date-range/date-range.scss %}
```
