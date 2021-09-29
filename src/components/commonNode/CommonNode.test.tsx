import { render, screen } from "@testing-library/react";
import CommonNode from "./CommonNode";

describe("<CommonNode />", () => {
	it("render The related page when the router switch to the related page", () => {
		render(<CommonNode data="test" />)
		const page = screen.getByText(/test/i);
		expect(page).toBeInTheDocument();
	})
})