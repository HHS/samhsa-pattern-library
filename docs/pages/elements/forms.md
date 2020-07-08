---
layout: page
title: Forms
category: elements
section: elements
permalink: "/forms/"
---

## Overview
There are a variety of forms across the SAMHSA digital universe.  It is important that the forms have a consistent experience, match SAMHSA branding and follow the guidelines laid out in the [United States Web Design System (USWDS)](https://designsystem.digital.gov/components/form-controls/)

**Contents**
- [Code Snippets](#snippets)
- [Global Rules](#globalrules)
- [Long Forms](#longforms)
- [Required](#required)
- [Accessibility](#accessibility)
- [Writing Effective Labels](#labels)
- [Error States](#error)
- [Form Submissions](#submissions)
- [Parts of a Field](#parts)
- [Form Controls](#controls)
- [Form Templates](#templates)
- [Long Complex Forms](#complex)

<a name="snippets"></a>
### Code Snippets
Throughout the Pattern Library, code snippets are available for use. If you are using the USWDS code base, please use that instead.

<a name="globalrules"></a>
## Global Rules
Forms should always be organized on the page in a way that makes sense cognitively to the users. Group elements like contact or demographic information together (see templates below for common groupings). Vertical alignment of forms, rather than using columns, makes them easy to follow and helps to ensure proper tab order.

<a name="longforms"></a>
### Long Forms
Long forms should be broken down into accordions or paging to help keep the user from being overwhelmed or losing their place. This also makes the forms easier to manage on smaller screen sizes. (Please see the template section for suggestions on long form layouts).

<a name="required"></a>
### Required
In accordance with the [USWDS](https://designsystem.digital.gov/components/form-controls/) all fields are required unless marked as optional.

<a name="accessibility"></a>
### Accessibility
Accessibility issues are addressed within the specification of each element. However creating clean, semantic code, with elements listed in their proper order will help to ensure that they are readable both on-screen and through screen readers. For more on global accessibility guidance please see the [USWDS](https://designsystem.digital.gov/components/form-controls/).

<a name="labels"></a>
### Writing Effective Labels
Accessibility issues are addressed within the specification of each element. However creating clean, semantic code, with elements listed in their proper order will help to ensure that they are readable both on-screen and through screen readers. For more on global accessibility guidance please see the USWDS.

<a name="error"></a>
### Error States
**Use plain friendly language to describe user errors**. Display the particular error next to the field where the error occurred. (see parts of a field) Large forms should also display a message at the top stating the is an error, with the system moving the users view to the top message. (The template section of this guide shows examples of standard errors).

<a name="submissions"></a>
### Form Submissions
Please ensure that once a form passes validation and is submitted, the system displays a success message to the user.

<a name="parts"></a>
### Parts of a Field
Each form element has multiple entities that will likely play a role in its construction. These are:

- Label
- Input field
- Required vs. Optional
- Help Text
- Masking
- Validation
- Error States
- More Information [Tool Tip]({{ site.url }}tooltip)
- Accessibility Rules

Please be aware of these entities as you review each form element.
![Parts of a form field](../assets/img/forms/formsfields.png "Parts of a form field")

<a name="controls"></a>
## Form Controls
- [Text Input]({{ site.url }}text-input)
- [Dropdown]({{ site.url }}dropdown)
- [Checkbox]({{ site.url }}checkbox)
- [Radio Buttons]({{ site.url }}radio-buttons)
- [Date Picker]({{ site.url }}date-picker)
- [Date Range]({{ site.url }}datae-range)
- [Toggle Buttons]({{ site.url }}toggle-buttons)

<a name="templates"></a>
## Form Templates

## Examples of short forms

### Newsletter Signup

**Signup form**

![singup form](../assets/img/forms/signup form.png "Signup Form")

**Success state**

![success state](../assets/img/forms/successstate.png "Success State")

### Functionality
OnSubmit of form, input field is submitted for validation. If the email address is valid then the system records the email in the newsletter system and the displays the success state to the users.

### Error Messaging
In the email address field is blank, display error. **"Please enter your email address"**.

If the email address is malformed, display error. **"Please check that your email address is correct"**.

### Accessibility
Please see each field element for accessibility guidance
- [Text Input]({{ site.url }}text-input)
- [Buttons]({{ site.url }}text-input)

### Feedback
![feedback form](../assets/img/forms/feedback.png "Feedback")

### Functionality
OnSubmit of form, input fields are submitted for validation.

### Error Messaging
If the first, large text field is blank, display error. **"Please enter your feedback"**.

In the Your Name field is blank, display error. **"Please enter your first and last name"**.

If the Your Email field is blank, display error. **"Please enter your email address"**.

If the email address is malformed, display error. **"Please check that your email address is correct"**.

### Accessibility
Please see each field element for accessibility guidance
- [Text Input]({{ site.url }}text-input)
- [Buttons]({{ site.url }}text-input)

### Search Widget
![search widget](../assets/img/forms/searchwidget.png "Search Widget")

Find out more in our Search Box specifications

## Form parts

## Contact information
### Name
![name form](../assets/img/forms/name_form.png "Name Form")

### Functionality
OnClick/OnTap of text fields, users can enter characters

(optional) fields may be left blank

### Error Messaging
The Title and Middle Name fields are optional, and do not need error messages if left blank.

If the First Name field is blank, display error. **"Please enter your first name"**.

If the Last Name field is blank, display error. **"Please enter last  name"**.

### Accessibility
Please see each field element for accessibility guidance
- [Text Input]({{ site.url }}text-input)
- [Buttons]({{ site.url }}text-input)

### Contact
![contact form](../assets/img/forms/contact_form.png "Contact Form")

### Functionality
OnClick/OnTap of text fields, users can enter characters

(optional) fields may be left blank

### Error Messaging
The Phone Number field is optional, and do not need error messages if left blank.

If the Phone Number field is malformed, display error. **"Please check that your phone number is correct"**.

If the Email Address field is blank, display error. **"Please enter your email address"**.

If the Email Address field is malformed, display error. **"Please check that your email address is correct"**.

### Accessibility
Please see each field element for accessibility guidance
- [Text Input]({{ site.url }}text-input)
- [Buttons]({{ site.url }}text-input)

### Address
![address form](../assets/img/forms/address_form.png "Address Form")

### Functionality
OnClick/OnTap of text fields, users can enter characters

(optional) fields may be left blank

### Error Messaging
The Phone Number field is optional, and do not need error messages if left blank.

If the Address field is blank, display error. **"Please enter a street address"**.

If the City field is blank, display error. **"Please enter a city"**.

If the State field is blank, display error. **"Please enter a state"**.

If the Zip field is blank, display error. **"Please enter a Zip Code"**.

### Accessibility
Please see each field element for accessibility guidance
- [Text Input]({{ site.url }}text-input)
- [Buttons]({{ site.url }}text-input)

## Demographic Information

### Gender
![gender form](../assets/img/forms/gender.png "Gender Form")

### Functionality
The four (optional) for gender are: Male, Female, Non-Binary, Other

See [radio buttons]({{ site.url }}radio-buttons) for more information

- For use cases that need multi-select options, use [checkboxes]({{ site.url }}checkbox)

### Accessibility
Please see each field element for accessibility guidance
- [radio buttons]({{ site.url }}radio-buttons)

### Race
![gender form](../assets/img/forms/gender.png "Gender Form")

### Functionality
The options for race use [checkboxes]({{ site.url }}checkbox). Race displays:

- African America
- Alaska Native/American Indian
- Asian
- White
- Native Hawaiian or Pacific Islander

Ethnicity is a yes/no [toggle button]({{ site.url }}toggle-button) asking "Hispanic or Latino". See [toggle button]({{ site.url }}toggle-button) for more information

### Accessibility
Please see each field element for accessibility guidance
- [Checkbox]({{ site.url }}checkbox)
- [Radio buttons]({{ site.url }}radio-buttons)

<a name="complex"></a>
## Long Complex Forms
Forms that are too long can create a heavy cognitive load on the user. Even if the questions are simple, long forms can be overwhelming. They are also harder to use on small screens. Using an accordion or paging can help chuck the information into small bites that make them easier to fill out.

Accordion forms keep the user on the same page and so may be better for loading times. However, a paging form can be created on one page and simulate the feel of turning a page. This would ease the issue of loading times between sections.

![accordion form](../assets/img/forms/accordion_forms.png "Accordion Form")

![paging form](../assets/img/forms/paging_forms.png "Paging Form")
