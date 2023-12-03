import { Routes, Route } from "react-router";
import { Header } from "./components";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/:name" element={<CountryPage />} />
      </Routes>
    </>
  );
};

export default App;
