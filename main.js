"use strict";

function merge(A, B, f) {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new Error("merge expects its first 2 arguments to be arrays");
  }

  let result = [];
  let [i, j] = [0, 0];
  while (A[i] && B[j]) {
    if (f(A[i], B[j]) <= 0) {
      result.push(A[i]);
      i++;
    } else {
      result.push(B[j]);
      j++;
    }
  }

  while (A[i]) {
    result.push(A[i]);
    i++;
  }

  while (B[j]) {
    result.push(B[j]);
    j++;
  }

  return result;
}

function mergeSort(A, f = (x, y) => x - y) {
  if (!Array.isArray(A)) {
    throw new Error("mergeSort expects its first argument to be an array");
  }

  if (A.length <= 1) return A;
  let i = Math.floor(A.length / 2);
  let L = A.slice(0, i);
  let R = A.slice(i);
  return merge(mergeSort(L), mergeSort(R), f);
}

module.exports = {
  mergeSort,
  merge
};
