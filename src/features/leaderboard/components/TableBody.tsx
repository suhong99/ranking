import { ExposedData } from '../../../shared/const/data';
import styles from '../LeaderBoard.module.css';

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
