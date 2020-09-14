---
layout: page
title: Date Picker
category: elements
permalink: "/date-picker/"
---

## Overview
The date input field is used to allow users to insert a date, usually in a form. This design shows using a single box with label and masking to help the users identify what the date structure should be. It includes optional date picker - on touch screen devices this would use the date scroll wheel. Even if date picker is provided, the user will still be able to enter the numbers directly into the input field.

*Please note that the guidance in the USWDS suggests using multiple fields for dates. But this guidance is in contradiction to previous guidance on using a singular input for numbers. Masking helps to guide users on how to enter the date in the right way, while at the same time keeping the field as a single unit.*

**Avoid Splitting Numbers**
Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.

{% include /patterns/date-picker/date-picker.md %}



**Contents**
- [Functionality](#functionality)
- [Calendar Option](#calendar)
- [Accessibility](#accessibility)
- [Code](#code)

<a name="functionality"></a>
## Functionality
OnEntry into the field, the field is set to focus. Masking disappears as user types the required content. Only numbers are accepted for entry.

<a name="calendar"></a>
## Calendar Option
*Note that even though the icon appears visibly within the input box, it is it's own element.*

OnClick of calendar icon (desktop devices). Calendar is displayed beneath the field. Next and previous arrows allows the user to navigate to the chosen month/year. OnClick of day, the month, day, and year are entered into the date field.

OnTap of calendar icon (mobile devices) make use of the native scroll wheel to allow user to choose the date.

![date picker](../assets/img/forms/date_wheel.png "Date Picker")

<a name="accessibility"></a>
## Accessibility
Be sure to follow the [guidelines]({{ site.url }}/forms) for all text inputs.

1. Don’t force people to use the date picker. Make it possible to write directly in the input field as well. And make sure the required format is specified in the label.
2. Make it possible to navigate with a keyboard (here is where most fail). For example by tabbing to the calendar and using arrow keys to pick the right date.
3. Don’t hide the calendar button from screen readers. We’ve met a few clients who considered setting aria-hidden=”true”, forcing screen reader users to input directly in the text field. But that’s not a great idea. Some screen reader users use a combination of sight and screen reader, so hiding the calendar button and calendar view for screen readers will harm their user experience. Make the actual date picker accessible instead.
4. Make sure that the buttons and icons in the calendar view have proper labels so that they get correctly read by screen readers. For example, the dates of the month should not just be “1”, “2″ etc. They should be read “1 January, Thursday” or something similar. You can use [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) for this.


<a name="code"></a>
## Code
### HTML
```html
  {% include /patterns/date-picker/date-picker.md %}
```

### SCSS
```scss
  {% include /patterns/date-picker/date-picker.scss %}
```
