import { ExposedData } from '../../../shared/const/data';

const TableBody: React.FC<{
  data: ExposedData[];
  startIndex: number;
}> = ({ data, startIndex }) => {
  return (
    <tbody>
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
    </tbody>
  );
};

export default TableBody;
