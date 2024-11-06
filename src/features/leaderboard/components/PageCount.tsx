import React from 'react';

interface PageCountProps {
  count: number;
  setCount: (count: number) => void;
}

const PageCount: React.FC<PageCountProps> = ({ count, setCount }) => (
  <div>
    <label> 노출 갯수</label>
    <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select>
  </div>
);

export default PageCount;
