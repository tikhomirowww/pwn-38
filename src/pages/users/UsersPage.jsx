import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users/users.actions";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const { users, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {currentUser &&
        users
          .filter((user) => user.id !== currentUser.id)
          .map((item) => (
            <Link
              style={{
                width: "400px",
                display: "block",
                all: "unset",
                cursor: "pointer",
              }}
              key={item.id}
              to={`/user/${item.id}`}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid black",
                  width: "400px",
                }}
              >
                <img
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  width={150}
                  height={150}
                  src={item.profileImage}
                  alt=""
                />
                <h3>{item.username}</h3>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default UsersPage;
