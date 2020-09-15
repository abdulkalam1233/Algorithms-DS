# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/min-max-8/

length = int(input())
arr = [int(w) for w in input().split()[:length]]

sum_arr = sum(arr)
print(sum_arr - max(arr), sum_arr - min(arr))
