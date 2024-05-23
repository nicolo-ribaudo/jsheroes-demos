#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int fib(int n) {
  if (n <= 0) return 0;

  int a = 0;
  int b = 1;

  while (n > 0) {
    int temp = a + b;
    a = b;
    b = temp;
    n--;
  }

  return b;
}
