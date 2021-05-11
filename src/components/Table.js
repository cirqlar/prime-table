import React, { useState } from "react";

import getPrimes from "../lib/prime";

import styles from "./Table.module.css";

function Table() {
  const [numberOfPrimes] = useState(10);

  const primes = React.useMemo(() => {
    return getPrimes(numberOfPrimes);
  }, [numberOfPrimes]);

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {primes.map((prime) => (
              <th key={prime}>{prime}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {primes.map((prime) => (
            <tr key={prime}>
              <td>{prime}</td>
              {primes.map((multiplyBy) => (
                <td key={multiplyBy}>{prime * multiplyBy}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
