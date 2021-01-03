from collections import Counter


def solution(A, K):
    # Write your code here
    for arr in A:
        dist_arr = dict(Counter(arr))
        print(dist_arr)
    return 0


T = int(input())
for _ in range(T):
    N, K = map(int, input().split())
    A = []
    for _ in range(N):
        A.append(input().split())
    out_ = solution(A, K)
    print(out_)
