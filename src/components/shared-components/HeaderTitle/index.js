import "./HeaderTitle.css";

const HeaderTitle = ({ title, items, titleClass, showDropdown = false }) => (
  <div className="d-flex justify-content-between align-items-center">
    <h5 className={["title", titleClass].join(" ")}>{title}</h5>
    <div>
      {showDropdown && (
        <select id="options">
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      )}
    </div>
  </div>
);

export default HeaderTitle;
