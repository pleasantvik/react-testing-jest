import { render, screen } from "@testing-library/react";

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
});
