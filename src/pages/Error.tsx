import styles from '../features/error/Error.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>알 수 없는 문제가 발생하였습니다.</h1>
      <p>다시 시도해 주세요.</p>
      <button
        className={styles.retryButton}
        onClick={() => window.location.reload()}
      >
        다시 시도
      </button>
    </div>
  );
};

export default ErrorPage;
