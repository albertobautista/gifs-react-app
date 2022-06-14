import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const titulo = "Pokemon";
  const url = "https://github.com/";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={titulo} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
