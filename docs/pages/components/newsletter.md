---
layout: page
title: SAMHSA Newsletter
category: component
section: component
permalink: "/samhsa-newsletter/"
---

## Overview
The new SAMHSA newsletter module is meant to be a fast, 1-step signup process for SAMHSA users. Using this form opts users into all newsletter automatically. Note: users should be able to use a manage newsletters at the bottom of all newsletter to modify this enrollment.

**Small & Medium Screen Footer**

![Newsletter small screen](../assets/img/footer/sm-newsletter.png)

**Large & Extra Large Screens**

![Newsletter large screen](../assets/img/footer/lg-newsletter.png)

### Functionality
**Input Box**
User is able to enter their email address in the input box.
[Read more about form specification]({{ site.url }}forms)

**Submit Button**
OnClick / On Tap button validates that the email address is valid.
- If the email address is empty or not valid -- display error (in accordance with the specification for error handling)
  - "Please enter your email address"
  - "Your email address is not right"
- If the email address is correct. The system process the email address.
  - The user is opted in to all SAMHSA newsletters.
  - The system displays the success message
[Read more about button specification]({{ site.url }}buttons)

### Success Message

**Small & Medium Screen Footer**

![Success small screen](../assets/img/footer/sm-newsletter-success-state.png)


**Large & Extra Large Screens**

![Success large screen](../assets/img/footer/lg-newsletter-success-state.png)
