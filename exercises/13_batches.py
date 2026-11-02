"""Exercise 13: batches

Big data does not fit in memory at once. Models read it in small groups
called batches. Write batches(data, size) as a GENERATOR:
use yield, not return. Each yield gives a list with size items.
The last batch can be smaller. Do not build all batches first.

Example: list(batches([1, 2, 3, 4, 5], 2)) -> [[1, 2], [3, 4], [5]]

Run: python3 exercises/13_batches.py
"""


def batches(data, size):
    pass


# ===== Checks: do not edit below this line =====
import inspect
assert list(batches([1, 2, 3, 4, 5], 2)) == [[1, 2], [3, 4], [5]]
assert list(batches([1, 2, 3, 4], 2)) == [[1, 2], [3, 4]]
assert list(batches([1, 2, 3], 5)) == [[1, 2, 3]]
assert list(batches([], 3)) == []
assert list(batches([1, 2, 3], 1)) == [[1], [2], [3]]
g = batches([1, 2, 3, 4], 2)
assert inspect.isgenerator(g), "use yield so batches is a generator"
assert next(g) == [1, 2]
assert next(g) == [3, 4]
total = 0
for b in batches(list(range(100)), 8):
    total += len(b)
assert total == 100
print("All checks passed")
