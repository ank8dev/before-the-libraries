"""Exercise 14: Dataset class

Libraries like PyTorch use a Dataset: an object that knows its size
and gives one example by position. Write class Dataset:
  - __init__(self, items, labels): store both lists
  - __len__(self): how many examples
  - __getitem__(self, index): return the tuple (item, label) at that position
Negative index must work like in a list: ds[-1] is the last example.
An index that is too big must raise IndexError.

Example: ds = Dataset(["cat.png", "dog.png"], [0, 1])
         len(ds) -> 2     ds[1] -> ("dog.png", 1)

Run: python3 exercises/14_dataset.py
"""


class Dataset:
    pass


# ===== Checks: do not edit below this line =====
ds = Dataset(["cat.png", "dog.png", "bird.png"], [0, 1, 2])
assert len(ds) == 3
assert ds[0] == ("cat.png", 0)
assert ds[2] == ("bird.png", 2)
assert ds[-1] == ("bird.png", 2)
assert len(Dataset([], [])) == 0
try:
    ds[3]
    raise AssertionError("ds[3] should raise IndexError")
except IndexError:
    pass
# Python can now loop over your object with a plain for loop:
seen = []
for pair in ds:
    seen.append(pair)
assert seen == [("cat.png", 0), ("dog.png", 1), ("bird.png", 2)]
# Two objects do not share data:
other = Dataset([1], [9])
assert len(other) == 1 and len(ds) == 3
print("All checks passed")
