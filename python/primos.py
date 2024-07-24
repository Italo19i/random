import math
def eh_primo(num):
    resultado = True
    raiz = int(math.sqrt(num))
    if raiz > 1:
        for i in range(2, raiz + 1):
            if num % i == 0:
                resultado = False
                break
            else:
                if i >= raiz:
                    resultado = True
    else:
        resultado = True
    return resultado

def getStringPrimo(num):
    if eh_primo(num):
        StringPrimoAux = " eh primo"
    else:
        StringPrimoAux = " nao eh primo"
    print(str(num) + StringPrimoAux)

if __name__ == '__main__':
    n = int(input())
    for j in range(0, n):
        x = int(input())
        getStringPrimo(x)
