"use strict";

function merge(A, B) {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new Error("merge expects both of its arguments to be arrays");
  }

  let result = [];
  let [i, j] = [0, 0];
  while (i < A.length && j < B.length) {
    if (A[i] <= B[j]) {
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

function mergeSort(A) {
  if (!Array.isArray(A)) {
    throw new Error("mergeSort expects its argument to be an array");
  }

  if (A.length <= 1) return A;
  let i = Math.floor(A.length / 2);
  let L = A.slice(0, i);
  let R = A.slice(i);
  return merge(mergeSort(L), mergeSort(R));
}

module.exports = {
  mergeSort,
  merge
};
