---
layout: page
title: Card
category: component
section: component
permalink: "/card/"
---

## Overview of Component Group

Cards are a major component type across the whole site. Cards may be displayed as an individual object or as part of a group. Cards are a responsive element and are meant to fit to 100% of their container.

Cards are made up of primary pieces which may be omitted depending on the context of use. But at a minimum each card is required to have a title and a url target.

- title
- body
- thumbnail
- alt text (thumbnail/image)
- date
- source
- link bar

Cards are meant to be actionable, not just decorative.

### Functionality
- The entire card is the link. Although only the card title displays as a link and shows the hover state.
- The thumbnail is decorative and has its altext set to null
- OnClick/OnTap system displays target page

### Accessbility
The [USWDS](https://designsystem.digital.gov/components/card/) recommends using list Functionality for coding cards so that they are accessible.

### Card Types
- [Card Short](#card-short)
- [Card Wide](#card-wide)
- [Card Left](#card-left)

<a name="card-short"></a>
## Card Short
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Url

**Design Example**

---

<div class="card-container">
  <div class="card-short">
    <a href="linkhere">
        <p class="card-title">Evidence-Based Resource Center (EBRC)</p>
        <p class="card-body">Our resource center has tools for communities, clinicians, policymakers, and others in the field.</p>
    </a>
  </div>
</div>

---

**HTML**

```
<div class="card-container"><! -- example of how to constrain the card into its container -->
  <div class="card-short">
    <a href="linkhere">
        <p class="card-title">Your Title Here</p>
        <p class="card-body">Your Body Content</p>
    </a>
  </div>
</div>
```

**SCSS**

_Note link color and styling is consistent with global styles._
```
// Card Classes -->
// this class helps to constrain the card using a container -- it is an example only
.card-container {
  max-width: 320px;
  padding: 2px;
  margin: 15px;
}

.card-short {}
.card-title {
    font-size: 18px;
    padding: 0;
  }
.card-body {
  padding: 0;
  color: $charcoal /*rgb(74, 74, 74);*/
}
```

<a name="card-wide"></a>
## Card Wide
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Thumbnail: width = 100%, height = auto, alt text = null
- Url

**Design Example**

---

<div class="card-container">
  <div class="card-wide">
    <a>
    <img class="card-image" alt-text="" src="../assets/img/cards/spotlight-item-image1.jpg">
    <p class="card-title">Opioid Overdose Prevention Toolkit
    </p>
    <p class="card-body">Our toolkit provides essential information about preventing an opioid overdose—a crisis which claimed over 42,000 lives in 2016.</p>
    </a>
  </div>
</div>

---

**HTML**
```
<div class="card-container">
<! -- example of how to constrain the card into its container -->
  <div class="card-wide">
    <a>
    <img class="card-image" alt-text="" src="source-for-your-image">
    <p class="card-title">Your Title</p>
    <p class="card-body">Your Body Content</p>
    </a>
  </div>
</div>
```

**SCSS**
```
// Card Classes -->
// this class helps to contain the card using a container -- it is an example only
.card-container {
  max-width: 320px;
  padding: 2px;
  margin: 15px;
}

.card-title {
    font-size: 18px;
    padding: 0;
  }
.card-body {
  padding: 0;
  color: $charcoal /*rgb(74, 74, 74);*/
}
```

<a name="card-left"></a>
## Card Left
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Thumbnail: width = 100%, height = auto, alt text = null
- Url

**Design Example**

---

<div class="card-container">
<div class="card-left"><a>
      <img class="card-image" alt-text="" src="../assets/img/cards/glance-item-image1.jpg">
      <p class="card-title">Who We Are</p>
      <p class="card-body">We lead public health efforts to advance the behavioral health of the nation.</p></a>
  </div>
</div>

---

**HTML**
```
<div class="card-container">
<! -- example of how to constrain the card into it's container -->      
<div class="card-left"><a>
      <img class="card-image" alt-text="" src="source-for-your-image">
      <p class="card-title">Your Title</p>
      <p class="card-body">Your Body Content</p></a>
  </div>
</div>
```

**CSS**
```
// Card Classes -->
// this class helps to contain the card using a container -- it is an example only
.card-container {
  max-width: 320px;
  padding: 2px;
  margin: 15px;
}

  .card-title {
      font-size: 18px;
      padding: 0;
    }
  .card-body {
    padding: 0;
    color: $charcoal /*rgb(74, 74, 74);*/
  }

  .card-left .card-title, .card-left .card-body {
    margin-left: 45%;
  }

  .card-left .card-image {
    max-width: 40%;
    height: auto;
    float: left;
  }
  ```
