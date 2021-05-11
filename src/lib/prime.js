// persist found primes so subsequent calls to getPrimes run faster
let persistPrimes = [2, 3]; 

/**
 * 
 * @param {number} n number of primes to generate
 * @returns {number[]} array of prime numbers
 */
export default function getPrimes(n) {
  // Ensure n is a positive number greater than 0
  // Return an empty array otherwise
  if (n <= 0) return [];

  const initialLength = persistPrimes.length; // Set the first prime number as two
  if (initialLength >= n) return persistPrimes.slice(0, n); // Return if n is 1 (array is already full)

  const nextNumber = persistPrimes[initialLength - 1] + 2;

  // Iterator is the current number being tested
  // Start at nextNumber since we already have all previous primes
  // Loop until primes array has reached the desired length
  // skip all even numbers because none of them are prime numbers
  for (let current_number = nextNumber; persistPrimes.length < n; current_number += 2) {

    let isCurrentPrime = true; // assume number is prime

    const sqrt = Math.sqrt(current_number);

    /**
     * Loop over current primes array
     * Skip 2 because current number can't be even
     * Reasoning: 
     *     All prime numbers are divisible by one and itself
     *     Non prime numbers are divisible by at least one prime number
     *     Smallest prime factor of a non prime number is <= its square root
     */
    for (let j = 1; j < persistPrimes.length; j++) {
      const prime = persistPrimes[j];

      if (prime > sqrt) break; // if current number is greater than sqrt, number is prime

      if (current_number % prime === 0) { // current number is not prime
        isCurrentPrime = false;
        break;
      }
    }
    if (isCurrentPrime) persistPrimes.push(current_number);
  }

  return persistPrimes.slice();
}
