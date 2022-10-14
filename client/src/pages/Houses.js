
import React, { useEffect, useState } from "react";

const houses_URL = "/houses";
console.log(houses_URL);

function Houses() {
  const [houses, sethouses] = useState([]);

  const housesFetcher = () => {
    //fetches particulars of the houses
    fetch(houses_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sethouses(data);
      });
  };

  useEffect(housesFetcher, []);


  const eachHouse = houses.map((house) => (
    <div className="grid" key={house.id}>
     
      <div className="cards">
         <h5>title:{house.title}</h5>
        <h5>Location:{house.location}</h5>
        <h5>Name: {house.name}</h5>
        <p>{house.description}</p>
       
      </div>
    </div>
  ));

  return (
    <div>
      <h1 id="house-title">
       Current houses {" "}
      </h1>
      {}
      {eachHouse}
    </div>
  );
}

export default Houses;