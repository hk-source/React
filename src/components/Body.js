import RestaurantCard from "./RestaurantCard";
import restroList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    //Local State Variable
    //const [restroList] = useState();
    //same as Local JS Variable
    //let restroList = [];
    
    const [resList,setresList] = useState(restroList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList=resList.filter(
                            (res) => res.info.avgRating>=4.5
                        );
                        setresList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;