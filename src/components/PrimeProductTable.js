import React, { useState } from "react";

import getPrimes from "../lib/prime";

import styles from "./Table.module.css";

function PrimeProductTable({ numberOfPrimes: np = 10 }) {
  const [numberOfPrimes] = useState(np);

  // Memoize result to ensure function isn't 
  // called unless number changes
  const primes = React.useMemo(() => {
    return getPrimes(numberOfPrimes);
  }, [numberOfPrimes]);

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {/* loop over primes to generate table header cells */}
            {primes.map((prime) => (
              <th key={prime} data-testid="columnHeader">{prime}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* loop over primes to generate table rows */}
          {primes.map((prime) => (
            <tr key={prime}>
              <td data-testid="rowLeader">{prime}</td>
              {/* loop over primes to generate row cells */}
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

export default PrimeProductTable;
