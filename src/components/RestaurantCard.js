import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    
    const imageUrl = CDN_URL + cloudinaryImageId;
    //console.log(cloudinaryImageId);
    //console.log(imageUrl);  // Log the final URL being used

    return (
        <div className="restro-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="restro-logo" alt="restro-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name} </h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} stars </h4>
            <h4>{costForTwo} </h4>
            <h4>{resData.info.sla.deliveryTime} minutes </h4>
        </div>
    );
};

export default RestaurantCard;