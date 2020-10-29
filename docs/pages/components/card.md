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

## Design

There are eight different card designs available for use
- [Card](#card)
- [Card with Button](#card-button)
- [Card with Media](#card-media)
- [Card with Media and Button](#card-media-button)
- [Left Flag](#left-flag)
- [Right Flag](#right-flag)
- [Left Flag with Button](#left-flag-button)
- [Right Flag with Button](#left-flag-button)
- [Hover States](#hover-state)

<a name="card"></a>
## Card
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Url (whole card is link)

**Design Example**

![card mockup](../assets/img/cards/card.png)

{% include /patterns/cards/card.md %}

### Code
### HTML
```html
  {% include /patterns/cards/card.md %}
```

### SCSS
```scss
  {% include /patterns/cards/card.scss %}
```

<a name="card-button"></a>
## Card with Button
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Button URL (whole card is link)

**Design Example**

![card with button](../assets/img/cards/card-with-button.png)

{% include /patterns/cards/card-button.md %}

### Code
### HTML
```html
  {% include /patterns/cards/card-button.md %}
```

### SCSS
```scss
  {% include /patterns/cards/card-button.scss %}
```

<a name="card-media"></a>
## Card with Media
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Image
- URL (whole card is link)

**Design Example**

![card with media mockup](../assets/img/cards/card-with-media.png)

{% include /patterns/cards/card-media.md %}

### Code
### HTML
```html
  {% include /patterns/cards/card-media.md %}
```

### SCSS
```scss
  {% include /patterns/cards/card-media.scss %}
```


<a name="card-media-button"></a>
## Card with Media and Button
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Image
- Button URL (whole card is link)

**Design Example**

![card with media and button mockup](../assets/img/cards/card-with-media-button.png)

{% include /patterns/cards/card-media-button.md %}

### Code
### HTML
```html
  {% include /patterns/cards/card-media-button.md %}
```

### SCSS
```scss
  {% include /patterns/cards/card-media-button.scss %}
```


<a name="left-flag"></a>
## Left Flag
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Image

**Design Example**

![left flag](../assets/img/cards/left-flag.png)

{% include /patterns/cards/left-flag.md %}

### Code
### HTML
```html
  {% include /patterns/cards/left-flag.md %}
```

### SCSS
```scss
  {% include /patterns/cards/left-flag.scss %}
```


<a name="right-flag"></a>
## Right Flag
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Image

**Design Example**

![right flag](../assets/img/cards/right-flag.png)

{% include /patterns/cards/right-flag.md %}

### Code
### HTML
```html
  {% include /patterns/cards/right-flag.md %}
```

### SCSS
```scss
  {% include /patterns/cards/right-flag.scss %}
```

<a name="left-flag-button"></a>
## Left Flag with Button
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Image

**Design Example**

![left flag button](../assets/img/cards/left-flag-button.png)

{% include /patterns/cards/left-flag-button.md %}

### Code
### HTML
```html
  {% include /patterns/cards/left-flag-button.md %}
```

### SCSS
```scss
  {% include /patterns/cards/left-flag-button.scss %}
```

<a name="right-flag-button"></a>
## Right Flag with Button
**Fields in use:**
- Title: character limit 50
- Body: character limit 120
- Image

**Design Example**

![right flag button](../assets/img/cards/right-flag-button.png)

{% include /patterns/cards/right-flag-button.md %}

### Code
### HTML
```html
  {% include /patterns/cards/right-flag-button.md %}
```

### SCSS
```scss
  {% include /patterns/cards/right-flag-button.scss %}
```

<a name="hover-state"></a>
## Hover States

**Design Example**

![card hover](../assets/img/cards/card-hover.png)
![flag hover](../assets/img/cards/flag-hover.png)
![public messages hover cards](../assets/img/cards/public-messages-hover-cards.png)



### Functionality
- The entire card is the link. Although only the card title displays as a link and shows the hover state.
- The thumbnail is decorative and has its altext set to null
- OnHover - titles underline, buttons change color states and the shadow drop appears around entire card. See design examples above
- OnClick/OnTap system displays target page


### Accessbility
The [USWDS](https://designsystem.digital.gov/components/card/) recommends using list Functionality for coding cards so that they are accessible.
