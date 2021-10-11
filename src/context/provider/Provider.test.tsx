import { screen, render } from "@testing-library/react";

import Provider from "./Provider";

describe("<Provider />", () => {
  it("should render the correct node", () => {
    render(
      <Provider>
        <p>test menu</p>
      </Provider>
    );
    const domElement = screen.getByText("test menu");
    expect(domElement).toBeInTheDocument();
  });
});
