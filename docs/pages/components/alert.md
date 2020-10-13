---
layout: page
title: Alert
category: alert
permalink: "/alert/"
---

## Overview of Component Group

Alerts are used to convey a message to the user about system status or validation of an action (like a form submission). The user may or may not have to respond to an alert, depending on the message. The message uses different icons and colors to display meaning (i.e. red error vs. green success). They appear near the top of the page in an prominent place, usually above the H1, so the user will not miss it.

**When not to use alerts**
- Destructive interactions - If a user's action may delete work or unsave something, a different component should be used where a user has to confirm the action before doing it (like an overlay).
- Long forms - they should be used together, but not in place on in-line error message next to the exact input boxes where the error occurred, so a user knows where to go and how to fix it.

## Design
SAMHSA has three different alert options: Error, Information and Success. These come with a "large" and "slim" options. See the specifications section for more details

![Alert mockups](../assets/img/alert/alerts.png)

{% include /patterns/alert/alert.md %}

## Code
### HTML
```html
  {% include /patterns/alert/alert.md %}
```

### SCSS
```scss
  {% include /patterns/alert/alert.scss %}
```


### Functionality
Generally, alerts are not interactive, though a link could be included as part of the alert text if necessary.

### Specifications Large Alert

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 0    | Alert select | radio button, *required field | two options for author 1. Large Alert 2. Slim Alert | | This is NOT on the front-end, just an option for the author to choose an alert type that would populate the rest of the fields
| 1    | Heading | H3, *required field | 60 character limit
| 2    | alert type | dropdown, *required field |  | All icons are from font-awesome. Alert: <i class="fas fa-exclamation-triangle"></i> Info: <i class="fas fa-info-circle"></i> Success: <i class="fas fa-check-circle"></i> Refer to design for color options on each alert  | There should be three options an author can choose from via a dropdown - alert, information, success. Once selected, the alert will populate with the appropriate icon and color.
| 3    | alert text | rich text, *required field  | 140 character limit| |

### Specifications Slim Alert

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 0    | Alert select | radio button, *required field | two options for author 1. Large Alert 2. Slim Alert | | This is NOT on the front-end, just an option for the author to choose an alert type that would populate the rest of the fields
| 1    | alert type | dropdown, *required field |   | All icons are from font-awesome. Alert: <i class="fas fa-exclamation-triangle"></i> Info: <i class="fas fa-info-circle"></i> Success: <i class="fas fa-check-circle"></i> Refer to design for color options on each alert  | There should be three options an author can choose from via a dropdown - alert, information, success. Once selected, the alert will populate with the appropriate icon and color.
| 2    | alert text | rich text, *required field | 280 character limit | |

### Accessbility
Colors are part of the SAMHSA palette. Icons are from font-awesome.

### Authoring
The author should have the ability to select an alert type as the first option on the backend - two radio buttons would suffice between "Large Alert" and "Slim Alert" - this would populate the rest of the page with the fields for either Large Alert or Slim Alert. The only field difference is a heading for large alert, and the character count (140 for large, vs. 280 for slim) for the main alert text in the rich text input box.
