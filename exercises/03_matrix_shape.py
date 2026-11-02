"""Exercise 03: shape and transpose

A matrix here is a list of rows (a list of lists). All rows have the same length.
shape(matrix) returns a tuple (rows, cols). For [] return (0, 0).
transpose(matrix) returns a NEW matrix. Rows become columns.
Do not change the original matrix.

Example: m = [[1, 2, 3],
              [4, 5, 6]]
shape(m)     -> (2, 3)
transpose(m) -> [[1, 4], [2, 5], [3, 6]]

Run: python3 exercises/03_matrix_shape.py
"""


def shape(matrix):
    pass


def transpose(matrix):
    pass


# ===== Checks: do not edit below this line =====
m = [[1, 2, 3], [4, 5, 6]]
assert shape(m) == (2, 3)
assert shape([[1], [2], [3]]) == (3, 1)
assert shape([]) == (0, 0)
assert transpose(m) == [[1, 4], [2, 5], [3, 6]]
assert m == [[1, 2, 3], [4, 5, 6]], "Do not change the original"
assert transpose([[1, 2, 3]]) == [[1], [2], [3]]
assert transpose([]) == []
square = [[1, 2], [3, 4]]
assert transpose(transpose(square)) == square
assert shape(transpose(m)) == (3, 2)
t = transpose(square)
t[0][0] = 99
assert square[0][0] == 1, "transpose must build new rows"
print("All checks passed")
