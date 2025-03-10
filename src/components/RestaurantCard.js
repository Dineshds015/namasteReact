import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    if (!resData || !resData.info) {
        // Handle the case where data is not available
        return <div>No data available</div>;
    }

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurentCard;