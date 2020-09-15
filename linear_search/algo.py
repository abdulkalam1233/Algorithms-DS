def linear_search(ele, arr):
    for i, v in enumerate(arr):
        if v == ele:
            return i

    return -1


index = linear_search(1, [2, 3, 4, 1])
if index == -1:
    print('Element not found.')
else:
    print('Element Found at index of %d' % index)
