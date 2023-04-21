/* eslint-disable react/no-array-index-key */
import AndroidIcon from "assets/images/tags/android-icon.png";
import FlutterIcon from "assets/images/tags/flutter-icon.png";
import NodeJSIcon from "assets/images/tags/node-js-icon.png";
import PHPIcon from "assets/images/tags/php-icon.png";
import PythonIcon from "assets/images/tags/python-icon.png";
import RubyIcon from "assets/images/tags/ruby-icon.png";
import UserImage from "assets/images/user-profile.png";
import CrownIcon from "assets/svg/CrownIcon";
import InfoIcon from "assets/svg/InfoIcon";
import { useMemo } from "react";
import AppButton from "../AppButton";
import Avatar from "../Avatar";
import Tag from "../Tag";
import "./UserProfile.css";

const UserProfile = ({ showFollowButton = false, showRole = false }) => {
  const tagList = useMemo(
    () => [
      {
        label: "Python · 85%",
        icon: <img src={PHPIcon} alt="php-icon" width="20" height="20" />,
        tagClass: "pastel-orange",
      },
      {
        label: "Android · 90%",
        icon: <img src={AndroidIcon} alt="android-icon" width="30" height="20" />,
        tagClass: "aqua-green",
      },
      {
        label: "PHP · 76%",
        icon: <img src={PythonIcon} alt="python-icon" width="20" height="20" />,
        tagClass: "silk-blue",
      },
      {
        label: "NodeJS · 92%",
        icon: <img src={NodeJSIcon} alt="node-js-icon" width="20" height="20" />,
        tagClass: "light-turquoise",
        tagLabelClass: "node-js",
      },
      {
        label: "Flutter · 54%",
        icon: <img src={FlutterIcon} alt="flutter-icon" width="20" height="16" />,
        tagClass: "crystal-blue",
      },
      {
        label: "Ruby · 88%",
        icon: <img src={RubyIcon} alt="ruby-icon" width="20" height="20" />,
        tagClass: "coral-pink",
      },
    ],
    [],
  );
  return (
    <div className="social">
      <div className="social_action">
        <Avatar source={UserImage} height={124} width={124} avatarClass="social_action-avatar" />
        <div>
          <AppButton text="Contact me" variant="blue" buttonClass="social_action-contact" />
          {showFollowButton && <AppButton text="Follow" />}
        </div>
      </div>
      <div className="social_info">
        <p className="social_info-name">Adeyemi Oluwafemi</p>
        <p className="social_info-bio">
          I’m a talented full-stack developer with a passion for building high-quality, scalable,
          and maintainable web applications. With my extensive experience working with popular
          frameworks such as Spring, Django, and React.
        </p>
        <div className="social_tags">
          {tagList.map((tag, index) => (
            <Tag
              key={`tag-${index}`}
              label={tag.label}
              icon={tag.icon}
              tagClass={tag.tagClass}
              tagLabelClass={tag.tagLabelClass}
            />
          ))}
        </div>
        {showRole && (
          <div className="d-flex align-items-center gap-12 justify-content-between social_info-role">
            <CrownIcon />
            <div>
              <div className="d-flex align-items-center gap-5">
                <h5>Rank</h5>
                <InfoIcon />
              </div>

              <h6>Senior Frontend Developer</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserProfile;
