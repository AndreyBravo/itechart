import { useEffect, useMemo, useState } from "react";

export default function Pagination({
  currentOffset,
  limitPerPage,
  count,
  changeOffset,
}) {

  const [activePage, setActivePage] = useState(0);
  
  useEffect(() => {
    const page = JSON.parse(localStorage.getItem('activePage'));
    if (page) {
      setActivePage(page);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activePage', JSON.stringify(activePage));
  }, [activePage]);

  const pages = useMemo(() => {
    const calculatedPages = [];
    for (let i = 0; i < Math.ceil(count / limitPerPage); i++) {
      calculatedPages.push(i);
    }
    return calculatedPages;
  }, [count, limitPerPage]);

  const slicePage = useMemo(() => {
    if (activePage <= 9) {
      return pages.slice(0, 11).concat(pages.slice(-1));
    } else if (activePage + 1 < 20) {
      return pages
        .slice(0, 1)
        .concat(pages.slice(9, 20).concat(pages.slice(-1)));
    } else if (activePage + 1 < 30) {
      return pages
        .slice(0, 1)
        .concat(pages.slice(18, 30).concat(pages.slice(-1)));
    } else if (activePage + 1 < 40) {
      return pages
        .slice(0, 1)
        .concat(pages.slice(28, 40).concat(pages.slice(-1)));
    } else if (activePage + 1 < 50) {
      return pages
        .slice(0, 1)
        .concat(pages.slice(38, 50).concat(pages.slice(-1)));
    } else if (activePage + 1 < 60) {
      return pages
        .slice(0, 1)
        .concat(pages.slice(48, 60).concat(pages.slice(-1)));
    } else if (activePage + 1 <= 65) {
      return pages.slice(0, 1).concat(pages.slice(58));
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

  return (
    <div className="pagination">
      <a className="arrow" onClick={onPrev}>&laquo;</a>
      <div className="pages">
        {slicePage.map((page) => (
          <a
            key={page}
            className={page == activePage ? "activePage" : ""}
            onClick={() => onPage(page)}
          >
            {page + 1}
          </a>
        ))}
      </div>
      <a className="arrow" onClick={onNext}>&raquo; </a>
    </div>
  );
}
