"""Exercise 01: add_vectors

A vector is a list of numbers. Write add_vectors(a, b).
It returns a NEW list. Each item is a[i] + b[i].
If the lists have different lengths, return None.
Do not change a or b.

Example: add_vectors([1, 2, 3], [10, 20, 30]) -> [11, 22, 33]

Run: python3 exercises/01_add_vectors.py
"""


def add_vectors(a, b):
    pass


# ===== Checks: do not edit below this line =====
assert add_vectors([1, 2, 3], [10, 20, 30]) == [11, 22, 33]
assert add_vectors([], []) == []
assert add_vectors([-1, 5], [1, -5]) == [0, 0]
assert add_vectors([0.5, 0.25], [0.5, 0.75]) == [1.0, 1.0]
assert add_vectors([1, 2], [1, 2, 3]) is None
x, y = [1, 2], [3, 4]
result = add_vectors(x, y)
assert x == [1, 2] and y == [3, 4], "Do not change the input lists"
assert result is not x and result is not y
print("All checks passed")
