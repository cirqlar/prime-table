export default function getPrimes(n) {
  if (n <= 0) return [];

  const primes = [2];
  if (n === 1) return primes;

  for (let current_number = 3; primes.length < n; current_number += 2) {
    let isCurrentPrime = true;
    const sqrt = Math.sqrt(current_number);
    for (let j = 0; j < primes.length; j++) {
      const prime = primes[j];
      if (prime > sqrt) break;
      if (current_number % prime === 0) {
        isCurrentPrime = false;
        break;
      }
    }
    if (isCurrentPrime) primes.push(current_number);
  }

  return primes;
}
