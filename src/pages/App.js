import PrimeProductTable from "../components/PrimeProductTable";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Products of Primes</h1>
      </div>
      <PrimeProductTable />
    </div>
  );
}

export default App;
