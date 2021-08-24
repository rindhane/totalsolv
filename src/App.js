import styles from './App.module.css';
import StockChart from './Components/stockChart/stock';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}></div>
      <div className={styles.layout}>
        <div className={styles.list}></div>
        <StockChart/>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
