import RestaurentCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  
  // const [listOfRestaurants, setlistOfRestaurants] = useState([
  //   {
  //     "info": {
  //       "id": "23786",
  //       "name": "Domino's Pizza",
  //       "cloudinaryImageId": "b4zubbrh1yiw67cr2wys",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       "avgRating": 3.2,
  //       "sla": {
  //         "deliveryTime": 30,
  //       },
  //     },
  //   },
  //   {
  //     "info": {
  //       "id": "23787",
  //       "name": "Smino's Pizza",
  //       "cloudinaryImageId": "b4zubbrh1yiw67cr2wys",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       "avgRating": 4.4,
  //       "sla": {
  //         "deliveryTime": 30,
  //       },
  //     },
  //   },
  //   {
  //     "info": {
  //       "id": "23788",
  //       "name": "Tilmino's Pizza",
  //       "cloudinaryImageId": "b4zubbrh1yiw67cr2wys",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       "avgRating": 4.4,
  //       "sla": {
  //         "deliveryTime": 30,
  //       },
  //     },
  //   },
  // ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            if (Array.isArray(listOfRestaurants)) {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setlistOfRestaurants(filteredList); //Rerenders the page
            }
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {Array.isArray(listOfRestaurants) ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurentCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default Body;
