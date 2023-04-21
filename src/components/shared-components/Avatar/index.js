import UserIcon from "assets/images/user-icon.png";
import "./Avatar.css";

const Avatar = ({ title, source = UserIcon, width, height, avatarClass }) => {
  const customStyles = {
    height,
    width,
  };
  return (
    <div style={customStyles} className={["avatar", avatarClass].join(" ")}>
      <img src={source} alt={title} width={width} height={height} />
    </div>
  );
};

export default Avatar;
