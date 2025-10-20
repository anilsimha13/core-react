# React.js

_Facebook's_

## Table of Contents

- [Episode-01 | Inception](#episode-01--inception)
- [Episode-02 | Igniting our App](#episode-02--igniting-our-app)
- [Episode-03 | Laying the foundation](#Episode-03--Laying-the-foundation)
- [Episode-04 | Talk is cheap, show me the code](Episode-04-Talk-is-cheap-show-me-the-code)
- [Episode-05 | Let's get Hooked](Episode-05-Lets-get-Hooked)

## Episode-01 | Inception

### Key Concepts

- Basic HTML using Javascript.

```Javascript
<script>
    const heading = document.createElement('h1')
    heading.innerHTML = "Namaste React 🚀"
    const root = document.getElementById('root')
    root.appendChild(heading)
</script>
```

- CDN (_Content Delivery Network_)

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- Traditional way of creating the HTML elements using React and ReactDOM

```javascript
<script>
  const heading = React.createElement('h1', {}, 'Hello World! from React🚀')
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(heading)
</script>
```

- Traditional way of creating the HTML elements and **child** elements using React and ReactDOM

```javascript
const heading = React.createElement("div", { key: 1, id: "main-div" }, [
  React.createElement(
    "h1",
    { key: 2, id: "main-heading" },
    "Hello I am from Div>h1"
  ),
  React.createElement(
    "a",
    { key: "link", href: "https://www.google.com", target: "_blank" },
    "Google link"
  ),
]);

console.log(heading); // To see the object structure in the console
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

## Episode-02 | Igniting our App

### Key Concepts

**Generic:**

```javascript
 "devDependencies": {
    "parcel": "^2.16.0", // "^" is called as caret for latest minor version
    "parcel": "~2.16.0"  // "~" is called as tilde for latest patch version
  }
```

- **Creating React App**
  - npm init
    - Creates a package.json file
  - parcel (_bundler_)
    - installation: `npm install parcel --save-dev`
    - **Transitive dependency:** A dependency of a dependency is called a transitive dependency.
    - React and ReactDOM installation: `npm install react react-dom`
    - In index.html file, make sure to add the type attribute to the script tag as `type="module"` for parcel to work. `<script type="module" src="./App.js"> </script>`
    - To run the app: `npx parcel index.html`
    - To build the app for production: `npx parcel build index.html
    - BrowsersList
      - To support older browsers, we need to specify the browsers we want to support in the package.json file.
      - Example:
        ```json
        //package.json
        ...
        "browserslist": [
          "last 2 versions"
        ]
        ```
      - This will ensure that the code is transpiled to support the specified browsers.
- **Parcel features:**
  - Hot Module Replacement (HMR)
    - Instantly see changes in the browser without refreshing the page
  - Fast bundle times
  - Zero configuration
  - Out of the box support for JS, CSS, HTML, images, and more
  - Tree shaking
  - Code splitting
  - Asset optimization
  - Support for TypeScript, React, Vue, and more
  - Built-in development server
  - Easy to use CLI
  - File watching
  - Cache for faster rebuilds
  - Production Ready build `npx parcel build index.html`

## Episode-03 | Laying the foundation

### Key Concepts

- On updating the scripts object in package.json then we can use those commands to run the build.

```js
  "scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  //Terminal:
  //npm start
```

- JSX - Javascript Syntax
  - JSX is the HTML like syntax
  - JSX transpiled before it reaches the Javascript
  - Parcel gives this transpilation activity to Babel
  - Attributes in JSX are camelcase
  - Babel converts below code to React.createElement
  - Takes care of cross-site scripting attacks

```js
const jsxHeading = <h1 id="heading">I am from JSX Heading</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

- **React Components**
  - Two Types:
    - Class based (_outdated_)
    - Functional based (_new_)
- **Functional Components**
  - Should start with Capital letter
  - It's just a normal javascript function
  - _Component Composition_: Component inside a component

```js
const Heading = () => {
  return (
    <div className="main-div">
      <h1 className="main-heading">I am from Functional Component🚀</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />); //Functional component renders
```

## Episode-04 | Talk is cheap, show me the code

### Key Concepts

- props
  - Passing the data to the component dynamically
- map function
- key is mandatory to be passed when using map function

## Episode-05 | Let's get Hooked

### Key Concepts

#### **Exports**

- Default

```js
export default Body;
import Body from "./components/Body";
```

- Named

```js
export const LOGO_URL =
  "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
import { LOGO_URL } from "../utils/constants";
```

#### **Hooks**

- useState()
- useEffect()

#### **Reconciliation Algorithm(React Fiber)**

- Virtual DOM is the representation of Actual DOM
- Diff Algorithm: Finds the bifference b/w OLD and NEW Virtual DOM
