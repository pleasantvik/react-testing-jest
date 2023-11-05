import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet", () => {
  it("render correctly", () => {
    // Create the virtual dom of the component we are trying to render
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)

    expect(textElement).toBeInTheDocument()
  })

  it("renders correctly", () => {
    render(<Greet />)
    const textEl = screen.getByText(/hello/i)

    expect(textEl).toBeInTheDocument()
  })

  it("renders with a name", () => {
    render(<Greet name="Adedayo" />)

    const textEl = screen.getByText("Hello Adedayo")

    expect(textEl).toBeInTheDocument()
  })
})
