import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

describe("CounterTwoTest", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textEl = screen.getByText("Counter Two");

    expect(textEl).toBeInTheDocument();
  });
  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
