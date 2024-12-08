import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Page", () => {
  it("renders a Product", () => {
    const testItem = { title: "a title", image: "an image", price: 1 };

    render(<Product item={testItem} click={() => {}} />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("a title");

    const price = screen.getByText("1 USD");
    expect(price).toBeInTheDocument();

    const image = screen.getByAltText("a title");
    expect(image).toBeInTheDocument();
  });
});
