"""Exercise 10: generate

Now let the model write. generate(counts, start, n, seed) uses a counts dict
like the one from exercise 09 (counts[first][second] = number).
Start with the word "start". Then repeat up to n times:
pick the next word at random. A word with a higher count is
picked more often. Add it to the result.
If the current word has no followers, stop early.
Call random.seed(seed) first, so the same seed gives the same text.
Return the list of words, including start.

Example: counts = {"a": {"b": 1}, "b": {"c": 1}}
         generate(counts, "a", 5, 0) -> ["a", "b", "c"]  (stops: "c" has no followers)

Run: python3 exercises/10_generate.py
"""


def generate(counts, start, n, seed):
    pass


# ===== Checks: do not edit below this line =====
chain = {"a": {"b": 1}, "b": {"c": 1}}
assert generate(chain, "a", 5, 0) == ["a", "b", "c"]
assert generate(chain, "a", 1, 0) == ["a", "b"]
assert generate(chain, "a", 0, 0) == ["a"]
assert generate(chain, "zzz", 3, 0) == ["zzz"]

loop = {"x": {"y": 1}, "y": {"x": 1}}
assert generate(loop, "x", 4, 1) == ["x", "y", "x", "y", "x"]

branch = {"a": {"b": 5, "c": 5}, "b": {"a": 1}, "c": {"a": 1}}
assert generate(branch, "a", 20, 7) == generate(branch, "a", 20, 7), "same seed, same text"
outputs = set(tuple(generate(branch, "a", 20, s)) for s in range(10))
assert len(outputs) > 1, "different seeds should give different text"
for text in outputs:
    for first, second in zip(text, text[1:]):
        assert second in branch[first], "every step must be a seen bigram"

# Counts are weights: "b" is 1000 times more likely than "c".
skewed = {"a": {"b": 1000, "c": 1}}
firsts = [generate(skewed, "a", 1, s)[1] for s in range(200)]
assert firsts.count("b") > 180
print("All checks passed")
