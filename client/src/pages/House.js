
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

const houses_URL = "https://api-bright.herokuapp.com/homes";
console.log(houses_URL);


function Houses() {
// carousel 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


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
    <Carousel activeIndex={index} onSelect={handleSelect} key={house.id}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={house.image_url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{house.title}</h3>
          <h4>{house.category}</h4>
          <h2>{house.location[1]}</h2>
          <h5>Price Per Month:{house.price[0]}</h5>
          <h4>{house.owner[1]}</h4>
          <p>{house.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
