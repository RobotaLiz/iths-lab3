import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductModal from "./ProductModal";

describe("ProductModal Component", () => {
  const mockProduct = {
    title: "Test Product",
    image: "test-image.jpg",
    description: "This is a test product.",
    price: 100,
  };

  it("does not render when isOpen is false", () => {
    render(
      <ProductModal
        product={mockProduct}
        isOpen={false}
        onClose={() => {}}
        onAddToCart={() => {}}
      />
    );

    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });

  it("renders correctly when isOpen is true", () => {
    render(
      <ProductModal
        product={mockProduct}
        isOpen={true}
        onClose={() => {}}
        onAddToCart={() => {}}
      />
    );

    const modal = screen.getByRole("dialog", { name: /test product/i });
    expect(modal).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product.")).toBeInTheDocument();
    expect(screen.getByText("100 USD")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  });

  it("handles closing when close button is clicked", () => {
    const handleClose = jest.fn();

    render(
      <ProductModal
        product={mockProduct}
        isOpen={true}
        onClose={handleClose}
        onAddToCart={() => {}}
      />
    );

    const closeButton = screen.getByRole("button", { name: /×/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("handles closing when clicking outside the modal", () => {
    const handleClose = jest.fn();

    render(
      <ProductModal
        product={mockProduct}
        isOpen={true}
        onClose={handleClose}
        onAddToCart={() => {}}
      />
    );

    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
