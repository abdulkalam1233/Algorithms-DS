# https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/mannas-first-name-4/description/
ipt = int(input())
for t in range(ipt):
    st = input()
    suvojit = st.count('SUVOJIT')
    suvo = st.count('SUVO')
    print('SUVO = %d, SUVOJIT = %d' % (suvo - suvojit, suvojit))
