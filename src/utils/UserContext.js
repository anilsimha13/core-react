const { createContext } = require("react");

const UserContext = createContext({
  loggedInUser: "Anil Simha",
});

export default UserContext;
