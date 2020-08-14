---
title: "Using NodeJs packages in the browser with import maps "
# Original Date 2020-08-05T11:25:22-04:00
date: 2020-08-12
lastmod: ""
author: "Diego Sánchez"

# Desc is a pointer to the string node
description: &desc "Import maps is a browser proposal that allow web pages to control the behavior of JavaScript imports, in this article will cover the usage of this feature with nodejs packages, the related problems, and posible solutions."

draft: false
categories: ["Web development"]
ogtype: article
image:
  url: "https://diegosanchezp.github.io/blog/import-maps/chrome-experimental-importmap-min.png"
  alt: "Import maps on Chrome"
---

## What are import maps
Import maps is a browser proposal that allow web pages to control the behavior of JavaScript imports, in other words control over what URLs get fetched by JavaScript `import` statements and `import()` expressions.
A NodeJs developer is used to import packages this way

{{< codecenter >}} 
{{< highlight js>}}
import { html } from 'lit-element';
{{< /highlight >}}
{{< /codecenter >}} 

If we tried to do that directly in the browser it will fail, throwing an error similar to 

{{< textstyle class="text-center code-color" >}}
  Uncaught TypeError: Failed to resolve module specifier "lit-element". Relative references must start with either "/", "./", or "../".
{{< /textstyle >}}

This is happens because the specified path ('lit-element') is 'bare', meaning that is not the full path to the file where the source code of that object is.

There is also the problem that if we gave the full path of the file, that file could also be importing another package in the same way, with a bare path.

The typical workaround for this problem is to use a bundler like Rollup or Webpack that resolves all of the paths. And puts all of the required code into one single file.

There is the exception of packages that have **zero dependencies** (meaning that they simply do not import from another packages), they do things like relative imports, for example,`import { defaultTemplateProcessor } from './lib/default-template-processor.js';`  or have the so called "dist" files which have all of the required code in one single file. 

In those cases we could do something like `import { foo } from './node_modules/lib-foo/file.js'` there will be no problems

But what if we wanted to still use the bare paths syntax, since is better and more comfortable to work with and have something that tells that a bare path points to a full path. That's exactly what import maps does!   

Quoting from the specification on [chromestatus][1]

" Until import maps, the web has had no native ability to do this kind of mapping (although the specification has included a carveout for it since modules were first introduced). Import maps bring this ability to the web's native module system, putting it on parity with web developer expectations. "

## Using import maps

Currently import maps are a experimental feature, the only browser that has implemented it is google-chrome, so, to start using them we have two methods

1. Enable import maps on google-chrome by putting in the address bar the url `chrome://flags/`, then search for import maps in the search bar and enable the flag "Experimental Productivity Features".

{{< figure src="/blog/import-maps/chrome-experimental-importmap-min.png" title="Chrome flag Experimental Productivity Features " alt="Chrome flag Experimental Productivity Features image" >}}

