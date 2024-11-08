import { OrderType, SortCriteria } from '../../../shared/const/data';
import styles from '../LeaderBoard.module.css';

type TableHeadProps = {
  selected: SortCriteria;
  order: OrderType;
  onSort: (column: SortCriteria) => void;
};

const Category: {
  label: string;
  sortableKey: SortCriteria | null;
  className?: string;
}[] = [
  { label: 'Rank', sortableKey: null },
  { label: 'Player Name', sortableKey: null, className: 'long' },
  { label: 'Guild Name', sortableKey: null, className: 'long' },
  { label: 'Score', sortableKey: 'score' },
  { label: 'Wins', sortableKey: 'wins' },
  { label: 'Losses', sortableKey: 'losses' },
  { label: 'Win Rate', sortableKey: 'winRate' },
];

const TableHead: React.FC<TableHeadProps> = ({ selected, order, onSort }) => {
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

export default TableHead;
