---
layout: page
title: Typography
category: component
section: styles
permalink: "/typography/"
---
## Typeface
![Tahoma Font Face](../assets/img/tahoma.png)
The current text styles uses [Tahoma](https://www.fonts.com/font/microsoft-corporation/tahoma) as its typeface. Verdana and Segoe are also a part of SAMHSA's font stack.

###Text alignment
While right-aligned, centered, and justified text have their place, most websites benefit from a consistent use of left-aligned text. Justified text, common in print, does not yet display well enough in a web browser to be considered a best practice.

Set type flush left. Type set flush left provides the eye a constant starting point for each line, making text easier to read.

### Responsive Typography
**Modular Scale**

An interest effect of using smaller screen sizes is that the relative scale between font sizes becomes exaggerated. The further away the font is from that 1rem base the larger or smaller it appears on the small screen. 48px or 3rem looks incredibly large on a small screen, although that is a common H1 size for large screens. Anything below 12px (0.75rem) is barely legible. However, establishing a nice range of sizes is preferable on the large screen where text blogs need a much stronger hierarchy established for the amount of real estate the screen affords. The best approach to solving for this problem is to have a system of responsive typography.

Just as elements of a page are adjusted for the screen size, type face adjust along with the breakpoints.

**Max reading width**

For usability and easy for reading, a maximum reading width should be used.

Maximum reading width: 70 characters wide. (Based on chosen font)

Creating a maximum reading width is more than just a visual design choice, it is import for usability and ease of reading. If the text is too long, thereaders eyes will have a hard time focusing on the text. This is because the line length makes it difficult to gauge where the line starts and ends. Furthermore it can be difficult to continue onto the correct line in large blocks of text. If a line is too short the eye will have to travel back too often, breaking the reader’s rhythm. Too short lines also tend to stress readers, making them begin on the next line before finishing the current one (hence skipping potentially important words).

The optimal line length for your body text is considered to be 50-60 characters per line, including spaces (“Typographie”, E. Ruder). Other sources suggest that up to 75 characters is acceptable.

More reading on Responsive Typography:

[A More Modern Scale for Web Typography](https://typecast.com/blog/a-more-modern-scale-for-web-typography)

[https://github.com/twbs/rfs#how-does-it-work](https://github.com/twbs/rfs#how-does-it-work)

## Example Prose

<div class="pattern-example">
  <div class="col-left">
    <h4>Body</h4>
    <p>Family: Tahoma 400 <br />
      Size: 15px <br />
      Line Height: 20px <br />
    </p>
  </div>
  
  <div class="col-right">
    The quick brown fox jumps over the lazy dog.
  </div>
</div>



</div>
