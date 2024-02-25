import { render } from "@testing-library/react";
import HomePage from "../Pages/Home-page";

describe("HomePage", () => {
    it("renders without error", () => {
        render(<HomePage />);
    });
});
