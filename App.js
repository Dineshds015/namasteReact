import React from "react";
import ReactDOM from "react-dom/client";


/*
Header
    -Logo
    -Nav Items
Body
    -Search
    -RestaurantContainer
        -RestaurantCard
            -Img
            -Name of Res, Star Rating,ciusines,deliveryTime
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src="https://i.pinimg.com/736x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

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
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};


const resList={
    "restaurants": [
    {
        "info": {
        "id": "23786",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "b4zubbrh1yiw67cr2wys",
        "locality": "4th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 30,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 02:59:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-4th-block-koramangala-bangalore-23786",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental"
        ],
        "avgRating": 4.4,
        "parentId": "371281",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 04:00:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹499",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 05:00:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "22993",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "5th Phase",
        "areaName": "JP Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Ice Cream",
            "Beverages",
            "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 7.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "7.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 03:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                "shortDescription": "Perfect Cake Delivery",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                    "shortDescription": "Perfect Cake Delivery"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1000",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-5th-phase-jp-nagar-bangalore-22993",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "341895",
        "name": "Burger Seigneur",
        "cloudinaryImageId": "k4z46joj5ozirqpyww1z",
        "locality": "Indiranagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹1300 for two",
        "cuisines": [
            "American",
            "Continental",
            "Burgers",
            "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "12095",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 5.9,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 02:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
            {
                "imageId": "newg.png",
                "description": "Gourmet"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                    }
                }
                ]
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹899",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "506324",
        "name": "Louis Burger",
        "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
        "locality": "6Th Block, Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
            "Burgers",
            "American",
            "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "22485",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 04:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
            {
                "imageId": "newg.png",
                "description": "Gourmet"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                    }
                }
                ]
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "10576",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 04:00:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
            
        },
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "23678",
        "name": "McDonald's",
        "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 03:15:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1000",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "535102",
        "name": "Nomad Pizza- Traveller Series",
        "cloudinaryImageId": "82294f129e75eac74f6e6a642cd58c06",
        "locality": "Roopena Agrahara",
        "areaName": "HSR",
        "costForTwo": "₹850 for two",
        "cuisines": [
            "Pizzas",
            "Fast Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "251919",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 04:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
            {
                "imageId": "newg.png",
                "description": "Gourmet"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                    }
                }
                ]
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/nomad-pizza-traveller-series-roopena-agrahara-hsr-bangalore-535102",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "2675",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "7th Sector",
        "areaName": "Hsr Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4,
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 03:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹449",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-7th-sector-hsr-layout-bangalore-2675",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "68144",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Bakery",
            "Desserts",
            "Ice Cream",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "9696",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 05:00:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-6th-block-koramangala-bangalore-68144",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "75966",
        "name": "Kaati Zone Rolls & Wraps",
        "cloudinaryImageId": "ibmfw10arqzrdibq03mt",
        "locality": "KHB Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Fast Food",
            "Bengali",
            "Beverages",
            "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "248306",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 05:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-khb-colony-koramangala-bangalore-75966",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "74444",
        "name": "Samosa Party",
        "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹100 for two",
        "cuisines": [
            "Fast Food",
            "Snacks",
            "Beverages",
            "Chaat",
            "North Indian",
            "Street Food",
            "Sweets",
            "Desserts",
            "Punjabi",
            "Bakery"
        ],
        "avgRating": 4.4,
        "parentId": "6364",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-08 00:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "718072",
        "name": "ENSO - Sourdough Pizza by Nomad",
        "cloudinaryImageId": "3ecbd930fa86d42149016aa5c8093c4e",
        "locality": "BTM Layout",
        "areaName": "HSR",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Pizzas",
            "Fast Food",
            "Desserts",
            "Salads",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "77344",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 04:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
            {
                "imageId": "newg.png",
                "description": "Gourmet"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                    }
                }
                ]
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/enso-sourdough-pizza-by-nomad-btm-layout-hsr-bangalore-718072",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "346",
        "name": "Momoz",
        "cloudinaryImageId": "pnlkjsjxqcjgzwwya3fd",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Chinese",
            "Thai",
            "Seafood",
            "Asian",
            "Malaysian"
        ],
        "avgRating": 4.1,
        "parentId": "2486",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 04:30:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/momoz-2nd-stage-btm-layout-bangalore-346",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "42060",
        "name": "Sharief Bhai",
        "cloudinaryImageId": "9ca4ac15ca5cdee1e71efe15909d465f",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Arabian",
            "South Indian",
            "Rolls & Wraps",
            "Street Food",
            "Fast Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "5734",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 03:00:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/sharief-bhai-koramangala-bangalore-42060",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "407064",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "8c6d80411d9355da849a2e484bb1c7c1",
        "locality": "KHB Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Chinese",
            "Tibetan",
            "Fast Food"
        ],
        "avgRating": 4,
        "parentId": "382343",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 05:00:00",
            "opened": true
        },
        "badges": {
            
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹115"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-khb-colony-koramangala-bangalore-407064",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "68142",
        "name": "Indiana Burgers",
        "cloudinaryImageId": "sqj2kcjjx6n0ng6te1hp",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Beverages",
            "Desserts"
        ],
        "avgRating": 3.9,
        "parentId": "5714",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 05:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹115"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/indiana-burgers-6th-block-koramangala-bangalore-68142",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "376319",
        "name": "The Brooklyn Creamery - Healthy Ice Cream",
        "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
        "locality": "4TH SECTOR",
        "areaName": "HSR LAYOUT",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Healthy Food"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "236673",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 4.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-02 06:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
            {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                    }
                }
                ]
            }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-4th-sector-hsr-layout-bangalore-376319",
        "type": "WEBLINK"
        }
    },
    {
        "info": {
        "id": "56786",
        "name": "Samosa Singh",
        "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
        "locality": "New Thipasandra",
        "areaName": "Indiranagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "North Indian",
            "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "5639",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 6.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "6.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-08 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
            {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
            }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
            
        },
        "type": "F",
        "badgesV2": {
            "entityBadges": {
            "imageBased": {
                "badgeObject": [
                {
                    "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                }
                ]
            },
            "textBased": {
                
            },
            "textExtendedBadges": {
                
            }
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
                
            },
            "video": {
                
            }
            }
        },
        "reviewsSummary": {
            
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
            
        }
        },
        "analytics": {
        
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/samosa-singh-new-thipasandra-indiranagar-bangalore-56786",
        "type": "WEBLINK"
        }
    }
    ]
}
const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
            {
                resList.restaurants.map((restaurant) => (
                    <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                ))
            }
            </div>
        </div>
    );
};
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);