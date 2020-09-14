---
layout: page
title: Resource Center Template
category: templates
permalink: "/resource-center/"
---

The resource center template should be used for sites that list out resources such as the Evidence Based Practices Resource Center (EBRPC) and Disaster Behavioral Health Information Series (DBHIS). The list is a filterable and searchable index that links users to publications or resources. Detail pages are available to house any resource that needs to live with in the respective center, otherwise the list will point directly to item.

## Contents
- [Page Load](#load)
- [breadcrumb](#breadcrumb)
- [Page Header](#header)
- [Search Bar](#bar)
- [Filters](#filters)
- [Search Header](#search)
- [Mobile Search and Filter Accordion](#mobile)
- [List Item](#item)
- [Pagination](#pagination)
- [Full Page Example](#example)


## Content Specifications
<div class="accordion">
    <div class="option">
      <input type="checkbox" id="toggle1" class="toggle" />
      <label class="title" for="toggle1">Open to view Content Specs
      </label>
      <div class="content">
        <p>_@Leake to complete_</p>
      </div>
    </div>
</div>

<a href="load"></a>
## On Page Load
When the page is first loaded, content load in an unflitered state.
- **Sort** - If available, items are sorted first by _featured_ and the by _most recent_. If _featured_ doesn't exist, sort by _most recent_. The sort drop down displays either "Featured Resources" or "Latest Resources" according to which of these two conditions apply. (see more about [sort](#search) below)
- **View** - at default 15 items are shown on page. View drop down displays "15".(see more about [view](#search) below)

<a href="breadcrumb"></a>
## Breadcrumb

Resource pages use the standard breadcrumbs. Find out more [about breadcrumbs]({{ site.url }}/breadcrumbs).

<a href="header"></a>
##  Page Header
![header](../assets/img/resource-center/page-header.png)

The page header consist of:
1. Page Title - H1
2. Page Description - body text
3. Navigational links - (Optional) separated by "\|".

<a href="bar"></a>
## Search Bar
![bar](../assets/img/resource-center/search-bar.png)

The search bar is centered at 70% width of the content area.
### Fields:
- Input \| Content: "Search Our Resources"
- Submit Button \| Content: "Submit"

### Functionality:
- OnClick / OnTap of button, system uses the content of the input to search the collection. The resource list is updated to show matching results
**_@Leake -- What are we searching against?_**
_(see more about [form field specifications]({{ site.url }}/forms))_


<a href="filters"></a>
## Filters
TBD


<a href="search"></a>
## Search Header
![search header](../assets/img/resource-center/search-header.png)

Search header contains:
1. Section Title - H3
2. Sort - OnSelect, system displays the result set in the order that matches the users choice
  - Featured
  - Most Relevant 
  - Most Recent
  - Oldest
3. View - OnSelect, system displays the number of items in the result set that matches the users choice
  - 15 (default)
  - 50
  - 100


<a href="mobile"></a>
## Mobile Search and Filter Accordion
On Small screens, search, filters, sort and view are all hidden behind an accordion.
- OnClick or OnTap accordion slides to open or closed state and icon displays new state
_see [accordions]({{ site.url }}/accordion) for more information_


*filter in closed state*

![filter closed](../assets/img/resource-center/mobile-filter-closed.png)


*filter in open state*

![filter closed](../assets/img/resource-center/mobile-filter-open.png)



<a href="item"></a>
## List Item
Each return item contains:
1. Resource Title - H3 - links to source
2. Sub-title - H6 (optinal)
3. Publication Date - body text
4. Resource Description - body text
5. CTA - url link to source - content =  "Get this Resource"
- for 508 accessbility - add aria-label to "Get this {title}"
6. Featured Thumbnail -
  - image should be authored at 750 pixels then resized for use.
    - 25% of container on large screen
    - 100% of width of container on small screens
  - for 508 accessibilty - images are for display only and alt text should be set to null.

**Examples**
<table>
  <tr>
    <td>EBPRC large screen</td>
    <td><img src="../assets/img/resource-center/return-item-ebrc.png"></td>
  </tr>
  <tr>
    <td>EBPRC small screen</td>
    <td><img src="../assets/img/resource-center/mobile-return-item-ebrc.png"></td>
  </tr>
  <tr>
    <td>DBHIS large screen</td>
    <td><img src="../assets/img/resource-center/return-item-dbhis.png"></td>
  </tr>
  <tr>
    <td>DBHIS small screen</td>
    <td><img src="../assets/img/resource-center/mobile-return-item-dbhis.png"></td>
  </tr>
</table>



<a href="pagination"></a>
## Pagination

Resource pages use the standard pagination. Find out more [about pagination]({{ site.url }}/pagination).

<a href="example"></a>
## Full Page Example
**EBPRC**
<table>
  <tr>
    <td><img src="../assets/img/resource-center/thumb-ebprc-concept.png"></td>
    <td><img src="../assets/img/resource-center/thumb-sm-ebprc-concept.png"></td>
  </tr>
  <tr>
    <td>large screen</td>
    <td>small screen</td>
  </tr>
</table>

**DBHIS**
<table>
  <tr>
    <td><img src="../assets/img/resource-center/thumb-dbhis-concept.png"></td>
    <td><img src="../assets/img/resource-center/thumb-sm-dbhis-concept.png"></td>
  </tr>
  <tr>
    <td>large screen</td>
    <td>small screen</td>
  </tr>
</table>
