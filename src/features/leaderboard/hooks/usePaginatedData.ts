import { useState } from 'react';
import { ExposedData } from '../../../shared/const/data';

export const usePaginatedData = ({ data }: { data: ExposedData[] }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);

  const startIndex = (page - 1) * count;
  const paginatedData = data.slice(startIndex, startIndex + count);

  return { page, setPage, count, setCount, startIndex, paginatedData };
};
