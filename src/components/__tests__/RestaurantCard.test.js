import { render, screen } from "@testing-library/react";
import MOKC_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import { MemoryRouter } from "react-router-dom";

it("should render RestaurantCard component correctly", () => {
  render(
    <MemoryRouter>
      <RestaurantCard resData={MOKC_DATA} />
    </MemoryRouter>
  );
  const resName = screen.getByText("Pizza Paradise");
  expect(resName).toBeInTheDocument();
});
