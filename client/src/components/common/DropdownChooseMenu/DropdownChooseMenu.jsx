import { useState } from "react";
import styles from "./DropdownChooseMenu.module.scss";
import arrowDown from "../../../assets/icons/down-arrow.png";
import deleteCross from "../../../assets/icons/closeIcon_black.png";
import PropTypes from "prop-types";

// const serviceOptions = [
//   { value: "primer", label: "Primer" },
//   { value: "travertin", label: "Travertin" },
//   { value: "varnish", label: "Varnish" },
//   { value: "wax", label: "Wax" },
//   { value: "venecia", label: "Venecia" },
// ];

const DropdownChooseMenu = ({dataObject, listName}) => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const chooseDataHandler = (e) => {
    if (!data.includes(e.target.textContent)) {
      setData([...data, e.target.textContent]);
    }
  };

  const deleteDataHandler = (e) => {
    setData(data.filter(item => item !== e.target.dataset.name));
  };

  const dropMenuBehaviorHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.dropmenu}>
      <div className={styles.dropmenu__materialsWrapper}>
        <div className={styles.dropmenu__materials_title}>
          <p className={styles.dropmenu__materials}>List of {listName}</p>
          <img
            className={styles.dropmenu__materials_img}
            onClick={dropMenuBehaviorHandler}
            src={arrowDown}
            alt="arrow down"
            style={{ transform: isClicked ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        {data &&
          data.map((item) => (
            <div className={styles.dropmenu__materials_itemWrapper} key={item}>
              <img
                className={styles.dropmenu__materials_itemImg}
                src={deleteCross}
                alt="delete"
                data-name={item}
                onClick={deleteDataHandler}
              />
              <span className={styles.dropmenu__materials_item}>{item}</span>
            </div>
          ))}
      </div>

      <ul
        className={styles.dropmenu__list}
        style={{ display: isClicked ? "flex" : "none" }}
        onMouseLeave={dropMenuBehaviorHandler}
      >
        {dataObject &&
          dataObject.map((item) => (
            <li key={item.name} onClick={chooseDataHandler}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

DropdownChooseMenu.propTypes = {
  dataObject: PropTypes.array.isRequired,
  listName: PropTypes.string.isRequired
}

export default DropdownChooseMenu;
