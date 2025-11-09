import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Make sure to load the contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: "Contact Us Page" });
  expect(heading).toBeInTheDocument();
});
test("Make sure to have a button the contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("button", { name: "Submit" });
  expect(heading).toBeInTheDocument();
});
test("Make sure to have a input field for the contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("button", { name: "Submit" });
  expect(heading).toBeInTheDocument();
});
test("Make sure to have two input fields for the contact component", () => {
  render(<Contact />);
  const inputElements = screen.getAllByRole("textbox");
  expect(inputElements.length).toBe(3);
});
