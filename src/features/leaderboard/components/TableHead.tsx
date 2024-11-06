import { SortCriteria } from '../../../shared/const/data';

type TableHeadProps = {
  selected: SortCriteria;
  order: 'asc' | 'desc';
  onSort: (column: SortCriteria) => void;
};

const TableHead: React.FC<TableHeadProps> = ({ selected, order, onSort }) => {
  return (
    <thead>
      <tr>
        <th>Rank</th>
        <th>Player Name</th>
        <th>Guild Name</th>
        <th onClick={() => onSort('score')}>
          Score {selected === 'score' && (order === 'asc' ? '↑' : '↓')}
        </th>
        <th onClick={() => onSort('wins')}>
          Wins {selected === 'wins' && (order === 'asc' ? '↑' : '↓')}
        </th>
        <th onClick={() => onSort('losses')}>
          Losses {selected === 'losses' && (order === 'asc' ? '↑' : '↓')}
        </th>
        <th onClick={() => onSort('winRate')}>
          Win Rate {selected === 'winRate' && (order === 'asc' ? '↑' : '↓')}
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
