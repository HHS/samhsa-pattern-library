---
layout: page
title: Resource Center Landing Template
category: templates
permalink: "/resource-center-landing/"
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
- OnClick / OnTap of button, system uses the content of the input to search the collection (titles, short description, taxonomy terms). The resource list is updated to show matching results
_(see more about [form field specifications]({{ site.url }}/forms))_


<a href="filters"></a>
## Filters

- Category Filter - uses a dropdown to select. See the "Collections" in the [Taxonomy specifications]({{ site.url}}/resource-center) for child terms.
- Publication Date - uses the [Date Rage Filter]({{ site.url }}/search#date)

All other filters use the [Multi-Select Filter]({{ site.url }}/search#multi). See the [Taxonomy specifications]({{ site.url}}/resource-center) for child items for each filter
- Report Type
- Population
- Source
- Substances
- Conditions


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

OnClick or OnTap accordion slides to open or closed state and icon displays new state
_see [accordions]({{ site.url }}/accordion) for more information_

| *filter in closed state* ![filter closed](../assets/img/resource-center/mobile-filter-closed.png) | *filter in open state* ![filter closed](../assets/img/resource-center/mobile-filter-open.png) |



<a href="item"></a>
## List Item
Each return item contains:
1. Resource Title - H3 - links to source
2. Sub-title - H6 (optional)
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

View On Abstract
- [EBPRC examples](https://share.goabstract.com/c4c8d08c-9e66-40f6-835d-2d6fbc0d1aea?sectionId=fcc83cb1-766d-40c7-bd40-9df9dd3fe411) 
- [DBHIS examples](https://share.goabstract.com/c4c8d08c-9e66-40f6-835d-2d6fbc0d1aea?sectionId=6ad14633-e467-44b9-a312-b57be092c439)
