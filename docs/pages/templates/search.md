---
layout: page
title: Search
category: templates
permalink: "/search/"
---
The follow specifications detail how the components of a search widget and results page function. These are the building blocks needed to create any search experience for the SAMHSA websites.  This specification will be updated with content type and taxonomy once those decisions have been made for SAMHSA's global search to serve as an example implimentation.


## Contents
- [Search Widget](#widget)
- [Page Load](#load)
- [Search Header](#head)
- [Search Options](#options)
- [Search Listings](#list)
- [Filter Accordion](#accordion)
- [Small Screen Filter Accordion](#small)
- [Filter Type: Date Range](#date)
- [Filter Type: Single Select](#single)
- [Filter Type: Multi-Select](#multi)
- [Filter Type: Multi-level](#multi-level)
- [Filter Type: Location](#location)
- [Pagination](#paging)
- [Printing Styles for Search](#priting)



<a href="widget"></a>
{% include /patterns/search/search-widget.md %}

<a href="load"></a>
{% include /patterns/search/default-page-load.md %}

<a href="head"></a>
{% include /patterns/search/search-header.md %}

<a href="options"></a>
{% include /patterns/search/search-options.md %}

<a href="list"></a>
{% include /patterns/search/listing.md %}

<a href="accordion"></a>
{% include /patterns/search/search-accordion.md %}


<a href="small"></a>
{% include /patterns/search/small-filter.md %}

<a href="date"></a>
{% include /patterns/search/date-range.md %}


<a href="single"></a>
{% include /patterns/search/single-select.md %}


<a href="multi"></a>
{% include /patterns/search/multi-select.md %}

<a href="multi-level"></a>
{% include /patterns/search/multi-level.md %}

<a href="location"></a>
{% include /patterns/search/location.md %}

<a href="paging"></a>
## Pagination
See: [Pagination]({{ site.url }}/pagination/) specification

<a href="priting"></a>
## Printing Search
When priting search pages, it is important to conserve paper and only print the items necessary for the experience. Follow global printing rules and only print the SAMHSA logo in the header and the footer should only include the date printed and page numbers if over one page.

Search functionality **does not** print. This includes the Search Page title, search options, search widget, and filters.

What Prints:
- The page title is the "Search Return" text. This is set to 24px.
- List items in view
  - List title is 18px
  - List content (Source, Date, Summary) is 12px


## View Full Page Designs
  <div class="modal-content">
    <p>
      <label class="btn" for="modal-1">view large screen search</label>
      <label class="btn btn--blue" for="modal-2">view small screen search</label>
    </p>
  </div>


  <div class="modal-elements-wrapper">
  <input class="modal-state" id="modal-1" type="checkbox" />

  <div class="modal">
    <label class="modal__bg" for="modal-1"></label>
    <div class="modal__inner">
      <label class="modal__close" for="modal-1"></label>
      <h2>Large Screen Search Results</h2>
      <p><img src="../assets/img/search/lg-search.png" alt="" /></p>
    </div>
  </div>

  </div> <!--End wrapper-->

  <div class="modal-elements-wrapper">
  <input class="modal-state" id="modal-2" type="checkbox" />

  <div class="modal">
    <label class="modal__bg" for="modal-2"></label>
    <div class="modal__inner">
      <label class="modal__close" for="modal-2"></label>
      <h2>Large Screen Search Results</h2>
      <p><img src="../assets/img/search/sm-search.png" alt="" /></p>
    </div>
  </div>

  </div> <!--End wrapper-->
