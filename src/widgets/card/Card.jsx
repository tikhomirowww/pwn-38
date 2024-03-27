import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Card = ({ item, toggleLike, likedPosts }) => {
  return (
    <div className="post" key={item.id}>
      <img className="post-image" src={item.image} alt="" />
      <div onClick={() => toggleLike(item.id)}>
        {likedPosts.has(item.id) ? (
          <FcLike size={25} />
        ) : (
          <FcLikePlaceholder size={25} />
        )}
      </div>
      <p>{item.likes}</p>
      <div className="post-details">
        <h3 className="post-title">{item.title}</h3>
        <p className="post-description">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
