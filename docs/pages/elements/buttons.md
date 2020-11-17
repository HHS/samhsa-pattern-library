---
layout: page
title: Buttons
category: elements
permalink: "/buttons/"
---


{% include patterns/buttons/buttons.md %}


**Secondary Button Hover State**

![secondary button hover](../assets/img/buttons/secondary-button-hover.png)

## Overview
Buttons should be used for important actions on your site and for submitting forms. There should be realitively few buttons on a page... please consider when a link is more appropriate.

Buttons generally perform the same way on mobile devices as on desktops, though their size may be increased to ~95% width in the mobile view. Pay especial attention to padding, since buttons should not extend to the edges of the user's mobile device.

(Please see the [USWDS](https://designsystem.digital.gov/components/button/) for more on their guidelines, however, following this guide should keep you in compliancy)

**Contents**
- [Functionality](#functionality)
- [Language](#language)
- [Accessibility](#access)
- [Analytics](#analytics)
- [Buttons with input boxes](#inputs)
- [Code](#code)

<a name="functionality"></a>
### Functionality
- OnHover buttons displays on:hover state.
- onClick/OnTap of button activates desired functionality. Functionality in determined by the context of the button (for example in a search experience or as a link item).
- **Disabled Button** - the disabled button is used to indicate that there is actions on the page that need to happen before the button can be used. The user cannot interact with button. Once the required functionailty has happened on the page, the disabled state should be swtiched with an actionalble button.
- **Buttons for Submitting Forms**
  - onSubmit of button, for validation should occur on all required fields. Please see the [forms specification]({{ site.url }}/forms) for how to deal with displaying errors and error messaging.

<a name="language"></a>
### Language
Button text should be as short as possible and lead with action words that clearly explain what will happen when the button is selected. (For example, Download, Login, Submit)

<a name="access"></a>
### Accessibility
It is critical that buttons conform to Section 508 best practices so that they can be used successfully by everyone. So, contrast of the button and text colors should meet [W3C](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) guidelines and alt text is required for all button text. Note that these buttons, if used as designed, are 508 compliant.

<a name="analytics"></a>
### Analytics Tracking
In general, all buttons should have tracking. This allows analytics for user actions on the site. SAMHSA developers need to ensure that there is some identifying feature on the button such as a click ID or click class. Analytics events are set-up by the HHS analytics team once the web page is deployed.

<a name="inputs"></a>
### Buttons with input boxes
**Input box with single button**
The button is attached to the end of the input box in large spaces -- or stacked on smaller spaces. Examples of this:
- [Search Widget]({{ site.url }}/search-widget)
- [Newsletter Subscribe]({{ site.url }}/samhsa-newsletter)

*example newsletter widget*

Large Screen

![newsletter widget large spaces](../assets/img/buttons/lg-input-button.png)

Small Screen

![newsletter widget small spaces](../assets/img/buttons/sm-input-button.png)

**Input box with multipe buttons**
The input box stands separately while the buttons are grouped together. This is often seen when there are buttons for both submit and cancel.

<a name="code"></a>
## Code
### HTML
```html
  {% include patterns/buttons/buttons.md %}
```
### CSS
```scss
  {% include patterns/buttons/buttons.scss %}
```
