import MuiMode from "./MuiMode"
// import AppProvider from "../provider/AppProvider";
import { render, screen } from "../../test-utils"

describe("MUI MODe", () => {
  test("testing provider", () => {
    render(<MuiMode />)

    const headingEl = screen.getByRole("heading")

    expect(headingEl).toHaveTextContent("dark mode")
  })
})
