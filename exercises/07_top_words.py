"""Exercise 07: top_words

Which words appear most? Write top_words(tokens, n).
Return a list of (word, count) tuples with the n most common words.
Most common first. If two words have the same count, put the word
that comes first in the alphabet first.
If n is bigger than the number of different words, return all of them.

Example: top_words(["a", "b", "a", "c", "b", "a"], 2) -> [("a", 3), ("b", 2)]

Run: python3 exercises/07_top_words.py
"""


def top_words(tokens, n):
    pass


# ===== Checks: do not edit below this line =====
tokens = ["a", "b", "a", "c", "b", "a"]
assert top_words(tokens, 2) == [("a", 3), ("b", 2)]
assert top_words(tokens, 1) == [("a", 3)]
assert top_words(tokens, 10) == [("a", 3), ("b", 2), ("c", 1)]
assert top_words([], 3) == []
assert top_words(tokens, 0) == []
# Ties: the alphabet decides
assert top_words(["z", "y", "x"], 3) == [("x", 1), ("y", 1), ("z", 1)]
assert top_words(["b", "a", "b", "a", "c"], 2) == [("a", 2), ("b", 2)]
print("All checks passed")
