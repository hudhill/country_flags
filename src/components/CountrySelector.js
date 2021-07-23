import React from 'react';

//CountrySelector is getting some props passed in(countries)
const CountrySelector = ({countries, onCountrySelected}) => {

  // const props = {countries: [{}, {}, {}...]}

  const optionTags = countries.map((country) => {
    // each child in a list should have a unique key prop for React(works without, but you get an error)
    return <option value={country.name} key={country.name}>{country.name}</option>
  })
  
  const handleChange = (event) => {
    // call the onSelectedCountry function
    onCountrySelected(event.target.value);
  }

  return (
    <select onChange={handleChange}> {/* on change event run handleChage function */}
      { optionTags }
    </select>
  )

}

export default CountrySelector;