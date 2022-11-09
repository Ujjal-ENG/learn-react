import React, { useState, useEffect } from "react";
import Countries from "./components/CountryApp/Countries";

import "./App.css";
import Search from "./components/CountryApp/Search";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const fillter = filterCountries.filter(
      (country) => country.name.common !== name
    );
    setFilterCountries(fillter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
  };

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filterCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
}

export default App;
