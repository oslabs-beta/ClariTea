import React from "react";
import { render, wait, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createHashHistory } from "history";
import App from "./App";

describe("AppRouter component", () => {
  afterEach(jest.resetAllMocks);

  xit("routes correctly to main container", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/MainContainer/i));
    debug();
  });

  xit("navigates correctly to main", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/MainContainer/i));
    debug();
  });

  xit("navigates correctly to tree", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/tree");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/Schema/i));
    debug();
  });

  xit("navigates correctly to schema", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/schema");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/Schema/i));
    debug();
  });

  xit("navigates correctly to connect form", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/connect");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/ConnectForm/i));
    debug();
  });
  xit("navigates correctly to replication RepTree", async () => {
    const history = createHashHistory({ initialEntries: ["/"] });
    history.push("/repTree");
    const { container, getByText, debug } = render(<App />);
    await waitForElement(() => getByText(/RepTree/i));
    debug();
  });
  
});