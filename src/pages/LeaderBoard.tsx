import Board from '../features/leaderboard/components/Board';
import styles from '../features/leaderboard/LeaderBoard.module.css';

const LeaderBoardPage = () => {
  return (
    <>
      <h1 className={styles.title}>유저 랭킹</h1>
      <Board />
    </>
  );
};

export default LeaderBoardPage;
