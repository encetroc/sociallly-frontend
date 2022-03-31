import { useEffect, useState } from "react";
import Avatar from "../../assets/avatar.jpg";

export function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="user_container">
      <img
        width={128}
        height={128}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
      <div>{user?.email}</div>

      <div>{`${user?.firstName} ${user?.lastName}`}</div>
    </div>
  );
}
