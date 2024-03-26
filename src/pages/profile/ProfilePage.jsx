import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div className="profile-container">
      {currentUser && (
        <div className="profile">
          <div className="profile-header">
            <img
              className="background-image"
              src={currentUser.backgroundImage}
              alt=""
            />
            <img
              className="profile-image"
              src={currentUser.profileImage}
              alt=""
            />
            <h2 className="username">{currentUser.username}</h2>
            <p className="bio">My BIO: {currentUser.description}</p>
          </div>
          <div className="profile-posts">
            <h2 className="posts-title">My posts:</h2>
            <div className="posts-list">
              {currentUser.posts &&
                currentUser.posts.map((item) => (
                  <div className="post" key={item.id}>
                    <p className="post-author">Author: {item.author}</p>
                    <img className="post-image" src={item.image} alt="" />
                    <div className="post-details">
                      <h3 className="post-title">{item.title}</h3>

                      <p className="post-description">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
