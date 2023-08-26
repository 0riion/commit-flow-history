import { render } from "@testing-library/react";
import { ReduxProvider } from "../../redux/provider";

describe("ReduxProvider", () => {
  it("should render children", () => {
    const { getByText } = render(
      <ReduxProvider>
        <div>Test</div>
      </ReduxProvider>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });
});