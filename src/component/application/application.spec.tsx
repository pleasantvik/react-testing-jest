import { render, screen } from "@testing-library/react"
import Application from "./Application"
describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)
    const inputEl = screen.getByRole("textbox", {
      name: "First Name",
    })
    expect(inputEl).toBeInTheDocument()
    const inputEl2 = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(inputEl2).toBeInTheDocument()
    const selectEl = screen.getByRole("combobox")
    expect(selectEl).toBeInTheDocument()
    const checkboxEl = screen.getByRole("checkbox")
    expect(checkboxEl).toBeInTheDocument()
    const buttonEl = screen.getByRole("button")
    expect(buttonEl).toBeInTheDocument()
  })
  test("renders correct", () => {
    render(<Application />)
    const pageHeadign = screen.getByRole("heading", {
      level: 1,
    })

    expect(pageHeadign).toBeInTheDocument()
    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2,
    })

    expect(sectionHeading).toBeInTheDocument()

    const nameEl = screen.getByLabelText("First Name", {
      selector: "input",
    })
    expect(nameEl).toBeInTheDocument()

    const termsEl = screen.getByLabelText("I agree to the terms and conditions")
    expect(termsEl).toBeInTheDocument()

    //? GetbyPlaceholder
    const nameEl3 = screen.getByPlaceholderText("fullname")
    expect(nameEl3).toBeInTheDocument()

    //? getByText
    const paragraphEl = screen.getByText("All fields are mandatory")
    expect(paragraphEl).toBeInTheDocument()

    //? getByDisplayValue
    const nameEl4 = screen.getByDisplayValue("Adedayo")
    expect(nameEl4).toBeInTheDocument()

    //? getByAltText
    const imgEl = screen.getByAltText("test")
    expect(imgEl).toBeInTheDocument()
    //? getByTitle
    const closeEl = screen.getByTitle("close")
    expect(closeEl).toBeInTheDocument()
    //? getByTitle
    const customEl = screen.getByTestId("custom-element")
    expect(customEl).toBeInTheDocument()
  })
})

// Getting the roles
// testing-libraries.com
