import styles from '../LeaderBoard.module.css';
import { usePagination } from '../hooks/usePagination';

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
  const {
    pageButtons,
    moveNextGroup,
    movePrevGroup,
    startPage,
    endPage,
    totalPages,
  } = usePagination({
    page,
    setPage,
    totalItems,
    count,
  });

  return (
    <div className={styles.paging_container}>
      <button
        className={styles.paging_btn}
        onClick={movePrevGroup}
        disabled={startPage === 1}
      >
        &lt;
      </button>
      <div className={styles.paging_btns}>
        {pageButtons.map((btnPage) => (
          <button
            key={btnPage}
            onClick={() => setPage(btnPage)}
            disabled={btnPage === page}
            className={`${styles.paging_btn} ${
              btnPage === page ? styles.active : ''
            }`}
          >
            {btnPage}
          </button>
        ))}
      </div>
      <button
        className={styles.paging_btn}
        onClick={moveNextGroup}
        disabled={endPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default PageController;
