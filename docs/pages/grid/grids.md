---
layout: page
title: The SAMHSA Grid
category: grids
permalink: "/grids/"
---

→ USWDS - [Layout Grid](https://designsystem.digital.gov/utilities/layout-grid/)

- Uses a flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a twelve-column system.
- The grid supports nesting.
- The grid can be applied in either the HTML or in the SASS.
- Grid variables can be adjust in the theme-settings

## Requirements for the SAMHSA grid
#### Wider screen
We will be using a wider screen size for the SAMHSA site. The body space will be 1440 pixels in width. 

That being said... we still want to make sure that reading widths are accessible and user friendly. This should be no more than 900 pixels. So we'll need to be sure to design to keep that in mind.

- Theme settings will have to be update to support this width.
- Add an desktop large breakpoint @  ≥1400px
- Options to keep content pages with the right reading well

#### Truly responsive
The best approach would be to let the content define its own needs for the provide space. Rather than having strict breakpoints. This can be accomplished by assuring that the header/footer changes according to breakpoints – but having the content change according to template. The fact that they are using flexbox is great... we can use columns where and when we need to – or ignore them completely. The point is to make sure that there are no content layout failures between breakpoints. "There is no grid – be the grid".

#### Header / Footer
Best to just have two modes... one tablet and down / desktop and up. 
Also, color can be 100% width to make it stretch full screen.

## Grid Breakpoints
- Smallest ≥ 0
- Moblie ≥ 320
- Mobile Large ≥ 480
- Tablet ≥ 640
- Desktop ≥ 1024
- Desktop large @  ≥1400px
- Print @ Letter

- Paragraph maxwidth - 72ex (.measure-5)


### Layouts:
Please note: these layouts only have the desktop & mobile breakpoints. We still have to experiment to for the tablet and desktop large.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Layouts</th>
    <th class="tg-0pky">Properties</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky"><img src="../assets/img/grid/full-width.png"></td>
    <td class="tg-0pky">A: Header<br>B: Body (max-width:72ex)<br>C: Footer</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="../assets/img/grid/left-rail-1.png"></td>
    <td class="tg-0pky">A: Header<br>B: Left Rail Navigation<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 columns - large<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;doesn't display - small<br>C: Body<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 columns - large<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 columns - small<br>D: Footer<br> </td>
  </tr>
</tbody>
</table>