const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mt-4">Contact Us Page</h1>
      <p className="italic text-xl mt-2">
        {" "}
        This is the Contact Us page of our application.
      </p>
      <div>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 m-2 w-100"
          />
          <br />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 m-2 w-100"
          />
          <br />
          <textarea
            placeholder="Your Message"
            className="border p-2 m-2 w-100"
          ></textarea>
          <br />
          <button type="submit" className="bg-blue-500 text-white p-2 m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
