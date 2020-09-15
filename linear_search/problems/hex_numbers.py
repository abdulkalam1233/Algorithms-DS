# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/yet-another-easy-problem-1f3273a0/

def convert_number_to_hex_decimal(x):
    sum_ = 0
    while x != 0:
        sum_ += (x % 16)
        x = int(x / 16)
    return sum_


def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)


t = int(input())
for i in range(t):
    [r1, r2] = list(map(int, input().split(' ')))
    len = 0
    while r1 <= r2:
        hex_sum = convert_number_to_hex_decimal(r1)
        if hex_sum % 2 == 0 and r1 % 2 == 0:
            len += 1
        else:
            gcd_val = gcd(r1, hex_sum)
            if gcd_val > 1:
                len += 1
        r1 += 1
    print(len)
