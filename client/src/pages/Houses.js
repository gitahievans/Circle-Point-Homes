
import React, { useEffect, useState } from "react";


const houses_URL = "https://api-bright.herokuapp.com/homes";

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
         <img  src="{house.image_url}" alt="building" style={{height:"50%"}} />
         <h5>title:{house.title}</h5>
         <h5>Category:{house.category}</h5>
         <h5>Price:{house.price[0]}</h5>
        {/* <h5>Location:{house.location.map((items) =>( */}
          <h2>{house.location.city}</h2>
        {/* ))}</h5> */}
        <h5>Landlord:{house.owner[1]}</h5>
        
        <p>{house.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 id="house-title">
       Current houses {" "}
      </h1>
      <p>Write Your Life, Find Your Home.</p>
      {}
      {eachHouse}
      <button>Explore All</button>
    </div>
  );
}

export default Houses;