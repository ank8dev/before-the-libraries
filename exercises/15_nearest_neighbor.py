"""Exercise 15: NearestNeighbor

A nearest-neighbor model has no training maths. It remembers examples.
To predict, it finds the closest remembered example and gives its label.
Distance: squared distance between two points =
  take the difference in each position, square it, add all.
(We skip the square root. The order of distances stays the same.)

class NearestNeighbor:
  - fit(self, X, y): remember X (list of points) and y (list of labels)
  - predict(self, x): return the label of the closest point in X.
    If two points are equally close, the one that comes first in X wins.
    If fit was never called, return None.

Example: model = NearestNeighbor()
         model.fit([[0, 0], [10, 10]], ["small", "big"])
         model.predict([2, 1]) -> "small"

Run: python3 exercises/15_nearest_neighbor.py
"""


class NearestNeighbor:
    pass


# ===== Checks: do not edit below this line =====
model = NearestNeighbor()
assert model.predict([1, 1]) is None, "predict before fit gives None"
model.fit([[0, 0], [10, 10]], ["a", "b"])
assert model.predict([1, 1]) == "a"
assert model.predict([9, 8]) == "b"
assert model.predict([5, 5]) == "a", "tie: first point wins"
model.fit([[0], [4], [9]], ["x", "y", "z"])
assert model.predict([3]) == "y"
assert model.predict([100]) == "z"
assert model.predict([-50]) == "x"
other = NearestNeighbor()
other.fit([[1, 2, 3]], ["only"])
assert other.predict([9, 9, 9]) == "only"
assert model.predict([4]) == "y", "models do not share memory"
print("All checks passed")
