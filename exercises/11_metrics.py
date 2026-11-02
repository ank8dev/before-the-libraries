"""Exercise 11: accuracy and confusion_counts

A model predicts labels: 1 (yes) or 0 (no). Compare with the true labels.
accuracy(preds, labels): the part of predictions that are correct (a number from 0 to 1).
confusion_counts(preds, labels): a dict with four counts
  TP = predicted 1, truth 1     FP = predicted 1, truth 0
  TN = predicted 0, truth 0     FN = predicted 0, truth 1
If the lists have different lengths, return None.
For empty lists, accuracy is 0.0.

Example: preds  = [1, 0, 1, 1]
         labels = [1, 0, 0, 1]
         accuracy(preds, labels) -> 0.75
         confusion_counts(preds, labels) -> {"TP": 2, "FP": 1, "TN": 1, "FN": 0}

Run: python3 exercises/11_metrics.py
"""


def accuracy(preds, labels):
    pass


def confusion_counts(preds, labels):
    pass


# ===== Checks: do not edit below this line =====
assert accuracy([1, 0, 1, 1], [1, 0, 0, 1]) == 0.75
assert accuracy([1, 1], [1, 1]) == 1.0
assert accuracy([1, 1], [0, 0]) == 0.0
assert accuracy([], []) == 0.0
assert accuracy([1], [1, 0]) is None
assert confusion_counts([1, 0, 1, 1], [1, 0, 0, 1]) == {"TP": 2, "FP": 1, "TN": 1, "FN": 0}
assert confusion_counts([], []) == {"TP": 0, "FP": 0, "TN": 0, "FN": 0}
assert confusion_counts([1], [1, 0]) is None
# A lazy model that always says 0 on rare positives:
labels = [0] * 95 + [1] * 5
lazy = [0] * 100
assert accuracy(lazy, labels) == 0.95
assert confusion_counts(lazy, labels) == {"TP": 0, "FP": 0, "TN": 95, "FN": 5}
print("All checks passed")
