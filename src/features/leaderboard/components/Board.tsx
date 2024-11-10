import { useState } from 'react';
import PageController from './PageController';
import PageCount from './PageCount';
import { Table } from './Table';

import { sortData } from '../helper/func';
import { OrderType, SortCriteria } from '../../../shared/const/data';
import { useFetchData } from '../hooks/useFetchData';
import { usePaginatedData } from '../hooks/usePaginatedData';
import styles from '../LeaderBoard.module.css';

const Board = () => {
  const [selected, setSelected] = useState<SortCriteria>('score');
  const [order, setOrder] = useState<OrderType>('desc');
  const [data, isLoading] = useFetchData();
  const sortedData = sortData({ data, criteria: selected, order });

  const { page, setPage, count, setCount, startIndex, paginatedData } =
    usePaginatedData({
      data: sortedData,
    });

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
        <div> 로딩중입니다... </div>
      ) : (
        <>
          <PageCount count={count} setCount={setCount} />
          <Table>
            <Table.TableHead
              selected={selected}
              order={order}
              onSort={handleSort}
            />
            <Table.TableBody data={paginatedData} startIndex={startIndex} />
          </Table>

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
