# React.js

_Facebook's_

## Table of Contents

- [Episode-01 | Inception](#episode-01--inception)

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
