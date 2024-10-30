// test for static compentent: tests page title

test('Can use jsdom', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

import React from "react"
import { render } from "@testing-library/react"

// You have to write data-testid
const Title = () => <h1 data-testid="title-test">My first gatsby site</h1>

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId("title-test")).toHaveTextContent("My first gatsby site")
  // --> Test will pass
})