import {
  OrderType,
  SortCriteria,
  ExposedData,
} from '../../../shared/const/data';
import { Category } from '../const/tableCategory';

import styles from '../LeaderBoard.module.css';

type TableHeadProps = {
  selected: SortCriteria;
  order: OrderType;
  onSort: (column: SortCriteria) => void;
};

export const TableHead: React.FC<TableHeadProps> = ({
  selected,
  order,
  onSort,
}) => {
  return (
    <thead className={styles.table_head}>
      <tr>
        {Category.map(({ label, sortableKey, className }) => (
          <th
            key={label}
            onClick={() => sortableKey && onSort(sortableKey)}
            style={{
              cursor: sortableKey ? 'pointer' : 'default',
              borderTop:
                sortableKey === selected && order === 'asc'
                  ? '2px solid #4c9dff'
                  : 'none',
              borderBottom:
                sortableKey === selected && order === 'desc'
                  ? '2px solid #4c9dff'
                  : 'none',
            }}
            className={className ? styles[className] : undefined}
          >
            {label} {sortableKey === selected && (order === 'asc' ? '↑' : '↓')}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody: React.FC<{
  data: ExposedData[];
  startIndex: number;
}> = ({ data, startIndex }) => {
  const emptyRows = Array.from({ length: Math.max(0, 10 - data.length) });

  return (
    <tbody className={styles.table_body}>
      {data.map((item, index) => (
        <tr key={item.player.id}>
          <td>{startIndex + index + 1}</td>
          <td>{item.player.name}</td>
          <td>{item.player.guild ? item.player.guild.name : '-'}</td>
          <td>{item.score}</td>
          <td>{item.wins}</td>
          <td>{item.losses}</td>
          <td>{item.winRate.toFixed(2)}</td>
        </tr>
      ))}
      {emptyRows.map((_, idx) => (
        <tr key={`empty-${idx}`}>
          <td colSpan={7}>&nbsp;</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
