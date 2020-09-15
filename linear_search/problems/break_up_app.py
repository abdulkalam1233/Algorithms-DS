# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/breakup-app/description/

tc = int(input())

wight = {'G': 2, 'M': 1}
count_date = 0
count_not_date = 0

for t in range(tc):
    ip_str = input().split(' ')
    for d in ip_str:
        if d.isdigit():
            if d == '19' or d == '20':
                count_date += wight[ip_str[0][0]]
            else:
                count_not_date += wight[ip_str[0][0]]

if count_date > count_not_date:
    print('Date')
else:
    print('No Date')
