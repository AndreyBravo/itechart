import { useState, useEffect, useMemo } from "react";

export default function PSelect({
  nameSelected,
  curruntSelected,
  options,
  changeSelect,
  isInput,
}) {
  const [currentlimit, setCurrentlimit] = useState(curruntSelected);

  useEffect(() => {
    localStorage.setItem(nameSelected, JSON.stringify(currentlimit));
  }, [currentlimit]);

  useEffect(() => {
    const limitPerPage = JSON.parse(localStorage.getItem(nameSelected));
    if (limitPerPage) {
      setCurrentlimit(limitPerPage);
    }
  }, []);

  const PInput = () => {
    return (
      <input
        className={`input_limit ${
          currentlimit == curruntSelected ? "active_option" : ""
        } `}
        type="text"
        value={currentlimit}
        onChange={handleChangeInput}
      />
    );
  };

  function handleChangeInput(event) {
    const value = +event.target.value;
    if (Number.isInteger(value) && value < 50) {
      setCurrentlimit(value);
      handleChange(value);
    }
  }

  function handleChange(selected) {
    setCurrentlimit(selected);
    changeSelect(selected);
  }

  return (
    <div className="selects_list">
      {options.map((item, index) => (
        <a
          className={`option ${
            item == curruntSelected ? "active_option" : ""
          } `}
          key={index}
          onClick={() => handleChange(item)}
          href="#"
        >
          {item}
        </a>
      ))}
      {isInput ? <PInput /> : null}
    </div>
  );
}
