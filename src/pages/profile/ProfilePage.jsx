import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log(currentUser);
  return (
    <div>
      {currentUser && (
        <div>
          <img src={currentUser.backgroundImage} alt="" />
          <img src={currentUser.profileImage} alt="" />
          <h2>{currentUser.username}</h2>
          <p>My BIO: {currentUser.description}</p>
          <h2>My posts:</h2>
          <div>
            {currentUser.posts.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
