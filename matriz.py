def criar_matriz():
    matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    for linha in range(3):
        for coluna in range(3):
            matriz[linha][coluna] = int(input(f'Querido(a) coloque os valores[{linha}, {coluna}]: '))
    return matriz

def imprimir_matriz(matriz):
    for linha in range(3):
        for coluna in range(3):
            print(f'[{matriz[linha][coluna]:^5}]', end='')
        print()

if __name__ == "__main__":
    print("Preencha a matriz 3x3:")
    matriz = criar_matriz()
    print('=' * 30)
    print("Sua matriz!")
    imprimir_matriz(matriz)

#código base usado do curso em vídeo python
