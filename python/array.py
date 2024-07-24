a = []
b = [[0,1,2,3],[4,5,6,7],[8,9,10,11]]
for i in range(4):
	a.append([row[i] for row in b])
print(a)
