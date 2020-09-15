# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/square-transaction-20/

from bisect import bisect_left


def search(arr1, x, left, right):
    ind = 0
    while right >= left:
        mid = left + (right - left) // 2
        if arr1[mid] >= x:
            ind = mid
            right = mid - 1
        else:
            left = mid + 1
    return ind


length = int(input())
arr = []
for i, v in enumerate(input().split(' ')[:length]):
    if i == 0:
        arr.append(int(v))
    else:
        arr.append(arr[-1] + int(v))
queries = int(input())
for q in range(queries):
    target = int(input())
    if target > arr[length - 1]:
        print(-1)
    else:
        print(search(arr, target, 0, length - 1) + 1)  # with binary search
        print(bisect_left(arr, target, 0, length) + 1)
        # with bisect_left() algo https://docs.python.org/3/library/bisect.html
