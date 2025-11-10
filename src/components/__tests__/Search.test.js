import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/ResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});
