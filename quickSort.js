function partition(ar, lo, hi) {
  let pivotLocation = lo;
  const pivot = ar[hi];

  for (let i = lo; i < hi; i++) {
    if (ar[i] <= pivot) {
      swap(ar, pivotLocation, i);
      pivotLocation++;
    }
  }
  swap(ar, pivotLocation, hi);
  return pivotLocation;
}

function quickSort(ar, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = ar.length - 1;

  if (lo < hi) {
    const p = partition(ar, lo, hi);
    quickSort(ar, lo, p - 1);
    quickSort(ar, p + 1, hi);
  }

  if (hi - lo === ar.length - 1) return ar;
}

function swap(ar, lo, hi) {
  if (lo === hi) return;
  const temp = ar[lo];
  ar[lo] = ar[hi];
  ar[hi] = temp;
  return ar;
}

quickSort([3, 7, 8, 2, 1, 4]);
