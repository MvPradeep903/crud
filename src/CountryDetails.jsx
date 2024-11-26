import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function CountryDetails() {
  var location = useLocation();
  var {cname} = useParams();
  console.log("Name:", cname);
  console.log(location);
  var [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${cname}`)
      .then((res) => res.json())
      .then((data)=>setDetails({...data[0]}))
  }, [cname]);
  console.log("Details:", details);
  return (
    <div className="p-4" key={details.id}>
      
      {details.flags && details.flags.png && (
        <img src={details.flags.png} alt={`${details.name.common} flag`} width="300px" />
      )}
      {/* <img src={details?.flags.png} width="200px" /> */}
      <h2>Name: {cname}</h2>
      <h2>Capital: {details.capital}</h2>
      <h2>Population: {details.population}</h2>
    </div>
  );
}

export default CountryDetails;
// useEffect(() => {
//     fetch(`https://restcountries.com/v3/name/${a.cname}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // if (data && data.length > 0) {
//         //   setDetails({...data[0]});
//         // }
//         setDetails({...data[0]})
//       });
//   }, []);
//   console.log("Details :", details);
//   return (
//     <div className="p-4" key={details.id}>
//       <h1>{a.cname}</h1>
//       <h2>{details.population}</h2>
    //   {/* {details.flags && details.flags[0] && (
    //     <img src={details.flags[0]} alt={`${details.name.common} flag`} width="200px" />
    //   )} */}
      
//       <img src={details.flags[0]} width="200px" />
//     </div>
//   );