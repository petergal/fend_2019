function multiply(n1, n2) {
  return n1 * n2;
}

multiply(3, 4);

// 12

multiply.call(window, 3, 4);

// 12
