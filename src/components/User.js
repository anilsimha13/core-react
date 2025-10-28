import { useState } from "react";

const User = ({ name, location }) => {
  let [count, setCount] = useState(0);
  return (
    <div className="user-component">
      <h1>Name: {name}</h1>
      <h2>Learning React</h2>
      <h3>Contact: ursanilsimha</h3>
      <h4>Location: {location}</h4>
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        Increase Count
      </button>
      <h4>Count: {count}</h4>
    </div>
  );
};

export default User;
