import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterPage from "./Pages/Character-page";
import SearchComponent from "./Components/Search";
import CharactersPage from "./Pages/Characters-page";



function App() {
 
  return (
    <Routes>
      <Route  path="/" element={<CharactersPage />} />
      <Route  path="/:id" element={<CharacterPage />} />
      <Route  path="/search" element={<SearchComponent />} />
    </Routes>
  );
}

export default App;
