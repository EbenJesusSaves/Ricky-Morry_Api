import React, { useEffect } from "react";
import "./pagination.css";
import ReactPaginate from "react-paginate";
const Paginations = ({ info, setNextPage, sendBack }) => {
  console.log(info);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    console.log("Hello");
  }, );
  return (
    <ReactPaginate
      className="pagination d-flex justify-content-center gap-3 my-5"
      pageCount={info?.pages}
      nextLabel="Next"
      previousLabel="Prev"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName=" active"
      nextLinkClassName="btn btn-primary"
      previousLinkClassName="btn btn-primary"
      onPageChange={(data) => {
        setNextPage(data.selected + 1);
      }}
    />
  );
};

export default Paginations;
