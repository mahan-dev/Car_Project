"use client"
import React from 'react';


const StarCard = () => {
    return (
        <div>
            {isWhishList(item.model_name, item.model_make_id) ? (
                <GoStarFill
                  style={{ color: "white" }}
                  onClick={() =>
                    whishListHandler(item, { whishList, setWhishList })
                  }
                />
              ) : (
                <FiStar
                  style={{ color: "white" }}
                  onClick={() =>
                    whishListHandler(item, { whishList, setWhishList })
                  }
                />
              )}
        </div>
    );
};

export default StarCard;