length = int(input())
obj = {}
for i in input().split(' ')[:length]:
    if i in obj:
        obj[i] += 1;
    else:
        obj[i] = 1
k = int(input())

min_v = 100001

for key in obj:
    if obj[key] == k and int(key) < min_v:
        min_v = int(key)
print(min_v)
