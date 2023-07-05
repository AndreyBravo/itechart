import { useEffect, useMemo, useState } from "react";

export default function Pagination({
  currentOffset,
  limitPerPage,
  count,
  changeOffset,
}) {
  const pages = useMemo(() => {
    const calculatedPages = [];
    for (let i = 0; i <= Math.ceil(count / limitPerPage); i++) {
      calculatedPages.push(i);
    }
    return calculatedPages;
  }, [count, limitPerPage]);

  function onPage(page) {
    changeOffset(limitPerPage * page);
  }

  function onNext() {
    changeOffset(currentOffset + limitPerPage);
  }

  function onPrev() {
    changeOffset(currentOffset - limitPerPage);
  }

  return (
    <div>
      <a onClick={onPrev}>prev</a>
      <div>
        {pages.map((page) => (
          <a key={page} onClick={onPage(page)}>
            {page + 1}
          </a>
        ))}
      </div>
      <a onClick={onNext}>next</a>
    </div>
  );
}
