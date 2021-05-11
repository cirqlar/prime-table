import Table from "../components/Table";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Products of Primes</h1>
      </div>
      <Table />
    </div>
  );
}

export default App;
