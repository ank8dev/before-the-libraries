"""Exercise 02: dot

Write dot(a, b). Multiply each pair a[i] * b[i]. Then add all the results.
Think of a as weights (how much each input matters)
and b as inputs. The answer is one number: a weighted sum.
If the lengths are different, return None. For empty lists, return 0.

Example: weights [0.5, 1], inputs [2, 3] -> 0.5*2 + 1*3 = 4.0
         dot([0.5, 1], [2, 3]) -> 4.0

Run: python3 exercises/02_dot.py
"""


def dot(a, b):
    pass


# ===== Checks: do not edit below this line =====
assert dot([1, 2, 3], [4, 5, 6]) == 32
assert dot([0.5, 1], [2, 3]) == 4.0
assert dot([], []) == 0
assert dot([0, 0, 0], [7, 8, 9]) == 0
assert dot([1, -1], [5, 5]) == 0
assert dot([1, 2], [1, 2, 3]) is None
# A weight of 0 switches an input off:
assert dot([1, 0, 1], [10, 99, 20]) == 30
print("All checks passed")
