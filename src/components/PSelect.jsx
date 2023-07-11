import { useState, useEffect, useMemo } from "react";

export default function PSelect({
  nameSelected,
  curruntSelected,
  options,
  changeSelect,
}) {
  const [currentlimit, setCurrentlimit] = useState(curruntSelected);

  useMemo(() => {
    localStorage.setItem(nameSelected, JSON.stringify(curruntSelected));
  }, [curruntSelected]);

  useEffect(() => {
    const limitPerPage = JSON.parse(localStorage.getItem(nameSelected));
    if (limitPerPage) {
      setCurrentlimit(limitPerPage);
    }
  }, []);

  function handleChange(selected) {
    changeSelect(selected);
  }

  return (
    <div className="selects_list">
      {options.map((item, index) => (
        <a
          className={`option ${item == curruntSelected ? "active_option" : ""} `}
          key={index}
          onClick={() => handleChange(item)}
          href="#"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
