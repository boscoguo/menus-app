import { render, screen } from "@testing-library/react";
import CommonNode from ".";

describe("<CommonNode />", () => {
	it("render The related page", () => {
		render(<CommonNode data="test" />)
		const page = screen.getByText(/test/i);
		expect(page).toBeInTheDocument();
	})
})