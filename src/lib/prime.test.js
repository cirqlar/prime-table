// source: https://en.wikipedia.org/wiki/List_of_prime_numbers

import getPrimes from "./prime";

const primeArrayTo20 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
];
const primeArrayTo100 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109,
  113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
  241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
  383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521,
  523, 541,
];

describe("getPrime", () => {
  it("should generate correct prime numbers", () => {
    const result1 = getPrimes(0);
    expect(result1).toEqual([]);

    const result2 = getPrimes(1);
    expect(result2).toEqual([2]);

    const result3 = getPrimes(2);
    expect(result3).toEqual([2, 3]);

    const result4 = getPrimes(20);
    expect(result4).toEqual(primeArrayTo20);

    const result5 = getPrimes(100);
    expect(result5).toEqual(primeArrayTo100);
  });
});
