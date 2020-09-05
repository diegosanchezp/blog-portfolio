---
title: "Binary theme switcher component"
date: 2020-09-05T12:27:59-04:00
lastmod: ""
description: "A web component that helps you implement and change two themes on a web page."
author: "Diego Sánchez"
draft: false
categories: ["Web development"]
ogtype: article
image:
  url: "https://diegosanchezp.github.io/blog/theme-switcher-component/theme-switcher-cover.png"
  alt: "demo theme switcher"
---

## Introduction
A lot of websites nowadays have this feature of having two color schemes for the user to choose, namely "dark" and "light", implementing this is a peace of cake with the help of CSS custom properties (variables) and a bit of ECMAscript. Today I present you a web component that abstracts the ECMAscript part and lets you switch between the themes dynamically.

Using the component is straightforward. The component adds and updates a data attribute "data-theme" to the body element which you can handle in CSS via attribute selectors, so depending on the theme you have you can update your theme variables. 

See a [live demo](https://diegosanchezp.github.io/theme-switcher-component) before using it.

## Usage example
To install it use your preferred package manager.

`npm install theme-switcher-component`

OR 

`yarn add theme-switcher-component`

In a .html file include and declare the component.

```html
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Theme switcher component demo</title> 
    <link rel="stylesheet" href="./styles.css">
    <!-- Include the component -->
    <script type="module" src="./node_modules/theme-switcher-component/switch.js" defer></script>
  </head>

  <body>
    
    <main>
      <section>
        <p>Components are not applications, they are just a part of the whole.</p>
        <!-- Declare the component -->
        <!-- The first element of the array themes defines the default theme -->
        <theme-switcher themes='["light", "dark"]' verbose title="switch themes"></theme-switcher>
      </section>
    </main>

  </body>
</html>
```

Note: other names rather than the typical "light" and "dark" can be defined for example "solarized" and "tango".

In a .css file declare in the root selector the css variables to use and change their values accordingly to the two themes defined selecting the body.

```css
/* Define a theme with variables */
:root {
  /* Light theme the default*/
  --border-color: black;
  --bg-color: white;
}

/* Change variables values accordingly*/

body[data-theme="dark"]{
  --border-color: white;
  --bg-color: black;
}

/* ... More CSS rules below ... */
```

After a theme is changed, it gets stored to `localStorage`, if you want to see values of the local store and the current theme set the `verbose` attribute to the <theme-switcher> custom element, like the example.

That's it ! Hope this helps you. 

If you want more in depth documentation check the [github repository](https://github.com/diegosanchezp/theme-switcher-component/) and the [live demo code](https://github.com/diegosanchezp/theme-switcher-component/tree/master/demo).
