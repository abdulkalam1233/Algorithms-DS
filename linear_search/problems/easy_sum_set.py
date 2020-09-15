# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/easy-sum-set-problem-7e6841ca/

n = int(input())
a_arr = list(map(int, input().split(' ')[:n]))
m = int(input())
c_arr = list(map(int, input().split(' ')[:m]))

final_result = []

b_val = 1
max_val = 0
a_max = max(a_arr)
c_max = max(c_arr)

if a_max >= c_max:
    max_val = a_max
else:
    max_val = c_max

while b_val < max_val:
    add_flag = 1
    for ele in a_arr:
        if b_val + ele not in c_arr:
            add_flag = 0
            break
    if add_flag:
        final_result.append(b_val)
    b_val += 1

[print(c, end=' ') for c in final_result]
