import React, {useState, useEffect} from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetails from '../components/CountryDetails';

// components are capitalized
const CountriesContainer = () => {

  // useState() returns two things: the state and a function to change the state

  // Countries array in state for CountriesContainer
  // inside the useState() we say what is the default, here we pass in an empty array []
  //   const stateArray = useState([]) -- define useState as a stateArray
  //   const countries = stateArray[0] -- first thing in the array assigned countries
  //   const setCountries = stateArray[1] -- second thing in the array assigned setCountries
  // destructured:
  const [countries, setCountries] = useState([])

  // Selected country in state for CountriesContainer
  const [selectedCountry, setSelectedCountry] = useState(null)

  // React will hook into (run) this function on initial render (it's where we fetch the data)
  useEffect(() => {
    console.log("useEffect has run")
    // Fetch the countries from the API
    // once the countries have been fetched, then convert into json format to get an array of country objects
    // then set state with the fetched countries
    fetch('https://restcountries.eu/rest/v2/all')
      .then(function(response){return response.json()}) // simplified with arrow function and implicit return: .then(res => res.json())
      // setCountries updates the state and therefore triggers a re-render
      // useEffect runs after every render unless we add a second argument, so we end up with an infinte function call
      .then(function(countries){setCountries(countries)}) // simplified: .then(countries => setCountries(countries))
  }, []) // the second argument of the empty array ensures that useEffect will only run once

  const onCountrySelected = (countryName) => {
    console.log(`onCountrySelected called: ${countryName}`)
    // find the specific country in countries array
    const foundCountry = countries.find((country) => {
      return country.name === countryName
    })
    // call setSelectedCountry() with the found country
    setSelectedCountry(foundCountry)
  }

  return (
    // you can only return one tag in the container
    <> {/* here we use a 'fragment' to achieve this. Could also be a div */}
      <CountrySelector 
        countries={countries}  // pass in countries as a prop to CountrySelector
        onCountrySelected={onCountrySelected} // pass down function onCountrySelected also as a prop
      />
      <CountryDetails country={selectedCountry}/> {/* when referencing any kind of dynamic data (i.e., a variable) use curlies {} */}
    </>
  )

}

export default CountriesContainer; // exports as is, the whole thing