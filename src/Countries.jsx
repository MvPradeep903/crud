import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Countries() {
  var [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https:restcountries.com/v3/all")
      .then((res) => res.json())
      .then((data) => setCountries((preVdata) => [...preVdata, ...data]));
  }, []);
  return (
    <div className="p-4">
      <h1>Countries</h1>
      <div className="d-flex flex-wrap">
            <div className="w-50 overflow-scroll" style={{height:'500px'}}>
                    {
                        countries.map((c,i) => {
                                return (
                                    <li className="list-unstyled" key={i}><Link to={`countryDetails/${c.name.common}`} >{c.name.common}</Link></li>
                                );
                        })
                    
                    }
            </div>
            <div className="w-50">
                <Outlet/>
            </div>
      </div>
    </div>
  );
}

export default Countries;
