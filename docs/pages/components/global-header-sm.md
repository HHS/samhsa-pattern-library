---
layout: page
title: Global Header - Small Screens
category: component
section: global-component
permalink: "/global-header-sm/"
---

## Overview
This global component applies to mobile (small & medium screens) versions of the SAMHSA website. (View the [desktop version]({{ site.url }}global-header-lg).) The small mobile has a standardized header, search, and menu.

**Contents:**
- [Header Design](#head)
- [Search in Open State](#search)
- [Menu](#menu)
- [Default Submenu](#submenu)
- [Submenu Find Treatment](#location)
- [Submenu About](#about)
- [Accessibility & Multidevice](#access)
- [Table of Menu Links](#table)

<a name="head"></a>
## Small Header
The small header fills the full width of the brower window.
1. **Top Hat:** contains HHS logo and name
2. **Menu** Shows icon and label. (see [menu section](#menu) below for functionality)
3. **Logo** SAMHSA logo
4. **Search** Shows icon and label (see [search section](#search) below)

![header](../assets/img/header/sm/header.png)

<a name="search"></a>
## Search
**Functionality**
**Closed State**
- OnTap of search icon and title, the search slides open beneath the header.
**Open State**
Global Search / Local Search
   On the SAMHSA main site, this search box is used to search the global main site. However, for some sites the search uses a local search, for instance on the Data Page and the SAMHSA store. This difference is decided on a case by case bases. (see the [search widget pattern]({{ site.url }}search)) for more information).
- OnTap of the icon and title or of the page below the search -- the search slides closed.

![search open](../assets/img/header/sm/search-open.png)

<a name="menu"></a>
## Menu
**Functionality**
The top two levels of content matches the primary and secondary level of the deskop menu (see [table below](#table) for links). From the tertiary level down, the menu follows the sitemap. The user is able to navigate from the top level of the site to the bottom. When the user opens the menu, the system will show them the menu based on their current position.

1. Menu Header
**Closed State**
OnTap of the menu icon and title, the menu slides from the right into the screen.
**Open State**
The menu area should be the full length of the page and 85% of the width -- with a 15% negative space with a darkened transparent background. This negative space is hyperlinked as a close button.
_The user should not be able to interact with anything below the menu when the menu is opened_
- Current Page bar -- shows displace location of current page.
- Close button. OnTap of "close" button the menu will close displaying the page.
- Negative Space. OnTap of space outside the meu, the menu will close displaying the page
- Title link. OnTap of a title, system displays the target page in the current window.
- Arrow link. For menu itmes that contain subpages, and arrow link is provided to the right of the title. OnTap of arrow, the menu slides right to the level below.

### Menu Menu
![sm-menu](../assets/img/header/sm/sm-menu.png)

<a name="submenu"></a>
### Submenu
**Added Fuctionality**
- Back Button. OnTap of the "back" button, the menu slides left to one level above the the current menu section.
_Example shows the Data Page menu_

![Data Menu](../assets/img/header/sm/data.png)

<a name="location"></a>
### Find Treatment Menu
- A paragraphy of introduction text
- A link to each locator with a map icon – (fas fa-map-marker-alt)
  - See table below for link information
- The final link is to view all locators and links to the Find Treatment page.

![Treatment](../assets/img/header/sm/treatment.png)

<a name="about"></a>
### About Menu
In addition to the submenu links…
- Photo of Elinore McCance-Katz, M.D., Ph.D.
- Descriptive text: “Elinore McCance-Katz, M.D., Ph.D., Assistant Secretary for Mental Health and Substance Use”
- Link to biography: “View full biography” - links to https://www.samhsa.gov/about-us/who-we-are/leadership/biographies/elinore-mccance-katz

![About Us Menu](../assets/img/header/sm/about.png)


<a name="access"></a>
<a name="accessibility"></a>
## Accessibility & Multidevice
### Accessibility
?? What is our Accessibility on this menu ??

### Multidevice
This pattern has been specified for small and medium screen sizes. However, full support should be given across breakpoints for both click and keyboard interactions. Users using larger screen devices but with smaller browser windows will experience this pattern. If these users expand their browser to large or extra large breakpoints their expereince show switch to the [large screen]({{ site.url }}global-header-lg) pattern.

<a name="table"></a>

{% include_relative parts/menu-content.md %}