2. Use a polyfill, in this moment there are two,[es-module-shims](https://github.com/guybedford/es-module-shims) and [SystemJS](https://github.com/systemjs/systemjs) for the following example I'll be using the first one.

Let's begin setting up the example by installing the required dependencies

- `es-dev-server` we are going to need a server because the polyfill uses the fetch api.
- `es-module-shims` the polyfill that's going to do the import magic 
- `lit-element` the dependency that uses the npm system

Install the dependencies with yarn only, we'll need the generated `yarn.lock` file for later.

`yarn add es-dev-server -D`

`yarn add es-module-shims lit-element`

Then we are going to craft the html file which will have the import map and the javascript code that uses imports with the bare syntax

Make an html file that requires the lit-html dependency

{{< highlight html "linenos=table,linenostart=1,nowrap=false,nobackground=true" >}}
<!-- index.html -->
<html>
  <head>
    <title>ES Import Maps Shim</title>
    <!-- Include the polyfill -->
    <script defer src="./node_modules/es-module-shims/dist/es-module-shims.min.js"></script>

    <!-- Declare the import map wich is a json object that starts with the key "imports". 
    This is an object that contains the mapping of the import URLs to the node_modules folder -->

    <script type="importmap-shim">
      {
        "imports": {
          "lit-html": "./node_modules/lit-html/lit-html.js",
          "lit-element": "./node_modules/lit-element/lit-element.js",
          "lit-html/lit-html.js": "./node_modules/lit-html/lit-html.js",
          "lit-html/lib/shady-render.js": "./node_modules/lit-html/lib/shady-render.js"
        }
      }
    </script>

    <!-- JavaScript code that uses bare module syntax -->
    <script type="module-shim">

      import { LitElement, html, css } from 'lit-element';

      class CustomBtn extends LitElement {
        static get styles() {
          return css`
            button {
              color: blue;
            }
          `;
        }

        render() {
          return html`
            <button>Custom Button</button>
          `;
        }
      }
      customElements.define('custom-button', CustomBtn);
    </script>
  </head>
  <body>
    <custom-button></custom-button>
  </body>
</html>
{{< / highlight >}}

Next serve the html file 

`npx es-dev-server --app-index index.html --watch --open`

{{< figure src="/blog/import-maps/index.png" alt="index screenshot" title="Index page with custom button" >}}

Let's explain some things about the example.

- We are making a simple web component with LitElement base class.

- The import map makes the bare path in line 25 to be resolved to `import { LitElement, html, css } from './node_modules/lit-element/lit-element.js';`. It does the same for the internal imports of `lit-element`.

- If you are using chrome with the enabled flag “Experimental Productivity Features”. You don't need line 6, change line 11 to `<script type="importmap"></script>`  and line 23 to `<script type="module"></script>`.

There is still one thing you might be asking. How did you know how to list those other imports ? If you are only importing lit-element. Well that's one thing we have to take care about, the internal imports of lit-element, doing this by hand might be a huge pain, the import map you see above took me a few minutes to setup, I've had to analyze the `package.json` of `lit-element` and `lit-html` since the first one is dependent on the last one. Even the import map that I've provided could fail for others imports of lit-html.

So the ideal is to have something more robust, a tool that automatically generates the import map for ourselves.   

### Generating import maps
We'll use the package [@import-maps/generate](https://www.npmjs.com/package/@import-maps/generate) to generate the import map. The caveats are that it only supports `yarn.lock` file ( this is why the dependencies must have be installed only with yarn at the beginning ) and that Windows paths are not supported.

Install @import-maps/generate as a development dependency

`yarn add @import-maps/generate -D`

To generate the import map run the command 

`npx @import-map/generate`

This will output the importmap in a file named `import-map.json`, below is an example

```json 
{
  "imports": {
    "es-module-shims/": "/node_modules/es-module-shims/dist/",
    "lit-element": "/node_modules/lit-element/lit-element.js",
    "lit-element/": "/node_modules/lit-element/",
    "lit-html": "/node_modules/lit-html/lit-html.js",
    "lit-html/": "/node_modules/lit-html/"
  }
}
```
Ideally you'll want to generate the import map after installing any additional dependency, to do so add to `package.json` a post install script

```json 
"scripts": {
  "postinstall": "generate-import-map"
}
```

Lastly include the import map by replacing line 11 on the index.html file used before.
```html 
<!-- index.html -->
<html>
  <head>
    <title>ES Import Maps Shim</title>
    <script defer src="./node_modules/es-module-shims/dist/es-module-shims.min.js"></script>

    <!-- Generated import map -->
    <script type="importmap-shim" src="import-map.json"></script>
    <!-- ... -->
  
  </head>
  <body>
    <x-component></x-component>
  </body>
</html>
```

## The problem of NodeJs packages
Some NodeJs packages might not be compatible with the browser, back before the `import/export` (ESM modules) syntax, `require()` (CommonJS) was used instead. There is a chance that some package uses a dependency that uses the old syntax making it unusable in the browser since it only understands `import/export`. The solution to the problem would be to simply convert the old syntax to the new one, there is a tool that does that automatically [Snowpack][snowpack], the next example is about it.

The reason why I choose the lit-element package was because it's ESM ready, thus avoiding the problem described above.

For the example that covers this topic will continue using web components, instead of making one we will download the paper-button from [@polymer](https://www.npmjs.com/package/@polymer/paper-button). The characteristic of this is that it's not declared as an ESM module. If you inspect the `node_modules/@polymer/paper-button/package.json` it has no **"module"** field, even do the file main file uses `import` syntax.

Running the generator from the last example, will trow an exception

```bash
(node:10621) UnhandledPromiseRejectionWarning: Error: Cannot find module '@polymer/iron-behaviors'
```

I've inspect the `package.json` of 'iron-behaviors' and didn't find the "main" field. Which is probably what's causing problems.

Back to Snowpack, it acts as a middleware or intermediary between the dependencies stored in the `node_modules` folder and the web browser making these fully compatible. Takes as input a `.js` file declared as main in `package.json`, analyzes the declared imports and outputs a `web_modules` folder with bundled javascript files and the respective import map. 

To start the example install snowpack

`yarn add snowpack -D`

And the component 

`yarn add @polymer/paper-button`

Create a new `snowpack.html` file
```html
<!-- snowpack.html -->
<html>
  <head>
    <title>Import Maps with Snowpack</title>

    <script defer src="./node_modules/es-module-shims/dist/es-module-shims.min.js"></script>

    <!-- Import map is located in the web_modules folder -->
    <script type="importmap-shim" src="./web_modules/import-map.json"></script>
    
    <script type="module-shim" src="main.js"></script>
  </head>

  <body>
    <paper-button raised>Another Button</paper-button>
  </body>
```
Create `main.js` file, inside this file import the paper-button 

```js
import '@polymer/paper-button/paper-button.js';
```

Update your `package.json` main field

```json
{
  "main": "main.js"
}
```
Run the command to generate the web_modules folder

`npx snowpack`

If you inspect the  `web_modules` folder there is one single js file per dependency

{{< codecenter >}} 
{{< highlight bash>}}
web_modules/
├── import-map.json
├── lit-element.js
└── @polymer
    └── paper-button
        └── paper-button.js
{{< /highlight >}}
{{< /codecenter >}} 

If some of the dependencies share a common dependency they will be put in a common folder.

Like the last generator you'll want to update the `import-map.json` every time a dependency is added, to do so, add to `package.json` a postinstall script.

```json
"scripts": {
  "postinstall": "snowpack"
}
```

Run the server
`npx es-dev-server --app-index snowpack.html --watch --open`

You should see a blank page with a button

{{< figure src="/blog/import-maps/snowpack.png" alt="snowpack page" title="Snowpack page with paper button" >}}

## Conclusion

Import maps is a great proposal that enhances the development workflow and makes a bridge between the npm ecosystem and the browser, sadly is not all pretty, there is compatibility problems between the import system that uses the browser ESM and the one that nodejs used in the past commonJS, snowpack has provided a way to breach into this problem.

The one thing that I personally don't Like about snowpack is that is that there will be duplication of code, the node_modules and web_modules folder are similar. 

## Additional notes

Check out the [github source code repository](https://github.com/diegosanchezp/import-maps-examples) with all the examples included!

Snowpack and the polyfill es-module-shim can do much more than the examples provided here. I encourage you to checkout their documentation.  

You can check the progress of the import maps on [chromestatus.com][1]

Import maps can also be used with [unpkg](https://unpkg.com/) content delivery network. The bare syntax can be mapped to an unpkg url,[Deno](https://deno.land/manual/linking_to_external_code/import_maps) uses import maps to do something similar. You can even use unpkg urls as a fallback in case a module is not available in the node_modules folder.

## References
<!-- These links are referenced twice in the blog -->
[1]: https://www.chromestatus.com/feature/5315286962012160 "Import maps - chromestatus.com"

[snowpack]: https://www.snowpack.dev/ "Snowpack Website"

[Snowpack][snowpack]

[Import maps - chromestatus.com][1]

[Import maps - Editor's draft](https://github.com/WICG/import-maps)

[Import Maps Draft Community Group Report](https://wicg.github.io/import-maps/)
