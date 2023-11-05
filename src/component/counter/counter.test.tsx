import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from ".";
import exp from "constants";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });

    expect(incrementBtn).toBeInTheDocument();
  });

  test("renders a count of zero", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("0");
  });

  //? Test user interaction
  test("renders a count of 1 after btn click", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);

    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("1");
  });
  test("renders a count of 2 after btn click", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    await user.click(incrementBtn);

    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("2");
  });

  test("renders 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");

    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole("button", {
      name: "set",
    });
    await user.click(setBtn);

    const countEl = screen.getByRole("heading");

    expect(countEl).toHaveTextContent("10");
  });

  test("Elements focus in right order", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", {
      name: "set",
    });
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });

  test("clear input box", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");

    await user.clear(amountInput);
    expect(amountInput).toHaveValue(null);
  });
});
