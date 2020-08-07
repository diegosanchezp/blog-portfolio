---
title: "Using NodeJs packages in the browser with import maps "
date: 2020-08-05T11:25:22-04:00
description: "How to use import maps for NodeJs packages"
draft: true
categories: ["Web development"]
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

Since the specified path it's 'bare', meaning that is not the full path to the file where the source code of that object is.

There is also the problem that if we gave the full path of the file, that file could also be importing another package in the same way, with a bare path.

The typical workaround for this problem is to use a bundler like Rollup or Webpack that resolves all of the paths. 

There is the exception of packages that have **zero dependencies**, meaning that they simply do not import from another packages, do relative imports like `import { defaultTemplateProcessor } from './lib/default-template-processor.js';` for example, or have the so called dist files which have all of the required code in one single file. 

In those cases we could do something like `import { foo } from './node_modules/lib-foo/file.js'` there will be no problems

But what if we wanted to still use the bare paths syntax, since is better and more comfortable to work with and have something that tells that a bare path points to a full path. That's exactly what import maps does!   

Quoting from the specification:  

" Until import maps, the web has had no native ability to do this kind of mapping (although the specification has included a carveout for it since modules were first introduced). Import maps bring this ability to the web's native module system, putting it on parity with web developer expectations. "

## Zero dependencies packages

## Using import maps

To start using import maps we need to download a polyfill, currently there are two implementations [SystemJS](https://github.com/systemjs/systemjs) and [es-module-shims](https://github.com/guybedford/es-module-shims). For the following example I'll use es-module-shims since the other one offers others features that we are not going to use.

### Generating import maps
We'll use the package [@import-maps/generate](https://www.npmjs.com/package/@import-maps/generate) to generate the import map. The caveats are, is that it only supports `yarn.lock` file, and that Windows paths are not supported yet so we have to install the packages with yarn and not with npm

`yarn add `
## Other tools that use import maps

[Snowpack](https://www.snowpack.dev/)

[Deno](https://deno.land/manual/linking_to_external_code/import_maps)

## References
[Import maps - chromestatus.com](https://www.chromestatus.com/feature/5315286962012160)

[Import maps - Editor's draft](https://github.com/WICG/import-maps)

[Import Maps Draft Community Group Report](https://wicg.github.io/import-maps/)
