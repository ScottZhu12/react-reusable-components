import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import { items } from '../../App';
import Items from '../Items';

interface PaginateProps {
  itemsPerPage: number;
}

const Paginate: React.FC<PaginateProps> = ({ itemsPerPage }) => {
  // start with an empty list of items
  const [currentItems, setCurrentItems] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // determine the page offsets
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // fetch items from another resources
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // invoke when user click to request another page
  const onPageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='app__content'>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='next'
        previousLabel='previous'
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageClick}
        containerClassName='pagination'
        pageLinkClassName='pagination__item'
        previousLinkClassName='pagination__item pagination__item--margin'
        nextLinkClassName='pagination__item pagination__item--margin'
        breakLinkClassName='pagination__item'
        activeLinkClassName='pagination__item--active'
      />
    </div>
  );
};

export default Paginate;
