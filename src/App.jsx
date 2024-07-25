import { useState } from "react";
import "./App.css";
import companiesData from './companies.json'
import Navbar from "./components/Navbar";
import technologiesData from './technologies.json'
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {

  const [companies, setCompanies] = useState(companiesData)
  const [technologies, setTechnologies] = useState(technologiesData)


  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />

      </Routes>

    </div>
  );
}

export default App;
