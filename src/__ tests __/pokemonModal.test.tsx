import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { PokemonList } from "../components/PokemonList";
import store from "../store";

describe("PokemonList Component", () => {
  it("opens the modal and changes border color on Pokemon click", async () => {
    // Render the component with Redux store
    render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );

    // Get the first Pokemon element
    const pokemonElement = screen.getByTestId("poke-elem-test-0");

    // Click on the Pokemon element
    fireEvent.click(pokemonElement);

    // Wait for modal to be opened (I may need to adjust this based on my modal implementation)
    await waitFor(() => {
      const modalContent = screen.getByText("Pokemon Details :");
      expect(modalContent).toBeInTheDocument();
    });

    // Check if the border becomes blue (I may need to adjust the class name based on my styling)
    expect(pokemonElement).toHaveClass(
      "border-2 border-blue-950 transition-none"
    );
  });
});
