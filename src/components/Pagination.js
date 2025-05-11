import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComponent = () => {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);
  useEffect(() => {
    setPageCount(pages);
  }, []);

  //get current page
  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
    
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item "}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
