---
layout: page
title: Resource Center Detail Template
category: templates
permalink: "/resource-center-detail/"
---



## Contents
- [Breadcrumb](#breadcrumb)
- [Left Navigation](#nav)
- [Page Content](#page)
- [Tags](#tags)


<a href="breadcrumb"></a>
## Breadcrumb
Resource pages use the standard breadcrumbs. Find out more about [breadcrumb]({{ site.url }}/breadcrumb-sm) pattern.

<a href="nav"></a>
## Left Navigation
The left navigation is visiable on this template -- however, the detail pages are not represented in the navigation. (See the [teritary nav]({{ site.url }}/tertiary-nav) pattern for more information.

<a href="page"></a>
## Page Content

Page Title | H1
Resource Cover | image | optional | 50% float left
Resource Description | plain text | 450 characters max
Authoring Agency | content = "Authoring Agency: {agency name}" | Label is bold
Resource Link | content = "See item in {resource destination}" fa-angle-double-right |  see notes below
Download Link | button | Button Label = fa-download "Download" | PDF Size = "PDF ({pdf size})
Body Content | rich text | optional

### Authoring Resource Link/PDF 
Author's can either link to a resource or they can connect a PDF to the page. (This should be represented through a dropdown option the authoring environment)
**Link** Author selects the choice for link through the dropdown. Then enters the url in the provided field & enters the resource destination name in the provided field.
**PDF** Author selects the choice for pdf through the dropdown. Then uploads the pdf. The system determins the pdf size for display.

### Functionality
- OnClick/OnTap/OnEnter of link - system displays destination link in the same window for .gov or .mil sites, in a new window for any other sites.
- OnClick/OnTap/OnEnter of button - system downloads pdf in accordance to browser defaults.


<a href="tags"></a>
## Tags

Module title | h4 | content = "Other Resources Like This"
Tags | buttons | for each child taxonomy term a button is displayed with the term as its name.

### Functionality
- OnClick/OnTap/OnEnter of button - the resource landing page is displayed in current window with the results pre-filtered with the associated term


**Examples**

View on Abstract

[Detail Page Examples](https://share.goabstract.com/c4c8d08c-9e66-40f6-835d-2d6fbc0d1aea?sectionId=36f500d4-6933-468b-9550-895a5b4224ef) on Abstract 
