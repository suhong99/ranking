import { useEffect, useMemo } from 'react';

type props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  count: number;
};

export const usePagination = ({ page, setPage, totalItems, count }: props) => {
  const totalPages = Math.ceil(totalItems / count);
  const pageGroup = Math.floor((page - 1) / 10);
  const startPage = pageGroup * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  const pageButtons = useMemo(() => {
    return new Array(endPage - startPage + 1)
      .fill(0)
      .map((_, i) => startPage + i);
  }, [startPage, endPage]);

  const movePrevGroup = () => {
    if (startPage > 1) setPage(startPage - 1);
  };

  const moveNextGroup = () => {
    if (endPage < totalPages) setPage(endPage + 1);
  };

  // 10~20으로 갈 경우 페이지가 넘을 수 있음
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, setPage, totalPages]);

  return {
    pageButtons,
    movePrevGroup,
    moveNextGroup,
    startPage,
    endPage,
    totalPages,
  };
};
