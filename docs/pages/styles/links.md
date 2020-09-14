---
layout: page
title: Links
category: styles
permalink: "/links/"
---

### Contents
- [Body Text](#body)
- [External Links](#ext)
- [Header Text](#header)
- [PDF Downloads](#pdf)
- [Image Links](#images)
- [Cards](#cards)
- [Buttons](#buttons)
- [Menu Links](#menu)
- [Footer Links](#footer)


<a href="body"></a>
## Body Text
Link styles for body text are:
- family: Tahoma 400
- size: 15px
- line Height: 20px
- color: $sapphite (#1F419A)
- text-decoration: underline;
OnHover
- color: $ruby (#A82D2B)
- text-decoration: underline;

**Accessibility**
- It is OK to link a full sentence, but avoid longer.
- Use judgment when linking full URLs. When linking a URL, consider users who must speak it out loud and who must listen to a screen reader announce it.
- Avoid link text like “Click Here,” “More,” and “Read More.” These kinds of links can be confusing when a screen reader reads them out of context.
 - In the case where these terms are used in cards or search returns, `aria-label` should be used to describe the full textual content. For example, "Read more about {title}".

 **Analytics**
 Tracking user engagement on pages is key to understanding user interest in a given action. All links should be considered for analtic tagging.

<a href="ext"></a>
## External Links
Reference: [https://digital.gov/resources/required-web-content-and-links/?dg#external-links](https://digital.gov/resources/required-web-content-and-links/?dg#external-links)

The US. Federal government "website" is actually a collection of many websites each representing a department, organization, or initiative of the government. Even though each site has different branding and experiences, they should all be viewed this way as a collection of a single entity. Therefore any site that uses a `.gov` or `.mil` namespace is a federal property.

Any site using other namespaces is considered outside of the federal government and is "is not endorsed by the federal government and is not subject to federal information quality, privacy, security, and related guidelines". Agencies must clearly state, when linking to a non-federal site, that the link is leaving the government space.

The policy states that agencies should choose the "best approach to identify external links to users in a way that minimizes the impact on the usability of their websites and digital services." The approach below is the recommended practice by the ICF Nex+ gov user experience and accessibility team.

### Recommended practice
![External Link Diagram](../assets/img/links/external-link-diagram.png)

1) External Link text

This should like directly to the external site with aria-labels for screen-readers to inform them that they are going to a non-government site, for example `<a href="http://somesite.com" aria-label="External link to Some Site"> Some Site </a>`

2) Visual icon to indicate that the link is external

This links directly to the exit disclaimer. This could be done via pop-up or by directed them to another page. Again, aria-labels are used to inform screen-readers the purpose of the icon.

Font Awesome is the icon set recommended by the USWDS. The particular icon used here is `far fa-external-link` . So, for example `<a href="http://link-to-disclaimer" aria-label="Link to read more about our exit disclaimer">[image] </a>`

Font Awesome can be used as a font, SVG, or a PNG. Some sites have had issues with SVGs in Internet Explorer. But also, be aware of these rules for making SVG visible to screen readers.

**SVG graphics:**

- SVG graphics can be referenced in the src attribute of an <img> element like other image formats (PNG, JPEG, GIF). In this case, the examples of [this tutorial](https://www.w3.org/WAI/tutorials/images/) can be used with SVG as well.
- As SVG images consist of tags like HTML, their code can also be used in HTML5 directly. In this case you can provide a text alternative in a <title> element within the SVG image. To improve accessibility support, that title should be referenced from an aria-labelledby attribute of the <svg> element, for example: <svg aria-labelledby="svgtitle1"> <title id="svgtitle1">Settings</title> [other svg code] </svg>


<a href="header"></a>
## Header Text as link
We headers are used as links the header use these styles. Note, there is no underline on default, only on hover or focus.
Link styles for body text are:
- family: Tahoma 400
- size: 15px
- line Height: 20px
- color: $sapphite (#1F419A)
- text-decoration: none;
OnHover
- color: $ruby (#A82D2B)
- text-decoration: underline;


## File Download Links
Download links include the file type and size.

Example - [Download this document (PDF \| 12.5KB)](#)


<a href="images"></a>
## Image Links
Use of images as links should be avoided where possible. Instead an image should be combined with a clear call to action (cta) in the form of a text link or button.
**Accessibility**
The cta should either contain example textual the link defination or through use of an `aria-label`.
For instance:
- `<a href="#"> Learn more about the importance of mental health for teenagers</a>`
- `<a href="#" aria-label="Learn more about the importance of mental health for teenagers">Learn More</a>`
The second example here is for use in context of a pattern like a search return or a card.
**Alt Text** The image should be set to null for the alt-text in these cases since it is being used as decoration.
**IF**, however, the image is used as navigation without a text link or button. Be sure to use aria-labels to describe the link destination.

<a href="cards"></a>
## Card Links
Use of cards as navigation is common across the site. A few rules should be followed when using.
- Images are decoration in cards and should have their alt-text set to null
- Titles or buttons should be used to describe the destination
- The title and or button should follow regular link rules listed above for visual display.
- The full card is clickable/tapable
_for more information about [cards]({{ site.url }}/cards), please see the cards specifications._

<a href="buttons"></a>
## Buttons
Please, see the [buttons]({{ site.url }}/buttons) specifications.

<a href="menu"></a>
## Menu Links
Please see more about the visual aspects of links for each menu
- [Desktop Header]({{ site.url }}/header-lg) (Primary & secondary nav)
- [Mobile Header]({{ site.url }}/header-sm) (Mobile menu)
- [Tertiary Nav]({{ site.url }}/tertiary-nav)

<a href="footer"></a>
## Footer Links
See [footer spec]({{ site.url }}/footer) for visual treatments of links in the footer.
