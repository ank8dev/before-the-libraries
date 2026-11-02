"""Exercise 08: build_vocab, encode, decode

Models use numbers, not words. A vocabulary maps each word to an id.
build_vocab(tokens) returns a dict {word: id}.
  - "<unk>" always gets id 0. It means "unknown word".
  - Other words get ids 1, 2, 3 ... in the order of first appearance.
  - Each different word appears once.
encode(tokens, vocab) returns a list of ids. A word not in vocab gets the id of "<unk>".
decode(ids, vocab) returns a list of words. An id not in vocab becomes "<unk>".

Example: vocab = build_vocab(["the", "cat", "the", "dog"])
         vocab -> {"<unk>": 0, "the": 1, "cat": 2, "dog": 3}
         encode(["the", "bird"], vocab) -> [1, 0]
         decode([2, 3], vocab) -> ["cat", "dog"]

Run: python3 exercises/08_vocab.py
"""


def build_vocab(tokens):
    pass


def encode(tokens, vocab):
    pass


def decode(ids, vocab):
    pass


# ===== Checks: do not edit below this line =====
vocab = build_vocab(["the", "cat", "the", "dog"])
assert vocab == {"<unk>": 0, "the": 1, "cat": 2, "dog": 3}
assert build_vocab([]) == {"<unk>": 0}
assert encode(["the", "dog"], vocab) == [1, 3]
assert encode(["the", "bird"], vocab) == [1, 0]
assert encode([], vocab) == []
assert decode([2, 3], vocab) == ["cat", "dog"]
assert decode([1, 99], vocab) == ["the", "<unk>"]
assert decode(encode(["cat", "the"], vocab), vocab) == ["cat", "the"]
# Unknown words are lost after a round trip:
assert decode(encode(["bird"], vocab), vocab) == ["<unk>"]
print("All checks passed")
