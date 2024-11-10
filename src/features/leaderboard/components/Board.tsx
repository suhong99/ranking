import { useState } from 'react';
import PageController from './PageController';
import PageCount from './PageCount';
import { Table } from './Table';

import { sortData } from '../helper/func';
import {
  ExposedData,
  OrderType,
  SortCriteria,
} from '../../../shared/const/data';
import { usePaginatedData } from '../hooks/usePaginatedData';
import styles from '../LeaderBoard.module.css';
import { useLoaderData } from 'react-router';

const Board = () => {
  const data = useLoaderData() as ExposedData[];
  const [selected, setSelected] = useState<SortCriteria>('score');
  const [order, setOrder] = useState<OrderType>('desc');
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
    </section>
  );
};

export default Board;
