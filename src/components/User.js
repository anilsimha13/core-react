import { useState } from "react";

const User = ({ name, location }) => {
  let [count, setCount] = useState(0);
  return (
    <div className="m-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-lg font-semibold animate-pulse">Name: {name}</h1>
      <h2 className="text-gray-700">Learning React</h2>
      <h3 className="text-gray-700">Contact: ursanilsimha</h3>
      <h4 className="text-gray-700">Location: {location}</h4>
      <h4 className="text-gray-700">Count: {count}</h4>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          setCount(count++);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default User;
