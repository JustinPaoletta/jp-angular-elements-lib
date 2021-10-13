# Example Library of Angular Elements

The goal of this repo is to be used as a reference for creating Angular Elements and using them as web components in any application.

## Create an Angular Element


1) Install angular/elements and concat

    ng add @angular/elements

    npm install concat


2) Remove UnNeeded Code

    Delete AppComponent from the AppModule and remove all of its src code

    Remove default bootstrap method in app.module



3) Create a component and connect it to AppModule

    add in component:

	    encapsulation: ViewEncapsulation.ShadowDom


    add in the module decorator

	    “entryComponents: [nameOfComponent],”

	    “providers: [{provide: APP_BASE_HREF, useValue : '/' }],”

    
    edit AppModule class 

        constructor(private injector: Injector){}

        ngDoBootstrap(){
            const myComponent = createCustomElement(MyComponent, {injector: this.injector});
            customElements.define(‘my-component’, myComponent);
        }



4) Change target in tsconfig.json to ES2015 and remove private from package.json



5) Create a build script for element

    add build script to package.json

	    "build:element-one": "ng build --output-hashing=none && node ./concat-build.js"


    write the script to concat js files:

    ```
    const concat = require('concat');

    const files = [
        './dist/element-one/runtime.js',
        './dist/element-one/polyfills.js',
        './dist/element-one/main.js'
    ]

    concat(files, './dist/element-one/element-one.js');
    console.info('Custom ElementOne Successfully Created!');
    ```



6) Create an .npmignore file

    Add this content to an .npmignore file (subject to differences)

        /node_modules
        /src
        .browserslistrc
        .editorconfig
        .gitignore
        angular.json
        concat-build.js
        karma.conf.js
        tsconfig.app.json
        tsconfig.json
        tsconfig.spec.json



7) Build and Publish to NPM

    npm run build:element-one

    npm login
    npm publish


## Each Branch is its own Angular Element 

    If you want to see element-one checkout the branch with the same name

## Two Example Branches are also included for using the Angular Elements

    * html-example
    * react-example

    View those branches to see how the angular elements were imported into each project

## The Angular Elements used in this tutorial are published on npm and can be installed the same as any other package.

    * npm install element-one
    * npm install element-two
    * npm install element-three

 https://www.npmjs.com/settings/jpaoletta/packages
