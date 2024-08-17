import { useState } from "react";
import "./index.css";
const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

const Capitals = () => {
  const [activeCapitalId, setActiveCapitalId] = useState(
    countryAndCapitalsList[0].id
  );
  const onChangeCapital = (event) => {
    setActiveCapitalId(event.target.value);
    //console.log(event.target.value);
  };
  //console.log(activeCapitalId);
  const activeCountryAndCapital = countryAndCapitalsList.find((eachItem) => {
    return eachItem.id === activeCapitalId;
  });
  //console.log(activeCountryAndCapital);

  //other way
  //   const getCountry = () => {
  //     const activeCountryAndCapital = countryAndCapitalsList.find(
  //       (eachCapital) => eachCapital.id === activeCapitalId
  //     );
  //     return activeCountryAndCapital.country;
  //   };
  return (
    <>
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select
              name="Capitals"
              className="capital-select"
              onChange={onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map((eachCountry) => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is Capital of which country?</p>
          </div>
          <p className="country">{activeCountryAndCapital.country}</p>
        </div>
      </div>
    </>
  );
};

export default Capitals;
