import "./Tag.css";

const Tag = ({
 label, tagClass, tagLabelClass, variant, icon 
}) => (
  <div className={["tag", tagClass].join(" ")}>
    {icon}
    <p className={["tag-label", tagLabelClass, variant].join(" ")}>{label}</p>
  </div>
);

export default Tag;
