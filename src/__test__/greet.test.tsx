import { render, screen } from "@testing-library/react";
import Greet from "../component/Greet/Greet";

describe("Greet", () => {
  test("render correctly", () => {
    // Create the virtual dom of the component we are trying to render
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);

    expect(textElement).toBeInTheDocument();
  });

  test("renders correctly", () => {
    render(<Greet />);
    const textEl = screen.getByText(/hello/i);

    expect(textEl).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Adedayo" />);

    const textEl = screen.getByText("Hello Adedayo");

    expect(textEl).toBeInTheDocument();
  });
});
