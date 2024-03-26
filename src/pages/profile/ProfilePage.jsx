import React from "react";
import { useSelector } from "react-redux";
import styles from "./profilePage.module.css";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log(currentUser);
  return (
    <div>
      {currentUser && (
        <div>
          <div className={styles.wrapperProfileHeader}>
            <div className={styles.bgImage}>
              <img src={currentUser.backgroundImage} alt="" />
            </div>
            <div className={styles.bg}>
              <div className={styles.profileImage}>
                <img src={currentUser.profileImage} alt="" />
              </div>
              <div className={styles.userInfo}>
                <h1>{currentUser.username}</h1>
                <h2>My status: {currentUser.description}</h2>
                <p>My posts:</p>
              </div>
            </div>
          </div>
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
