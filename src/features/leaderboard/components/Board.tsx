import { useState } from 'react';
import PageController from './PageController';
import PageCount from './PageCount';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { useFetchData } from '../hooks/useFetchData';
import { OrderType, SortCriteria } from '../../../shared/const/data';
import { sortData } from '../helper/func';
import styles from '../LeaderBoard.module.css';

const Board = () => {
  const [selected, setSelected] = useState<SortCriteria>('score');
  const [order, setOrder] = useState<OrderType>('desc');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [data, isLoading] = useFetchData();

  const sortedData = sortData({ data, criteria: selected, order });

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
    <section className={styles.wrapper}>
      {isLoading ? (
        <div> 로딩중입니다 </div>
      ) : (
        <>
          <PageCount count={count} setCount={setCount} />
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <TableHead
                selected={selected}
                order={order}
                onSort={handleSort}
              />
              <TableBody data={paginatedData} startIndex={startIndex} />
            </table>
          </div>
          <PageController
            page={page}
            setPage={setPage}
            totalItems={data.length}
            count={count}
          />
        </>
      )}
    </section>
  );
};

export default Board;
