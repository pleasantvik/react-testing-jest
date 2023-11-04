import { render, screen, logRoles } from "@testing-library/react";

import Skill from "./Skill";

describe("Skill", () => {
  const skills = ["HTML", "CSS", "JS"];

  test("renders correctlly", () => {
    render(<Skill skills={skills} />);

    const listEl = screen.getByRole("list");

    expect(listEl).toBeInTheDocument();
  });
  test("renders skill", () => {
    render(<Skill skills={skills} />);

    const listEls = screen.getAllByRole("listitem");

    expect(listEls).toHaveLength(skills.length);
  });

  test("render login button", () => {
    render(<Skill skills={skills} />);

    const loginBtn = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginBtn).toBeInTheDocument();
  });

  //! Testing an element is not present
  test("render start learning button is not render", () => {
    render(<Skill skills={skills} />);

    const loginBtn = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(loginBtn).not.toBeInTheDocument();
  });

  //? Testing appearing and disappearing HTML

  test("render start learning button eventually render", async () => {
    const view = render(<Skill skills={skills} />);
    logRoles(view.container);
    // screen.debug();

    const loginBtn = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(loginBtn).toBeInTheDocument();
  });
});
