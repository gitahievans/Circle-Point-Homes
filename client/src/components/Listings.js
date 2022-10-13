import React, { useEffect, useState } from "react";

const listings_URL = "https://api-bright.herokuapp.com/homes";
console.log(listings_URL);

function Listings() {
  const [listings, setlistings] = useState([]);

  const listingsFetcher = () => {
    //fetches particulars of the listings
    fetch(listings_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setlistings(data);
      });
  };

  useEffect(listingsFetcher, []);


  const eachlisting = listings.map((listing) => (
    <div className="grid" key={listing.id}>
     
      <div className="cards">
         <h5>title:{listing.title}</h5>
        <h5>Location:{listing.location}</h5>
        <h5>Name: {listing.name}</h5>
        <p>{listing.description}</p>
       
      </div>
    </div>
  ));

  return (
    <div>
      <h1 id="listing-title">
       Current listings {" "}
      </h1>
      {}
      {eachlisting}
    </div>
  );
}

export default Listings;