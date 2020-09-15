# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/almost-golden-rectangular-1c9d72c0/
length = int(input())
gl = 0
while length > 0:
    [w, h] = [int(w) for w in input().split()[:2]]
    if 1.6 <= w / h <= 1.7:
        gl += 1
    if 1.6 <= h / w <= 1.7:
        gl += 1
    length -= 1

print(gl)
