import React from 'react';
import styles from '../LeaderBoard.module.css';

interface PageCountProps {
  count: number;
  setCount: (count: number) => void;
}

const PageCount: React.FC<PageCountProps> = ({ count, setCount }) => (
  <div className={styles.pagecount_container}>
    <label className="sr_only">노출 갯수</label>
    <select
      className={styles.pagecount_select}
      value={count}
      onChange={(e) => setCount(Number(e.target.value))}
    >
      <option value={10}>10개씩 보기</option>
      <option value={20}>20개씩 보기</option>
    </select>
  </div>
);

export default PageCount;
