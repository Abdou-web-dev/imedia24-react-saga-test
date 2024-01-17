import "./App.css";
import { PokemonList } from "./components/PokemonList";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <div>
      <WelcomeBanner />
      <PokemonList />
    </div>
  );
}

export default App;
