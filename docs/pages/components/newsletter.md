---
layout: page
title: SAMHSA Newsletter
category: component
permalink: "/newsletter/"
---

## Overview
The new SAMHSA newsletter module is meant to be a fast, 2-step signup process for SAMHSA users. Using this form users can enter their address and then they are redirected to a form to choose which newsletters to subscribe to.

{% include /patterns/newsletter/newsletter.md %}

### Functionality
**Input Box**
User is able to enter their email address in the input box.
[Read more about form specification]({{ site.url }}/forms)

**Submit Button**
OnClick / On Tap button system displays the [mailchip signup](https://samhsa.us4.list-manage.com/subscribe?u=d0780dc94825e65acd61c17dc&id=ee1c4b138c) form with the email address prefilled with the address the user entered.

<a name=“code”></a>
### Code
### HTML
```html
  {% include /patterns/newsletter/newsletter.md %}
```

### SCSS
```scss
  {% include /patterns/newsletter/newsletter.scss %}
``
