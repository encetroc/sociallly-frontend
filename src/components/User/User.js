import Avatar from "../../assets/avatar.jpg";

export function User() {
  return (
    <div>
      <img
        width={128}
        height={128}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
    </div>
  );
}
