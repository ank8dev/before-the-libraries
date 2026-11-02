"""Exercise 06: tokenize

A language model first cuts text into small pieces called tokens.
Here a token is a word. Write tokenize(text):
1. make all letters lowercase
2. remove every punctuation character
3. split the text into words
Return the list of words. Extra spaces must not make empty words.

Example: tokenize("Hello, World!") -> ["hello", "world"]
         tokenize("It's me.") -> ["its", "me"]

Run: python3 exercises/06_tokenize.py
"""


def tokenize(text):
    pass


# ===== Checks: do not edit below this line =====
assert tokenize("Hello, World!") == ["hello", "world"]
assert tokenize("The cat sat.") == ["the", "cat", "sat"]
assert tokenize("It's me.") == ["its", "me"]
assert tokenize("  many    spaces  here ") == ["many", "spaces", "here"]
assert tokenize("") == []
assert tokenize("!!! ... ???") == []
assert tokenize("Wait... what?!") == ["wait", "what"]
assert tokenize("ONE Two tHrEe") == ["one", "two", "three"]
assert tokenize("line one\nline two") == ["line", "one", "line", "two"]
print("All checks passed")
