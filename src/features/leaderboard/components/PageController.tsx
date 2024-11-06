import { useEffect } from 'react';

type PageControllerProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  count: number;
};

const PageController: React.FC<PageControllerProps> = ({
  page,
  setPage,
  totalItems,
  count,
}) => {
  const totalPages = Math.ceil(totalItems / count);

  const pageGroup = Math.floor((page - 1) / 10);
  const startPage = pageGroup * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  const pageButtons = [];

  useEffect(() => {
    if (page > totalItems / count) setPage(totalItems / count);
  }, [count, page, setPage, totalItems]);

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => setPage(i)}
        disabled={i === page}
        style={{
          fontWeight: i === page ? 'bold' : 'normal',
          cursor: i === page ? 'default' : 'pointer',
        }}
      >
        {i}
      </button>
    );
  }

  const handlePrevGroup = () => {
    if (startPage > 1) {
      setPage(startPage - 1);
    }
  };

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      setPage(endPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevGroup} disabled={startPage === 1}>
        &lt;
      </button>
      {pageButtons}
      <button onClick={handleNextGroup} disabled={endPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default PageController;
