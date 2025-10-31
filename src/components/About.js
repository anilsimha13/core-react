import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-page p-4 m-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">About Us Page</h1>
      <p className="text-gray-700">
        This is the About Us page of our application.
      </p>
      <User name={"ANIL SIMHA - FUNCTIONAL"} location={"Kakinada"} />
      <UserClass name={"ANIL SIMHA - CLASS"} location={"Kakinada"} />
    </div>
  );
};
export default About;
