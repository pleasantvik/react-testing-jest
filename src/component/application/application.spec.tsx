import { render, screen } from "@testing-library/react";
import Application from "./Application";
describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const inputEl = screen.getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
    const inputEl2 = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(inputEl2).toBeInTheDocument();
    const selectEl = screen.getByRole("combobox");
    expect(selectEl).toBeInTheDocument();
    const checkboxEl = screen.getByRole("checkbox");
    expect(checkboxEl).toBeInTheDocument();
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
  test("renders correct", () => {
    render(<Application />);
    const pageHeadign = screen.getByRole("heading", {
      level: 1,
    });

    expect(pageHeadign).toBeInTheDocument();

    const nameEl = screen.getByLabelText("Name");
    expect(nameEl).toBeInTheDocument();

    const termsEl = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsEl).toBeInTheDocument();

    //? GetbyPlaceholder
    const nameEl3 = screen.getByPlaceholderText("fullname");
    expect(nameEl3).toBeInTheDocument();

    //? getByText
    const paragraphEl = screen.getByText("All fields are mandatory");
    expect(paragraphEl).toBeInTheDocument();

    //? getByDisplayValue
    const nameEl4 = screen.getByDisplayValue("Adedayo");
    expect(nameEl4).toBeInTheDocument();

    //? getByAltText
    const imgEl = screen.getByAltText("test");
    expect(imgEl).toBeInTheDocument();
  });
});

// Getting the roles
// testing-libraries.com
