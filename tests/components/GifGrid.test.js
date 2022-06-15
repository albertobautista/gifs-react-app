import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Pokemon";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));

    // screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imagenes mediante el custom Hook useFetchGifs", () => {
    const gifs = [
      { id: "abc", title: "Pokemon", url: "http://pokemon.jpg" },
      { id: "def", title: "Digimon", url: "http://digimon.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
