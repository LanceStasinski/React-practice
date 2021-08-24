import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing - basically no actions right now.

    //Assert
    const hellowWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("renders it's good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("render changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("first paragraph is removed when button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("it's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
