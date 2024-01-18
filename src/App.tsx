import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { PokemonList } from "./components/PokemonList";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WelcomeBanner />
                <PokemonList />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
