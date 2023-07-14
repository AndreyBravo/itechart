import { useEffect, useMemo, useState } from "react";
import PSelect from "./PSelect";

export default function Pagination({
  currentOffset,
  limitPerPage,
  count,
  changeOffset,
  changeOfLimit,
  typeOfList,
  changeOfTypeList,
}) {
  const [activePage, setActivePage] = useState(0);
  const viewPages = 2;
  const optionsLimit = [10, 15, 20];
  const optionsType = ["card", "list"];

  const pages = useMemo(() => {
    const calculatedPages = [];
    for (let i = 0; i < Math.ceil(count / limitPerPage); i++) {
      calculatedPages.push(i);
    }
    return calculatedPages;
  }, [count, limitPerPage]);

  useMemo(() => {
    let page = JSON.parse(localStorage.getItem("activePage"));
    if (activePage <= pages.length) {
      setActivePage(page);
    } else {
      setActivePage(0);
    }
  }, [pages, limitPerPage]);

  useEffect(() => {
    localStorage.setItem("activePage", JSON.stringify(activePage));
  }, [activePage]);

  const slicePage = useMemo(() => {
    if (activePage <= viewPages) {
      return pages.slice(0, viewPages + 2).concat(pages.slice(-1));
    } else if (activePage + 1 < pages.length - viewPages) {
      const part = Math.ceil((activePage + 1) / viewPages);
      return pages
        .slice(0, 1)
        .concat(
          pages
            .slice((part - 1) * viewPages - 1, part * viewPages + 1)
            .concat(pages.slice(-1))
        );
    } else if (activePage + 1 <= pages.length) {
      return pages
        .slice(0, 1)
        .concat(pages.slice(pages.length - viewPages - 2));
    }
  }, [pages, activePage]);

  function onPage(page) {
    setActivePage(page);
    changeOffset(limitPerPage * page);
  }

  function onNext() {
    if (currentOffset / limitPerPage + 2 <= pages.length) {
      setActivePage(activePage + 1);
      changeOffset(currentOffset + limitPerPage);
    }
  }

  function onPrev() {
    if (currentOffset / limitPerPage >= 1) {
      setActivePage(activePage - 1);
      changeOffset(currentOffset - limitPerPage);
    }
  }

  function changeLimit(limit) {
    changeOfLimit(limit);
  }

  function changeTypeList(type) {
    changeOfTypeList(type);
  }

  return (
    <div className="pagination">
      <div className="select_container">
        <PSelect
          options={optionsLimit}
          nameSelected="limit"
          curruntSelected={limitPerPage}
          changeSelect={(limit) => changeLimit(limit)}
          isInput={true}
        />
        <label>limit per page</label>
      </div>
      <div className="select_container">
        <PSelect
          options={optionsType}
          nameSelected="type"
          curruntSelected={typeOfList}
          changeSelect={(type) => changeTypeList(type)}
        />
        <label>change type view</label>
      </div>

      <div className="pages">
        <a className="arrow" onClick={onPrev}>
          &laquo;
        </a>
        {slicePage?.map((page) => (
          <a
            key={page}
            className={page == activePage ? "activePage" : ""}
            onClick={() => onPage(page)}
          >
            {page + 1}
          </a>
        ))}
        <a className="arrow" onClick={onNext}>
          &raquo;
        </a>
      </div>
    </div>
  );
}
