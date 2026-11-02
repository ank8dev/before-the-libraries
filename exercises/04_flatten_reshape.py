"""Exercise 04: flatten and reshape

A small grey image is a 3x3 grid of pixel values (0 to 255).
flatten(image) turns the grid into one list, row by row.
reshape(values, rows, cols) turns a flat list into a grid with
that many rows and cols. If rows * cols is not the number
of values, return None.

Example: flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
         reshape([1, 2, 3, 4], 2, 2) -> [[1, 2], [3, 4]]
         reshape([1, 2, 3], 2, 2) -> None

Run: python3 exercises/04_flatten_reshape.py
"""


def flatten(image):
    pass


def reshape(values, rows, cols):
    pass


# ===== Checks: do not edit below this line =====
img = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
assert flatten(img) == [10, 20, 30, 40, 50, 60, 70, 80, 90]
assert flatten([[1, 2], [3, 4], [5, 6]]) == [1, 2, 3, 4, 5, 6]
assert flatten([]) == []
assert reshape([1, 2, 3, 4], 2, 2) == [[1, 2], [3, 4]]
assert reshape([1, 2, 3, 4, 5, 6], 2, 3) == [[1, 2, 3], [4, 5, 6]]
assert reshape([1, 2, 3, 4, 5, 6], 3, 2) == [[1, 2], [3, 4], [5, 6]]
assert reshape([1, 2, 3], 2, 2) is None
assert reshape([1, 2, 3, 4, 5], 2, 2) is None
assert reshape(flatten(img), 3, 3) == img
assert flatten(reshape(list(range(12)), 3, 4)) == list(range(12))
print("All checks passed")
