import { useState } from 'react';
import PageController from './PageController';
import PageCount from './PageCount';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { useFetchData } from '../hooks/useFetchData';
import { SortCriteria } from '../../../shared/const/data';

const Board = () => {
  const [selected, setSelected] = useState<SortCriteria>('score');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [data, isLoading] = useFetchData();

  // 정렬 및 페이징 적용
  const sortedData = [...data].sort((a, b) => {
    if (order === 'asc') {
      return a[selected] - b[selected];
    } else {
      return b[selected] - a[selected];
    }
  });

  const startIndex = (page - 1) * count;
  const paginatedData = sortedData.slice(startIndex, startIndex + count);

  const handleSort = (column: SortCriteria) => {
    if (selected === column) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSelected(column);
      setOrder('desc');
    }
    setPage(1);
  };

  return (
    <div>
      {isLoading ? (
        <div> 로딩중입니다 </div>
      ) : (
        <>
          <PageCount count={count} setCount={setCount} />
          <table>
            <TableHead selected={selected} order={order} onSort={handleSort} />
            <TableBody data={paginatedData} startIndex={startIndex} />
          </table>
          <PageController
            page={page}
            setPage={setPage}
            totalItems={data.length}
            count={count}
          />
        </>
      )}
    </div>
  );
};

export default Board;
