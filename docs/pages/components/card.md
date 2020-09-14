---
layout: page
title: Cards
category: component
permalink: "/cards/"
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

{% include /patterns/cards/card-short.md %}

---

**HTML**
```html
  {% include /patterns/cards/card-short.md %}
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

{% include /patterns/cards/card-wide.md %}

---

**HTML**
```html
  {% include /patterns/cards/card-wide.md %}
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

{% include /patterns/cards/card-left.md %}

---

**HTML**
```html
  {% include /patterns/cards/card-wide.md %}
```

## SCSS
_Note link color and styling is consistent with global styles._
**CSS**
```scss
  {% include /patterns/cards/cards.scss %}
```
