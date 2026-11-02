"""Exercise 09: bigram_counts and predict_next

A bigram is two words next to each other. Count which word follows which.
bigram_counts(tokens) returns a dict of dicts:
    counts[first][second] = how many times "second" came right after "first"
Only words that have a follower become keys.
predict_next(counts, word) returns the follower with the highest count.
If two followers have the same count, return the one first in the alphabet.
If the word is unknown, return None.

Example: bigram_counts(["a", "b", "a", "b", "a", "c"])
         -> {"a": {"b": 2, "c": 1}, "b": {"a": 2}}
         predict_next(counts, "a") -> "b"

Run: python3 exercises/09_bigrams.py
"""


def bigram_counts(tokens):
    pass


def predict_next(counts, word):
    pass


# ===== Checks: do not edit below this line =====
assert bigram_counts(["a", "b", "a", "b", "a", "c"]) == {"a": {"b": 2, "c": 1}, "b": {"a": 2}}
assert bigram_counts([]) == {}
assert bigram_counts(["solo"]) == {}
text = "the cat sat on the mat the cat ran".split()
counts = bigram_counts(text)
assert counts["the"] == {"cat": 2, "mat": 1}
assert counts["cat"] == {"sat": 1, "ran": 1}
assert "ran" not in counts
assert predict_next(counts, "the") == "cat"
assert predict_next(counts, "cat") == "ran"   # tie: alphabet decides
assert predict_next(counts, "ran") is None    # no follower seen
assert predict_next(counts, "dog") is None    # unknown word
print("All checks passed")
