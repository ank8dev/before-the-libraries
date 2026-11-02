"""Exercise 05: scale_0_1

Models like numbers on the same scale. Min-max scaling puts
all values between 0 and 1.
For each value: (value - smallest) / (biggest - smallest).
In words: how far is the value from the smallest, as a part of the full range?
The smallest value becomes 0.0. The biggest becomes 1.0.
If all values are equal, the range is 0 and you cannot divide.
In that case return 0.0 for every value. For [] return [].
Do not change the input list.

Example: scale_0_1([10, 20, 30]) -> [0.0, 0.5, 1.0]

Run: python3 exercises/05_scale_0_1.py
"""


def scale_0_1(values):
    pass


# ===== Checks: do not edit below this line =====
assert scale_0_1([10, 20, 30]) == [0.0, 0.5, 1.0]
assert scale_0_1([0, 5, 10]) == [0.0, 0.5, 1.0]
assert scale_0_1([-1, 0, 1]) == [0.0, 0.5, 1.0]
assert scale_0_1([7, 7, 7]) == [0.0, 0.0, 0.0]
assert scale_0_1([4]) == [0.0]
assert scale_0_1([]) == []
out = scale_0_1([10, 20, 40])
assert abs(out[1] - 1 / 3) < 1e-9 and out[2] == 1.0
data = [3, 1, 2]
scale_0_1(data)
assert data == [3, 1, 2], "Do not change the input"
assert scale_0_1([3, 1, 2]) == [1.0, 0.0, 0.5]
print("All checks passed")
