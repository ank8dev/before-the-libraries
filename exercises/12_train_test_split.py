"""Exercise 12: train_test_split

We train a model on the train part. We test it on the test part.
The test part must stay unseen. If test data leaks into training,
the score looks better than it really is. This is called data leakage.
Write train_test_split(data, test_ratio, seed):
  - copy the list (do NOT change the original)
  - shuffle the copy with the given seed
  - test size = int(len(data) * test_ratio)
  - the first test-size items are the test part, the rest are the train part
Return (train, test).

Example: train_test_split(list(range(10)), 0.2, 0) -> (8 items, 2 items)

Run: python3 exercises/12_train_test_split.py
"""
import random


def train_test_split(data, test_ratio, seed):
    pass


# ===== Checks: do not edit below this line =====
data = list(range(10))
original = list(data)
train, test = train_test_split(data, 0.2, 0)
assert data == original, "Do not change the original list"
assert len(train) == 8 and len(test) == 2
assert sorted(train + test) == original, "every item exactly once"
assert not set(train) & set(test), "no item in both parts"
assert train_test_split(data, 0.2, 0) == (train, test), "same seed, same split"
splits = set(tuple(train_test_split(data, 0.5, s)[1]) for s in range(10))
assert len(splits) > 1, "different seeds should shuffle differently"
train, test = train_test_split(data, 0.0, 1)
assert test == [] and len(train) == 10
train, test = train_test_split([], 0.3, 1)
assert train == [] and test == []
train, test = train_test_split(data, 0.35, 3)
assert len(test) == 3 and len(train) == 7
assert train is not data and test is not data
print("All checks passed")
