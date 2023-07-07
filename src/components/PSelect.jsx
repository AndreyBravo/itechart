import { useState, useEffect, useMemo } from "react";
import Select from "react-select";

export default function PSelect({  changeLimit }) {
  const [currentlimit, setCurrentlimit] = useState(10);

  useMemo(() => {
    const limitPerPage = JSON.parse(localStorage.getItem("limit"));
    if (limitPerPage) {
      setCurrentlimit(limitPerPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("limit", JSON.stringify(currentlimit));
  }, [currentlimit]);

  const options = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];

  function handleChange(selected) {
    setCurrentlimit(selected.value);
    changeLimit(selected.value);
  }

  return (
    <Select
      value={options.filter((item) => item.value == currentlimit)}
      options={options}
      onChange={handleChange}
    />
  );
}
