import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ThemeComponent from "./ThemeComponent";
import { ThemeProvider } from "../context/ThemeContext";

describe("ThemeComponent", () => {
  test("renders ThemeComponent component", () => {
    render(<ThemeComponent />);
    expect(screen.getByText("Update theme")).toBeInTheDocument();
    expect(screen.getByText("Function theme")).toBeInTheDocument();
  });
  test("toggle theme", () => {
    render(
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    );
    userEvent.click(screen.getByRole("button", { name: "Update theme" }));
    expect(screen.getByText("Function theme")).toHaveStyle(
      "background-color: rgb(204, 204, 204); color: rgb(51, 51, 51); padding: 2rem; margin: 2rem;"
    );
  });
});
