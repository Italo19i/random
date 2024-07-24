#include <stdio.h>

int main(){
  int valor;
  printf("Digite o valor:\n");
  scanf("%i", &valor);
  printf("São %i notas de 100\n", valor/100);
  printf("São %i notas de 50\n", valor/50);
  printf("São %i notas de 20\n", valor/20);
  printf("São %i notas de 10\n", valor/10);
  printf("São %i notas de 5\n", valor/5);
  printf("São %i notas de 2\n", valor/2);

  return 0;
}
