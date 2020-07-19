# Diego Sánchez Web Portfolio v2

This is the new version of my portfolio, the architecture is inspired by [fireship.io](https://github.com/fireship-io/fireship.io)  

Made with
- Static Site Generation [Hugo](https://gohugo.io/)
- Styling [SCSS](https://sass-lang.com/)
- Web Components with [LitElement](https://lit-element.polymer-project.org/)

See this diagram for a more intuitive explanation

Todo: put image of diagram here 

It follows [SASS guidelines](https://sass-guidelin.es/) for styling 

## How to integrate Web components with Hugo

1. Make `.ts` file that would be the component class. 
2. Declare your webcomponent class in `web-components.ts` with `customElements.define()` method.
3. Run `npm run build:hugo` to bundle the declared components into a `.js` optimized file. This script will move the bundle to the hugo static files folder. 
4. Since the bundle filename is not constant (it varies depending on the build) you can access the bundle filename in Hugo's templates via the .Data variable, that is, `{{ .Site.Data.components.bundle }}`  
Access the bundle filename via a script tag 
``` 
<script type="module" src="components/{{.Site.Data.components.bundle}}"></script>
```


