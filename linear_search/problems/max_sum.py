# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/maximum-sum-4-f8d12458/

length = int(input())
arr = [int(w) for w in input().split()[:length]]
positive_nums = 0
final_sum = 0
negative_nums = 0
for i in arr:
    if i >= 0:
        positive_nums += 1
        final_sum += i

    if i < 0:
        negative_nums += 1

all_neg_nums = length - negative_nums
if all_neg_nums == 0:
    print(max(arr), 1)

elif all_neg_nums != 0:
    print(final_sum, positive_nums)
