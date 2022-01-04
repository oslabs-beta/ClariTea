import React from "react";
import { render, wait, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createHashHistory } from "history";
import App from "./App";

describe("AppRouter component", () => {
  afterEach(jest.resetAllMocks);

  it("navigates correctly to tree", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/tree");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/Tree/i));
    debug();
  });
  
});