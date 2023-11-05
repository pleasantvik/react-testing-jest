import { render, screen } from "@testing-library/react";
import UsersPage from "./User";

describe("Users Fetched", () => {
  test("user component render correctly", () => {
    render(<UsersPage />);

    const headingEl = screen.getByRole("heading");

    expect(headingEl).toBeInTheDocument();
  });

  //   test("render users list", async () => {
  //     render(<UsersPage />);
  //     const users = await screen.findAllByRole("listitem");

  //     expect(users).toHaveLength(3);
  //   });
});
