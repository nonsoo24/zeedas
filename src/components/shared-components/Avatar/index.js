import UserIcon from "assets/images/user-icon.png";
import "./Avatar.css";

const Avatar = ({
 title, source = UserIcon, width, height, avatarClass, initials 
}) => (
  <div className={["avatar", avatarClass].join(" ")}>
    {!initials ? <img src={source} alt={title} width={width} height={height} /> : <p>{initials}</p>}
  </div>
);

export default Avatar;
