---
layout: page
title: Text Input
category: elements
permalink: "/text-input/"
---

## Overview
Text input fields allows users to enter any combination of letters, numbers and symbols. Text inputs can span single or multiple lines. It's recommended that a character count be set for each field, especially multi-line boxes.

{% include /patterns/text-input/text-input.md %}

**Contents**
- [Usability Guidelines](#usability)
- [Accessibility](#accessibility)
- [Validation](#validation)
- [Code](#code)

<a name="usability"></a>
### Usability Guidelines Rules
Use an appropriate length  for input. For instance, a field for collecting Zip Code information should be single line and only as long as a Zip Code. While a paragraph entry should use a multi-line box.

Users should be able to paste content for ease of filling out information.

Consider context, it may be easier to collect information using a different field type especially on touch screen keyboards.

Make sure each field has a label.

All fields are required unless marked as optional.

Auto-fill, when choosing from specific options, auto-fill options should be made available to the users. For instance U.S. States and Territories.

Avoid splitting numbers such as phone numbers, social security, credit cards into different boxes. Use one field with text masking to help guide the users (see example below).

![text box options](../assets/img/forms/formsfields.png "Text Box Options")

<a name="accessibility"></a>
## Accessibility
Along with the guidance above, be sure to follow the general accessibility requirements from the [USWDS](https://designsystem.digital.gov/components/form-controls/).

<a name="validation"></a>
### Validation
Do not show error messages until after the user has left the field. Validation errors that can be displayed before form submission should be. For example leaving a required field empty after leaving the field.

Provide visual feedback to the state of the current field:
![text box focus](../assets/img/forms/text-box-focus.png "Text Box Focus")
![text box error](../assets/img/forms/text-box-error.png "Text Box Error")
![text box success](../assets/img/forms/text-box-success.png "Text Box Success")

<a name="code"></a>
# Code
### HTML
```html
  {% include /patterns/text-input/text-input.md %}
```

### SCSS
```scss
  {% include /patterns/text-input/text-input.scss %}
```
