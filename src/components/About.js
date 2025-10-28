import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the About Us page of our application.</p>
      <User name={"ANIL SIMHA - FUNCTIONAL"} location={"Kakinada"} />
      <UserClass name={"ANIL SIMHA - CLASS"} location={"Kakinada"} />
    </div>
  );
};
export default About;
