---
layout: page
title: Modal
category: elements
permalink: "/modal/"
---

## Overview
Tooltips are used to give users extra information to users to explain usage of a particular object or tool.  Often tool tips are used in forms to explain to the user why as certain items is being requested, or how the information should be supplied... for example password requirements.

*Be sure to make this component touch screen and screen reader compliant.*

**Contents**
- [Design](#design)
- [Functionality](#functionality)
- [Code Snippets](#snippets)

<a name="design"></a>
## Design
**Closed state**

<div class="modal-content">
<h1>Pure CSS modal box</h1>
<div>
  <p>You can place trigger button wherever you want.</p>
  <p>
    <label class="btn" for="modal-1">Show me modal with a cat</label>
    <label class="btn btn--blue" for="modal-2">Click for more AWW</label>
  </p>
</div>


<div class="modal-elements-wrapper">
<input class="modal-state" id="modal-1" type="checkbox" />

<div class="modal">
  <label class="modal__bg" for="modal-1"></label>
  <div class="modal__inner">
    <label class="modal__close" for="modal-1"></label>
    <h2>Caaaats FTW!</h2>
    <p><img src="https://i.imgur.com/HnrkBwB.gif" alt="" />Aliquam in sagittis nulla. Curabitur euismod diam eget risus venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.</p>
  </div>
</div>

</div> <!--End wrapper-->


<div class="modal-elements-wrapper">
<input class="modal-state" id="modal-2" type="checkbox" />
<div class="modal">
  <label class="modal__bg" for="modal-2"></label>
  <div class="modal__inner">
    <label class="modal__close" for="modal-2"></label>
    <h2>Sleppy sloth</h2>
    <p><img src="https://i.imgur.com/TPx9zYo.gif" alt="" />Aliquam in sagittis nulla. Curabitur euismod diam eget risus venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.</p>
  </div>
</div>
</div><!--End wrapper-->

</div><!--End Modal Content -->

<a name="functionality"></a>
## Functionality



<a name="code"></a>
### Code
### HTML
**closed**
```html

```

**open**
```html

```

### SCSS
```scss

```
