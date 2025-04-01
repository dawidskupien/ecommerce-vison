import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Product, ProductName, ProductPrice, ProductImage, ProductVendor, ProductQuantity, ProductVariants } from "../product"
import { useCartStore } from "@/providers/cart-store-provider";
// const mockUseCartStore = useCartStore as jest.Mock;
import { formatCurrency } from "@/utils/formatCurrency";


const mockProduct = {
  id: "1",
  vendor: { name: "Test Vendor", link: "/vendor" },
  title: { name: "Test Product", link: "/product" },
  price: 100,
  currency: "USD",
  image: { url: "/test.jpg", alt: "Test Image" },
  variant: { color: "Red", material: "Cotton" },
  quantity: 1,
};

test('should render ProductName correctly', () => {
  render(
    <Product product={mockProduct}>
      <ProductName />
    </Product>
  );
  expect(screen.getByText("Test Product")).toBeInTheDocument();
});


// jest.mock("@/providers/cart-store-provider", () => ({
//   useCartStore: jest.fn(),
// }));



describe("Product Components", () => {
  test("renders ProductName correctly", () => {
    render(
      <Product product={mockProduct}>
        <ProductName />
      </Product>
    );
    expect(screen.getByText("Test Product")).toBe
  });

  test("renders ProductPrice correctly", () => {
    render(
      <Product product={mockProduct}>
        <ProductPrice />
      </Product>
    );
    expect(screen.getByText(formatCurrency(100, "USD"))).toBeInTheDocument();
  });

  test("renders ProductVendor correctly", () => {
    render(
      <Product product={mockProduct}>
        <ProductVendor />
      </Product>
    );
    expect(screen.getByText("Test Vendor")).toBeInTheDocument();
  });

  test("renders ProductImage correctly", () => {
    render(
      <Product product={mockProduct}>
        <ProductImage />
      </Product>
    );
    const img = screen.getByAltText("Test Image");
    expect(img).toHaveAttribute("src", expect.stringContaining(`/test.jpg`));
  });

  test("renders ProductVariants correctly", () => {
    render(
      <Product product={mockProduct}>
        <ProductVariants />
      </Product>
    );
    expect(screen.getByText("Red, Cotton")).toBeInTheDocument();
  });


});
