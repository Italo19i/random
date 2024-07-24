#include <stdio.h>
#include <locale.h>
int main(){
    char nome[30], nomedois[30];
    char sex, sexdois;
    float nota, notadois;

    setlocale(LC_ALL, "Portuguese");
    printf("<<< EX004 - Listagem >>>\n");

    printf("\nCadastrando a primeira pessoa:\n");
    printf("---------------------------------\n");

    printf("NOME: ");
    fgets(nome, 25, stdin);
    nome[strlen(nome) - 1] = '\0';

    printf("SEXO [M/F]: ");
    sex = getchar();

    printf("NOTA: ");
    scanf("%f", &nota);

    printf("\nCadastrando a segunda pessoa:\n");
    printf("---------------------------------\n");
    
    printf("NOME: ");
    while (getchar() != '\n') /* void */;
    fgets(nomedois,25, stdin);
    nomedois[strlen(nomedois) - 1] = '\0';
    
    printf("SEXO [M/F]: ");
    sexdois = getchar();

    printf("NOTA: ");
    scanf("%f", &notadois);

    printf("Nome '%s' Sexo %c nota %.1f\n",nome, sex, nota);
    printf("Nome '%s' Sexo %c nota %.1f",nomedois, sexdois, notadois);
    
    return 0;
}
