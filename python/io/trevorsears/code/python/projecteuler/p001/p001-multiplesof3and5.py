lamb1 = lambda a, b, c: a + b + c
lamb2 = lambda a, b, c: a * b * c

def myfunc(lamb, a, b, c):
    return lamb(a, b, c)

print(myfunc(lamb1, 1, 2, 3))