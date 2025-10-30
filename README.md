# React.js

_Facebook's_

## Table of Contents

- [Episode-01 | Inception](#episode-01--inception)
- [Episode-02 | Igniting our App](#episode-02--igniting-our-app)
- [Episode-03 | Laying the foundation](#Episode-03--Laying-the-foundation)
- [Episode-04 | Talk is cheap, show me the code](Episode-04-Talk-is-cheap-show-me-the-code)
- [Episode-05 | Let's get Hooked](Episode-05-Lets-get-Hooked)
- [Episode-06 | Exploring the World](#episode-06--exploring-the-world)
- [Episode-07 | Finding the Path](#episode-07--finding-the-path)
- [Episode-08 | Let's Get Classy](#episode-08--lets-get-classy)
- [Episode-09 | Optimizing our App](#episode-09--optimizing-our-app)

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
  - To create local state variable
  - Never use it conditionally
  - Always use it at the top level of the component
  - Do not forget to import it from React
- useEffect()
  - When [ ] is empty, it runs only once after the initial render (componentDidMount)
  - When there is a variable inside [var], it runs after the initial render and whenever the variable changes (componentDidUpdate)
  - When there is no second argument, it runs after every render

```js
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
  const json = await data.json();
  console.log(json);
};
```

#### **Reconciliation Algorithm(React Fiber)**

- Virtual DOM is the representation of Actual DOM
- Diff Algorithm: Finds the bifference b/w OLD and NEW Virtual DOM

## Episode-06 | Exploring the World

- **Monolith**
  - All Services in one project
- **Micro-service**
  - Different service for different projects
  - Single Responsibility Principle
- Conditional Rendering
  - Rendering based on the condition (ex: Shimmer UI)

## Episode-07 | Finding the Path

- Routing

  - Client-side routing
  - Server-side routing

- React Router
  - Installation: `npm install react-router-dom`
  - BrowserRouter as Router
  - Routes and Route
  - Link component for navigation
  - useParams() hook to get the dynamic parameters from the URL
  - Nested Routing
  - Outlet component to render the child routes
  - useNavigate() hook for programmatic navigation
- RouterProvider component to provide the router to the app
  `import { createBrowserRouter, RouterProvider } from "react-router-dom";`

  - createBrowserRouter to create the router with route configuration

  ```js
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  ```

  - Wrap the app with RouterProvider and pass the router
    `root.render(<RouterProvider router={appRouter} />);`
  - Outlet
    - `import { Outlet } from "react-router-dom";`
    - Used to render the child routes in the parent route component
    - Example: In AppLayout component, we use `<Outlet />` to render the child routes like Body, About, Contact etc.
  - Link
    - Used for navigation instead of anchor tag `<a>`
    - Example: `<Link to="/about">About</Link>`
  - useParams
    - Used to get the dynamic parameters from the URL
    - Example: If the route is `/restaurant/:id`, we can get the id using `const { id } = useParams();`

## Episode-08 | Let's Get Classy

- Class based component

```js
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-component">
        <h1>Name: {name}</h1>
        <h2>Learning React</h2>
        <h3>Contact: ursanilsimha</h3>
        <h4>Location: {location}</h4>
        <h4>Count:{count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
```

- componentDidMount() in Class based component
  - Runs after the component is mounted
  - Constructor -> Render -> componentDidMount
  - API calls can be made here

```js
componentDidMount() {
  // Code to run after the component is mounted
  console.log("Component did mount - Class Component");
}
```

## Episode-09 | Optimizing our App

- Single Responsibility Principle
  - Each component should have a single responsibility
  - Easier to maintain and debug
  - Modularity
  - Reusability
  - Testability
- Custom Hooks
  - Reusable logic in functional components
  - Starts with "use"
  - Example: useOnlineStatus, useFetch, useDebounce etc.
- Lazy Loading / Code Splitting / Dynamic Import / On-Demand Loading / Chunking
  - Load components only when needed
  - `React.lazy()` and `Suspense` for code splitting
  - Improves performance by reducing the initial load time

```js
import React, { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/Grocery"));
...
{
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
```

## Episode-10 | CSS in React | Tailwind CSS

- **Popular CSS Frameworks**
  - Bootstrap
  - Materialize
  - Ant Design
  - Bulma
  - Tailwind CSS
- **Tailwind CSS**
  - Utility-first CSS framework
  - Highly customizable
  - Installation: `npm install -D tailwindcss postcss autoprefixer` and `npx tailwindcss init -p`
  - Configure `tailwind.config.js` to specify the paths to all of your template files
  - Add the Tailwind directives to your CSS file
