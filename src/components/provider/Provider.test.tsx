import { getByTestId, getByRole, screen, render, cleanup } from "@testing-library/react";

import menuData from "../../data/menuLists.json";
import Provider from "./Provider"
import userEvent from "@testing-library/user-event";

describe("<Provider />", () => {
    it("should render the correct node", () => {
        render(<Provider><p>test menu</p></Provider>)
        const domElement = screen.getByText("test menu");
        expect(domElement).toBeInTheDocument();
    })
})
