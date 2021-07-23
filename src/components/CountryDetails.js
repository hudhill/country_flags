import React from 'react';

// has the prop country passed down
const CountryDetails = ({country}) => {

  if( !country ){ // if no country yet (i.e., country is 'falsy') then:
    return "Select a country"
  }

  return (
    <>
      <p>{country.name}</p> {/* when referenceing variables use curlies */}
      <img src={country.flag} width="100px"/>
    </>
  )

}

export default CountryDetails;