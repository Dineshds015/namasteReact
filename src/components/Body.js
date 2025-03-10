import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  const [filteredRestraunt,setfilteredRestraunt]=useState([]);

  const [searchText,setsearchText]=useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);

    setlistOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredRestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  return listOfRestaurants.length===0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            //Filter the restraunts cards and apdate the UI
            //SearchText
            const filteredRestraunts=listOfRestaurants.filter((res)=>res.info.name.includes(searchText));
            setfilteredRestraunt(filteredRestraunts);
          }}>Search</button>
        </div>
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
          filteredRestraunt.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurentCard
              key={restaurant.info.id}
              resData={restaurant}
            /></Link>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default Body;
