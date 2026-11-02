// All site content lives here. Change SITE.title to rename the site.
window.SITE = {
  "title": "Before the Libraries",
  "subtitle": "15 small Python exercises that prepare you for NumPy, pandas, scikit-learn and PyTorch.",
  "repo": "https://github.com/ank8dev/before-the-libraries",
  "branch": "main",
  "langs": [
    {
      "code": "en",
      "name": "English"
    },
    { "code": "ru", "name": "Русский" },
    { "code": "es", "name": "Español" },
    { "code": "zh", "name": "中文" },
    { "code": "hi", "name": "हिन्दी" },
    { "code": "pt", "name": "Português" },
    { "code": "fr", "name": "Français" },
    { "code": "de", "name": "Deutsch" },
    { "code": "ja", "name": "日本語" }
  ]
};
window.BLOCKS = [
  {
    "id": "numbers",
    "title": "Block 1: Numbers",
    "note": "Prepares you for NumPy"
  },
  {
    "id": "text",
    "title": "Block 2: Text",
    "note": "Prepares you for tokenizers and language models"
  },
  {
    "id": "evaluating",
    "title": "Block 3: Evaluating models",
    "note": "Prepares you for scikit-learn"
  },
  {
    "id": "classes",
    "title": "Block 4: Classes that work like libraries",
    "note": "Prepares you for PyTorch and scikit-learn"
  }
];
window.EXERCISES = [
 {
  "n": 1,
  "id": "01_add_vectors",
  "block": "numbers",
  "title": "add_vectors",
  "file": "exercises/01_add_vectors.py",
  "why": "Many AI models work with vectors: lists of numbers. Adding two vectors is one of the most common steps. NumPy does it for a whole array in one line.",
  "task": [
   "Write add_vectors(a, b). It returns a new list where each item is a[i] + b[i].",
   "If the lists have different lengths, return None. Do not change a or b."
  ],
  "exampleIn": "add_vectors([1, 2, 3], [10, 20, 30])",
  "exampleOut": "[11, 22, 33]",
  "predict": "What should add_vectors([1, 2], [1, 2, 3]) give? Decide, then check the docstring.",
  "lookup": [
   "python zip function"
  ],
  "hints": [
   "You need to visit both lists at the same position. Which tool walks two lists together?",
   "Build an empty list first. Then add one result for each pair.",
   "Check the lengths before the loop. Returning early is fine."
  ],
  "library": "With NumPy arrays: a + b. The library adds item by item for you.",
  "starter": "\"\"\"Exercise 01: add_vectors\n\nA vector is a list of numbers. Write add_vectors(a, b).\nIt returns a NEW list. Each item is a[i] + b[i].\nIf the lists have different lengths, return None.\nDo not change a or b.\n\nExample: add_vectors([1, 2, 3], [10, 20, 30]) -> [11, 22, 33]\n\nRun: python3 exercises/01_add_vectors.py\n\"\"\"\n\n\ndef add_vectors(a, b):\n    pass\n",
  "checks": "assert add_vectors([1, 2, 3], [10, 20, 30]) == [11, 22, 33]\nassert add_vectors([], []) == []\nassert add_vectors([-1, 5], [1, -5]) == [0, 0]\nassert add_vectors([0.5, 0.25], [0.5, 0.75]) == [1.0, 1.0]\nassert add_vectors([1, 2], [1, 2, 3]) is None\nx, y = [1, 2], [3, 4]\nresult = add_vectors(x, y)\nassert x == [1, 2] and y == [3, 4], \"Do not change the input lists\"\nassert result is not x and result is not y\nprint(\"All checks passed\")\n",
  "tryCode": "add_vectors([1, 2, 3], [10, 20, 30])"
 },
 {
  "n": 2,
  "id": "02_dot",
  "block": "numbers",
  "title": "dot",
  "file": "exercises/02_dot.py",
  "why": "A neuron-like unit in a model mixes its inputs with weights. That mix is a dot product. It is the main operation inside most neural networks.",
  "task": [
   "Write dot(a, b). Multiply each pair a[i] * b[i]. Then add all the results.",
   "Think of a as weights and b as inputs. The weight says how much each input matters. The answer is one number: a weighted sum.",
   "Different lengths: return None. Empty lists: return 0."
  ],
  "exampleIn": "dot([0.5, 1], [2, 3])",
  "exampleOut": "4.0",
  "predict": "In dot([1, 0, 1], [10, 99, 20]), what does the 0 do to the value 99?",
  "lookup": [
   "python zip function",
   "python sum of products"
  ],
  "hints": [
   "This looks like exercise 01. What is different: a list as the result, or one number?",
   "Keep a running total. Start from zero.",
   "A weight of 0 means: this input is ignored. Test this idea on paper."
  ],
  "library": "np.dot(a, b) gives the same number for two 1-D arrays.",
  "starter": "\"\"\"Exercise 02: dot\n\nWrite dot(a, b). Multiply each pair a[i] * b[i]. Then add all the results.\nThink of a as weights (how much each input matters)\nand b as inputs. The answer is one number: a weighted sum.\nIf the lengths are different, return None. For empty lists, return 0.\n\nExample: weights [0.5, 1], inputs [2, 3] -> 0.5*2 + 1*3 = 4.0\n         dot([0.5, 1], [2, 3]) -> 4.0\n\nRun: python3 exercises/02_dot.py\n\"\"\"\n\n\ndef dot(a, b):\n    pass\n",
  "checks": "assert dot([1, 2, 3], [4, 5, 6]) == 32\nassert dot([0.5, 1], [2, 3]) == 4.0\nassert dot([], []) == 0\nassert dot([0, 0, 0], [7, 8, 9]) == 0\nassert dot([1, -1], [5, 5]) == 0\nassert dot([1, 2], [1, 2, 3]) is None\n# A weight of 0 switches an input off:\nassert dot([1, 0, 1], [10, 99, 20]) == 30\nprint(\"All checks passed\")\n",
  "tryCode": "dot([0.5, 1, 2], [2, 3, 4])"
 },
 {
  "n": 3,
  "id": "03_matrix_shape",
  "block": "numbers",
  "title": "shape and transpose",
  "file": "exercises/03_matrix_shape.py",
  "why": "Data in AI is often a table of numbers: a matrix. Before you do anything, you check its shape. Wrong shapes are the most common error in NumPy and PyTorch code.",
  "task": [
   "A matrix is a list of rows. Write shape(matrix) that returns (rows, cols). For [] return (0, 0).",
   "Write transpose(matrix) that returns a new matrix where rows become columns. The original must not change."
  ],
  "exampleIn": "transpose([[1, 2, 3], [4, 5, 6]])",
  "exampleOut": "[[1, 4], [2, 5], [3, 6]]",
  "predict": "A matrix has shape (2, 3). What is the shape after transpose? Say it before you code.",
  "lookup": [
   "python nested lists 2d",
   "python tuple"
  ],
  "hints": [
   "The shape needs only two lengths: the list and its first row.",
   "In the new matrix, the first row is the first item of every old row.",
   "Use two loops. The outer loop counts columns. The inner loop counts rows."
  ],
  "library": "With NumPy: m.shape and m.T",
  "starter": "\"\"\"Exercise 03: shape and transpose\n\nA matrix here is a list of rows (a list of lists). All rows have the same length.\nshape(matrix) returns a tuple (rows, cols). For [] return (0, 0).\ntranspose(matrix) returns a NEW matrix. Rows become columns.\nDo not change the original matrix.\n\nExample: m = [[1, 2, 3],\n              [4, 5, 6]]\nshape(m)     -> (2, 3)\ntranspose(m) -> [[1, 4], [2, 5], [3, 6]]\n\nRun: python3 exercises/03_matrix_shape.py\n\"\"\"\n\n\ndef shape(matrix):\n    pass\n\n\ndef transpose(matrix):\n    pass\n",
  "checks": "m = [[1, 2, 3], [4, 5, 6]]\nassert shape(m) == (2, 3)\nassert shape([[1], [2], [3]]) == (3, 1)\nassert shape([]) == (0, 0)\nassert transpose(m) == [[1, 4], [2, 5], [3, 6]]\nassert m == [[1, 2, 3], [4, 5, 6]], \"Do not change the original\"\nassert transpose([[1, 2, 3]]) == [[1], [2], [3]]\nassert transpose([]) == []\nsquare = [[1, 2], [3, 4]]\nassert transpose(transpose(square)) == square\nassert shape(transpose(m)) == (3, 2)\nt = transpose(square)\nt[0][0] = 99\nassert square[0][0] == 1, \"transpose must build new rows\"\nprint(\"All checks passed\")\n",
  "tryCode": "transpose([[1, 2, 3], [4, 5, 6]])"
 },
 {
  "n": 4,
  "id": "04_flatten_reshape",
  "block": "numbers",
  "title": "flatten and reshape",
  "file": "exercises/04_flatten_reshape.py",
  "why": "A picture is a grid of pixels. Many models want one long list instead. Changing the shape without changing the data is called reshape. You will use it all the time.",
  "task": [
   "Write flatten(image): turn a grid into one list, row by row.",
   "Write reshape(values, rows, cols): turn a flat list into a grid. If rows * cols is not the number of values, return None.",
   "Use a 3x3 image to test your ideas."
  ],
  "exampleIn": "reshape([1, 2, 3, 4], 2, 2)",
  "exampleOut": "[[1, 2], [3, 4]]",
  "predict": "If you flatten a grid and then reshape it back, do you always get the same grid? When not?",
  "lookup": [
   "python list slicing",
   "python range step"
  ],
  "hints": [
   "Flatten: visit every row, then every value in that row.",
   "Reshape: first check that the size fits. Then cut the list in equal pieces.",
   "Piece number i starts at i * cols. Find where it ends."
  ],
  "library": "With NumPy: image.reshape(3, 3). The result is the same, in one call.",
  "starter": "\"\"\"Exercise 04: flatten and reshape\n\nA small grey image is a 3x3 grid of pixel values (0 to 255).\nflatten(image) turns the grid into one list, row by row.\nreshape(values, rows, cols) turns a flat list into a grid with\nthat many rows and cols. If rows * cols is not the number\nof values, return None.\n\nExample: flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [1, 2, 3, 4, 5, 6, 7, 8, 9]\n         reshape([1, 2, 3, 4], 2, 2) -> [[1, 2], [3, 4]]\n         reshape([1, 2, 3], 2, 2) -> None\n\nRun: python3 exercises/04_flatten_reshape.py\n\"\"\"\n\n\ndef flatten(image):\n    pass\n\n\ndef reshape(values, rows, cols):\n    pass\n",
  "checks": "img = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]\nassert flatten(img) == [10, 20, 30, 40, 50, 60, 70, 80, 90]\nassert flatten([[1, 2], [3, 4], [5, 6]]) == [1, 2, 3, 4, 5, 6]\nassert flatten([]) == []\nassert reshape([1, 2, 3, 4], 2, 2) == [[1, 2], [3, 4]]\nassert reshape([1, 2, 3, 4, 5, 6], 2, 3) == [[1, 2, 3], [4, 5, 6]]\nassert reshape([1, 2, 3, 4, 5, 6], 3, 2) == [[1, 2], [3, 4], [5, 6]]\nassert reshape([1, 2, 3], 2, 2) is None\nassert reshape([1, 2, 3, 4, 5], 2, 2) is None\nassert reshape(flatten(img), 3, 3) == img\nassert flatten(reshape(list(range(12)), 3, 4)) == list(range(12))\nprint(\"All checks passed\")\n",
  "tryCode": "reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)"
 },
 {
  "n": 5,
  "id": "05_scale_0_1",
  "block": "numbers",
  "title": "scale_0_1",
  "file": "exercises/05_scale_0_1.py",
  "why": "Features can have very different sizes: age 30, salary 50000. Models learn better when all features are on a similar scale. Min-max scaling is the simplest way.",
  "task": [
   "Write scale_0_1(values). For each value compute (value - smallest) / (biggest - smallest).",
   "In words: how far is the value from the smallest, as a part of the full range? The smallest becomes 0.0. The biggest becomes 1.0.",
   "If all values are equal, the range is 0. You cannot divide by 0. Return 0.0 for every value. For [] return []."
  ],
  "exampleIn": "scale_0_1([10, 20, 30])",
  "exampleOut": "[0.0, 0.5, 1.0]",
  "predict": "What is scale_0_1([7, 7, 7]) if you do not handle that case? Say what error you expect.",
  "lookup": [
   "python min max functions",
   "python ZeroDivisionError"
  ],
  "hints": [
   "Find the smallest and biggest value once, before the loop.",
   "The range is biggest minus smallest. When is it zero?",
   "Handle the empty list and the equal-values case before you divide."
  ],
  "library": "scikit-learn: MinMaxScaler().fit_transform(X) does the same for every column.",
  "starter": "\"\"\"Exercise 05: scale_0_1\n\nModels like numbers on the same scale. Min-max scaling puts\nall values between 0 and 1.\nFor each value: (value - smallest) / (biggest - smallest).\nIn words: how far is the value from the smallest, as a part of the full range?\nThe smallest value becomes 0.0. The biggest becomes 1.0.\nIf all values are equal, the range is 0 and you cannot divide.\nIn that case return 0.0 for every value. For [] return [].\nDo not change the input list.\n\nExample: scale_0_1([10, 20, 30]) -> [0.0, 0.5, 1.0]\n\nRun: python3 exercises/05_scale_0_1.py\n\"\"\"\n\n\ndef scale_0_1(values):\n    pass\n",
  "checks": "assert scale_0_1([10, 20, 30]) == [0.0, 0.5, 1.0]\nassert scale_0_1([0, 5, 10]) == [0.0, 0.5, 1.0]\nassert scale_0_1([-1, 0, 1]) == [0.0, 0.5, 1.0]\nassert scale_0_1([7, 7, 7]) == [0.0, 0.0, 0.0]\nassert scale_0_1([4]) == [0.0]\nassert scale_0_1([]) == []\nout = scale_0_1([10, 20, 40])\nassert abs(out[1] - 1 / 3) < 1e-9 and out[2] == 1.0\ndata = [3, 1, 2]\nscale_0_1(data)\nassert data == [3, 1, 2], \"Do not change the input\"\nassert scale_0_1([3, 1, 2]) == [1.0, 0.0, 0.5]\nprint(\"All checks passed\")\n",
  "tryCode": "scale_0_1([10, 20, 30, 40, 100])"
 },
 {
  "n": 6,
  "id": "06_tokenize",
  "block": "text",
  "title": "tokenize",
  "file": "exercises/06_tokenize.py",
  "why": "A language model cannot read raw text. First the text is cut into small pieces called tokens. Real tokenizers are smarter, but the idea starts here.",
  "task": [
   "Write tokenize(text). Make letters lowercase. Remove every punctuation character. Split into words.",
   "Extra spaces must not make empty words. Return a list of words."
  ],
  "exampleIn": "tokenize(\"Hello, World!\")",
  "exampleOut": "[\"hello\", \"world\"]",
  "predict": "What do you expect for tokenize(\"It's me.\")? One of the words may surprise you.",
  "lookup": [
   "python str.lower",
   "python str.split",
   "python string.punctuation"
  ],
  "hints": [
   "There is a ready-made string of all punctuation characters in the standard library.",
   "Remove the punctuation first or last. Does the order change the result?",
   "Split with no argument handles many spaces and new lines."
  ],
  "library": "Real libraries (for example NLTK or Hugging Face) have tokenizers. Yours is the simplest idea of them.",
  "starter": "\"\"\"Exercise 06: tokenize\n\nA language model first cuts text into small pieces called tokens.\nHere a token is a word. Write tokenize(text):\n1. make all letters lowercase\n2. remove every punctuation character\n3. split the text into words\nReturn the list of words. Extra spaces must not make empty words.\n\nExample: tokenize(\"Hello, World!\") -> [\"hello\", \"world\"]\n         tokenize(\"It's me.\") -> [\"its\", \"me\"]\n\nRun: python3 exercises/06_tokenize.py\n\"\"\"\n\n\ndef tokenize(text):\n    pass\n",
  "checks": "assert tokenize(\"Hello, World!\") == [\"hello\", \"world\"]\nassert tokenize(\"The cat sat.\") == [\"the\", \"cat\", \"sat\"]\nassert tokenize(\"It's me.\") == [\"its\", \"me\"]\nassert tokenize(\"  many    spaces  here \") == [\"many\", \"spaces\", \"here\"]\nassert tokenize(\"\") == []\nassert tokenize(\"!!! ... ???\") == []\nassert tokenize(\"Wait... what?!\") == [\"wait\", \"what\"]\nassert tokenize(\"ONE Two tHrEe\") == [\"one\", \"two\", \"three\"]\nassert tokenize(\"line one\\nline two\") == [\"line\", \"one\", \"line\", \"two\"]\nprint(\"All checks passed\")\n",
  "tryCode": "tokenize(\"Hello, World! It's me.\")"
 },
 {
  "n": 7,
  "id": "07_top_words",
  "block": "text",
  "title": "top_words",
  "file": "exercises/07_top_words.py",
  "why": "Counting words is the first step of many text methods. It shows what a text is about. It also shows why rare words are a problem for models.",
  "task": [
   "Write top_words(tokens, n). Return a list of (word, count) tuples for the n most common words. Most common first.",
   "If two words have the same count, the word first in the alphabet comes first.",
   "If n is more than the number of different words, return all of them."
  ],
  "exampleIn": "top_words([\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"], 2)",
  "exampleOut": "[(\"a\", 3), (\"b\", 2)]",
  "predict": "Two words both appear 2 times. Which one should come first in your list, and why?",
  "lookup": [
   "python sorted key parameter",
   "python dict items"
  ],
  "hints": [
   "First count the words in a dict. Then think about sorting.",
   "You can sort by more than one thing: a tuple works as a key.",
   "To sort big-to-small by count, but A-to-Z by word, use a small trick with the sign of the count."
  ],
  "library": "collections.Counter(tokens).most_common(n)",
  "starter": "\"\"\"Exercise 07: top_words\n\nWhich words appear most? Write top_words(tokens, n).\nReturn a list of (word, count) tuples with the n most common words.\nMost common first. If two words have the same count, put the word\nthat comes first in the alphabet first.\nIf n is bigger than the number of different words, return all of them.\n\nExample: top_words([\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"], 2) -> [(\"a\", 3), (\"b\", 2)]\n\nRun: python3 exercises/07_top_words.py\n\"\"\"\n\n\ndef top_words(tokens, n):\n    pass\n",
  "checks": "tokens = [\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"]\nassert top_words(tokens, 2) == [(\"a\", 3), (\"b\", 2)]\nassert top_words(tokens, 1) == [(\"a\", 3)]\nassert top_words(tokens, 10) == [(\"a\", 3), (\"b\", 2), (\"c\", 1)]\nassert top_words([], 3) == []\nassert top_words(tokens, 0) == []\n# Ties: the alphabet decides\nassert top_words([\"z\", \"y\", \"x\"], 3) == [(\"x\", 1), (\"y\", 1), (\"z\", 1)]\nassert top_words([\"b\", \"a\", \"b\", \"a\", \"c\"], 2) == [(\"a\", 2), (\"b\", 2)]\nprint(\"All checks passed\")\n",
  "tryCode": "top_words([\"a\", \"b\", \"a\", \"c\", \"b\", \"a\"], 3)"
 },
 {
  "n": 8,
  "id": "08_vocab",
  "block": "text",
  "title": "build_vocab, encode, decode",
  "file": "exercises/08_vocab.py",
  "why": "Models work with numbers, not words. A vocabulary gives each word an id. Words not in the vocabulary all become one special token. This is how real tokenizers work too.",
  "task": [
   "Write build_vocab(tokens): return a dict {word: id}. The token \"<unk>\" always has id 0. Other words get ids 1, 2, 3 ... in order of first appearance. Each word appears once.",
   "Write encode(tokens, vocab): a list of ids. A word that is not in vocab gets the id of \"<unk>\".",
   "Write decode(ids, vocab): a list of words. An unknown id becomes \"<unk>\"."
  ],
  "exampleIn": "build_vocab([\"the\", \"cat\", \"the\", \"dog\"])",
  "exampleOut": "{\"<unk>\": 0, \"the\": 1, \"cat\": 2, \"dog\": 3}",
  "predict": "You encode a text with a new word, then decode it back. Do you get the same text? Why?",
  "lookup": [
   "python dict get default value",
   "python reverse a dictionary"
  ],
  "hints": [
   "The next free id is always the current size of the dict.",
   "For encode, ask the dict for a word, but give a default when it is missing.",
   "For decode you need the opposite dict: id to word."
  ],
  "library": "Hugging Face tokenizers keep a vocab and an unknown token, the same way.",
  "starter": "\"\"\"Exercise 08: build_vocab, encode, decode\n\nModels use numbers, not words. A vocabulary maps each word to an id.\nbuild_vocab(tokens) returns a dict {word: id}.\n  - \"<unk>\" always gets id 0. It means \"unknown word\".\n  - Other words get ids 1, 2, 3 ... in the order of first appearance.\n  - Each different word appears once.\nencode(tokens, vocab) returns a list of ids. A word not in vocab gets the id of \"<unk>\".\ndecode(ids, vocab) returns a list of words. An id not in vocab becomes \"<unk>\".\n\nExample: vocab = build_vocab([\"the\", \"cat\", \"the\", \"dog\"])\n         vocab -> {\"<unk>\": 0, \"the\": 1, \"cat\": 2, \"dog\": 3}\n         encode([\"the\", \"bird\"], vocab) -> [1, 0]\n         decode([2, 3], vocab) -> [\"cat\", \"dog\"]\n\nRun: python3 exercises/08_vocab.py\n\"\"\"\n\n\ndef build_vocab(tokens):\n    pass\n\n\ndef encode(tokens, vocab):\n    pass\n\n\ndef decode(ids, vocab):\n    pass\n",
  "checks": "vocab = build_vocab([\"the\", \"cat\", \"the\", \"dog\"])\nassert vocab == {\"<unk>\": 0, \"the\": 1, \"cat\": 2, \"dog\": 3}\nassert build_vocab([]) == {\"<unk>\": 0}\nassert encode([\"the\", \"dog\"], vocab) == [1, 3]\nassert encode([\"the\", \"bird\"], vocab) == [1, 0]\nassert encode([], vocab) == []\nassert decode([2, 3], vocab) == [\"cat\", \"dog\"]\nassert decode([1, 99], vocab) == [\"the\", \"<unk>\"]\nassert decode(encode([\"cat\", \"the\"], vocab), vocab) == [\"cat\", \"the\"]\n# Unknown words are lost after a round trip:\nassert decode(encode([\"bird\"], vocab), vocab) == [\"<unk>\"]\nprint(\"All checks passed\")\n",
  "tryCode": "build_vocab([\"the\", \"cat\", \"the\", \"dog\"])"
 },
 {
  "n": 9,
  "id": "09_bigrams",
  "block": "text",
  "title": "bigram counts and predict_next",
  "file": "exercises/09_bigrams.py",
  "why": "A bigram model guesses the next word from the last word. It is a tiny language model made only of counts. Large models do the same job in a much richer way.",
  "task": [
   "Write bigram_counts(tokens). Return a dict of dicts: counts[first][second] is how many times second came right after first. Only words that have a follower are keys.",
   "Write predict_next(counts, word). Return the follower with the highest count. For a tie, return the first in the alphabet. For an unknown word, return None."
  ],
  "exampleIn": "bigram_counts([\"a\", \"b\", \"a\", \"b\", \"a\", \"c\"])",
  "exampleOut": "{\"a\": {\"b\": 2, \"c\": 1}, \"b\": {\"a\": 2}}",
  "predict": "In \"the cat sat on the mat the cat ran\", what follows \"the\" most often?",
  "lookup": [
   "python dict get default",
   "python nested dictionary counting"
  ],
  "hints": [
   "Look at pairs of neighbours: the word and the next one. How can you make such pairs?",
   "If the first word is new, it needs its own inner dict before you can count in it.",
   "Counting pattern: new count = old count (or 0) + 1."
  ],
  "library": "This is the idea behind Karpathy's makemore (bigram model), but with letters. See his video series 'Neural Networks: Zero to Hero'.",
  "starter": "\"\"\"Exercise 09: bigram_counts and predict_next\n\nA bigram is two words next to each other. Count which word follows which.\nbigram_counts(tokens) returns a dict of dicts:\n    counts[first][second] = how many times \"second\" came right after \"first\"\nOnly words that have a follower become keys.\npredict_next(counts, word) returns the follower with the highest count.\nIf two followers have the same count, return the one first in the alphabet.\nIf the word is unknown, return None.\n\nExample: bigram_counts([\"a\", \"b\", \"a\", \"b\", \"a\", \"c\"])\n         -> {\"a\": {\"b\": 2, \"c\": 1}, \"b\": {\"a\": 2}}\n         predict_next(counts, \"a\") -> \"b\"\n\nRun: python3 exercises/09_bigrams.py\n\"\"\"\n\n\ndef bigram_counts(tokens):\n    pass\n\n\ndef predict_next(counts, word):\n    pass\n",
  "checks": "assert bigram_counts([\"a\", \"b\", \"a\", \"b\", \"a\", \"c\"]) == {\"a\": {\"b\": 2, \"c\": 1}, \"b\": {\"a\": 2}}\nassert bigram_counts([]) == {}\nassert bigram_counts([\"solo\"]) == {}\ntext = \"the cat sat on the mat the cat ran\".split()\ncounts = bigram_counts(text)\nassert counts[\"the\"] == {\"cat\": 2, \"mat\": 1}\nassert counts[\"cat\"] == {\"sat\": 1, \"ran\": 1}\nassert \"ran\" not in counts\nassert predict_next(counts, \"the\") == \"cat\"\nassert predict_next(counts, \"cat\") == \"ran\"   # tie: alphabet decides\nassert predict_next(counts, \"ran\") is None    # no follower seen\nassert predict_next(counts, \"dog\") is None    # unknown word\nprint(\"All checks passed\")\n",
  "tryCode": "bigram_counts(\"the cat sat on the mat the cat ran\".split())"
 },
 {
  "n": 10,
  "id": "10_generate",
  "block": "text",
  "title": "generate",
  "file": "exercises/10_generate.py",
  "why": "A language model writes text by choosing one word, then the next, again and again. The choice is random, but it follows probabilities. This is called sampling.",
  "task": [
   "Write generate(counts, start, n, seed). Use a counts dict like in exercise 09.",
   "Start with the word start. Repeat up to n times: choose the next word at random. A higher count means a higher chance. Add it to the result. If the current word has no followers, stop early.",
   "Call random.seed(seed) first, so the same seed gives the same text. Return the list of words, with start included."
  ],
  "exampleIn": "generate({\"a\": {\"b\": 1}, \"b\": {\"c\": 1}}, \"a\", 5, 0)",
  "exampleOut": "[\"a\", \"b\", \"c\"]",
  "predict": "If one follower has count 1000 and another has count 1, how often will the second one be chosen? About how many times in 1000 tries?",
  "lookup": [
   "python random.choices weights",
   "python random.seed"
  ],
  "hints": [
   "You need one function that picks from a list with weights. The counts are the weights.",
   "The picked word becomes the new current word. Loop.",
   "Where must the seed be set: before the loop, or inside it?"
  ],
  "library": "Large language models also sample the next token from probabilities. A setting called temperature changes how risky the choice is.",
  "starter": "\"\"\"Exercise 10: generate\n\nNow let the model write. generate(counts, start, n, seed) uses a counts dict\nlike the one from exercise 09 (counts[first][second] = number).\nStart with the word \"start\". Then repeat up to n times:\npick the next word at random. A word with a higher count is\npicked more often. Add it to the result.\nIf the current word has no followers, stop early.\nCall random.seed(seed) first, so the same seed gives the same text.\nReturn the list of words, including start.\n\nExample: counts = {\"a\": {\"b\": 1}, \"b\": {\"c\": 1}}\n         generate(counts, \"a\", 5, 0) -> [\"a\", \"b\", \"c\"]  (stops: \"c\" has no followers)\n\nRun: python3 exercises/10_generate.py\n\"\"\"\n\n\ndef generate(counts, start, n, seed):\n    pass\n",
  "checks": "chain = {\"a\": {\"b\": 1}, \"b\": {\"c\": 1}}\nassert generate(chain, \"a\", 5, 0) == [\"a\", \"b\", \"c\"]\nassert generate(chain, \"a\", 1, 0) == [\"a\", \"b\"]\nassert generate(chain, \"a\", 0, 0) == [\"a\"]\nassert generate(chain, \"zzz\", 3, 0) == [\"zzz\"]\n\nloop = {\"x\": {\"y\": 1}, \"y\": {\"x\": 1}}\nassert generate(loop, \"x\", 4, 1) == [\"x\", \"y\", \"x\", \"y\", \"x\"]\n\nbranch = {\"a\": {\"b\": 5, \"c\": 5}, \"b\": {\"a\": 1}, \"c\": {\"a\": 1}}\nassert generate(branch, \"a\", 20, 7) == generate(branch, \"a\", 20, 7), \"same seed, same text\"\noutputs = set(tuple(generate(branch, \"a\", 20, s)) for s in range(10))\nassert len(outputs) > 1, \"different seeds should give different text\"\nfor text in outputs:\n    for first, second in zip(text, text[1:]):\n        assert second in branch[first], \"every step must be a seen bigram\"\n\n# Counts are weights: \"b\" is 1000 times more likely than \"c\".\nskewed = {\"a\": {\"b\": 1000, \"c\": 1}}\nfirsts = [generate(skewed, \"a\", 1, s)[1] for s in range(200)]\nassert firsts.count(\"b\") > 180\nprint(\"All checks passed\")\n",
  "tryCode": "counts = {\"a\": {\"b\": 5, \"c\": 1}, \"b\": {\"a\": 1}, \"c\": {\"a\": 1}}\ngenerate(counts, \"a\", 8, 0)"
 },
 {
  "n": 11,
  "id": "11_metrics",
  "block": "evaluating",
  "title": "accuracy and confusion_counts",
  "file": "exercises/11_metrics.py",
  "why": "How good is a model? Accuracy is the first number people check. But it can lie. The four counts of a confusion table show what kind of mistakes a model makes.",
  "task": [
   "Labels are 1 (yes) or 0 (no). Write accuracy(preds, labels): the part of predictions that are correct, from 0 to 1.",
   "Write confusion_counts(preds, labels): a dict with TP (said 1, truth 1), FP (said 1, truth 0), TN (said 0, truth 0), FN (said 0, truth 1).",
   "Different lengths: return None. Empty lists: accuracy is 0.0."
  ],
  "exampleIn": "confusion_counts([1, 0, 1, 1], [1, 0, 0, 1])",
  "exampleOut": "{\"TP\": 2, \"FP\": 1, \"TN\": 1, \"FN\": 0}",
  "predict": "A test has 95 \"no\" and 5 \"yes\". A model always says \"no\". What is its accuracy?",
  "lookup": [
   "confusion matrix true positive false positive explained",
   "python bool as int"
  ],
  "hints": [
   "Accuracy is correct predictions divided by all predictions.",
   "Each pair of values belongs to exactly one of four cases.",
   "First letter T or F: was the model right? Second letter P or N: what did it say?"
  ],
  "library": "scikit-learn: sklearn.metrics.accuracy_score and sklearn.metrics.confusion_matrix",
  "starter": "\"\"\"Exercise 11: accuracy and confusion_counts\n\nA model predicts labels: 1 (yes) or 0 (no). Compare with the true labels.\naccuracy(preds, labels): the part of predictions that are correct (a number from 0 to 1).\nconfusion_counts(preds, labels): a dict with four counts\n  TP = predicted 1, truth 1     FP = predicted 1, truth 0\n  TN = predicted 0, truth 0     FN = predicted 0, truth 1\nIf the lists have different lengths, return None.\nFor empty lists, accuracy is 0.0.\n\nExample: preds  = [1, 0, 1, 1]\n         labels = [1, 0, 0, 1]\n         accuracy(preds, labels) -> 0.75\n         confusion_counts(preds, labels) -> {\"TP\": 2, \"FP\": 1, \"TN\": 1, \"FN\": 0}\n\nRun: python3 exercises/11_metrics.py\n\"\"\"\n\n\ndef accuracy(preds, labels):\n    pass\n\n\ndef confusion_counts(preds, labels):\n    pass\n",
  "checks": "assert accuracy([1, 0, 1, 1], [1, 0, 0, 1]) == 0.75\nassert accuracy([1, 1], [1, 1]) == 1.0\nassert accuracy([1, 1], [0, 0]) == 0.0\nassert accuracy([], []) == 0.0\nassert accuracy([1], [1, 0]) is None\nassert confusion_counts([1, 0, 1, 1], [1, 0, 0, 1]) == {\"TP\": 2, \"FP\": 1, \"TN\": 1, \"FN\": 0}\nassert confusion_counts([], []) == {\"TP\": 0, \"FP\": 0, \"TN\": 0, \"FN\": 0}\nassert confusion_counts([1], [1, 0]) is None\n# A lazy model that always says 0 on rare positives:\nlabels = [0] * 95 + [1] * 5\nlazy = [0] * 100\nassert accuracy(lazy, labels) == 0.95\nassert confusion_counts(lazy, labels) == {\"TP\": 0, \"FP\": 0, \"TN\": 95, \"FN\": 5}\nprint(\"All checks passed\")\n",
  "tryCode": "confusion_counts([1, 0, 1, 1, 0, 0], [1, 0, 0, 1, 1, 0])"
 },
 {
  "n": 12,
  "id": "12_train_test_split",
  "block": "evaluating",
  "title": "train_test_split",
  "file": "exercises/12_train_test_split.py",
  "why": "A model must be tested on data it has never seen. If the test data leaks into training, the score looks too good and the model fails in real life. Splitting the data first is the basic defence.",
  "task": [
   "Write train_test_split(data, test_ratio, seed). Copy the list. Shuffle the copy with the seed. The test size is int(len(data) * test_ratio). The first items are the test part, the rest are the train part. Return (train, test).",
   "Do NOT change the original list.",
   "Data leakage means: information from the test part gets into training. For example, the same item is in both parts."
  ],
  "exampleIn": "train_test_split(list(range(10)), 0.2, 0)",
  "exampleOut": "(a list of 8 items, a list of 2 items)",
  "predict": "If you shuffle the original list in place, what happens to the person who owns that list?",
  "lookup": [
   "python copy a list",
   "python random.shuffle"
  ],
  "hints": [
   "Some list methods change the list itself and return nothing. Is shuffle one of them?",
   "Make a copy before the shuffle.",
   "Slicing gives you both parts. Think about where the cut is."
  ],
  "library": "scikit-learn: sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)",
  "starter": "\"\"\"Exercise 12: train_test_split\n\nWe train a model on the train part. We test it on the test part.\nThe test part must stay unseen. If test data leaks into training,\nthe score looks better than it really is. This is called data leakage.\nWrite train_test_split(data, test_ratio, seed):\n  - copy the list (do NOT change the original)\n  - shuffle the copy with the given seed\n  - test size = int(len(data) * test_ratio)\n  - the first test-size items are the test part, the rest are the train part\nReturn (train, test).\n\nExample: train_test_split(list(range(10)), 0.2, 0) -> (8 items, 2 items)\n\nRun: python3 exercises/12_train_test_split.py\n\"\"\"\nimport random\n\n\ndef train_test_split(data, test_ratio, seed):\n    pass\n",
  "checks": "data = list(range(10))\noriginal = list(data)\ntrain, test = train_test_split(data, 0.2, 0)\nassert data == original, \"Do not change the original list\"\nassert len(train) == 8 and len(test) == 2\nassert sorted(train + test) == original, \"every item exactly once\"\nassert not set(train) & set(test), \"no item in both parts\"\nassert train_test_split(data, 0.2, 0) == (train, test), \"same seed, same split\"\nsplits = set(tuple(train_test_split(data, 0.5, s)[1]) for s in range(10))\nassert len(splits) > 1, \"different seeds should shuffle differently\"\ntrain, test = train_test_split(data, 0.0, 1)\nassert test == [] and len(train) == 10\ntrain, test = train_test_split([], 0.3, 1)\nassert train == [] and test == []\ntrain, test = train_test_split(data, 0.35, 3)\nassert len(test) == 3 and len(train) == 7\nassert train is not data and test is not data\nprint(\"All checks passed\")\n",
  "tryCode": "train_test_split(list(range(10)), 0.3, 0)"
 },
 {
  "n": 13,
  "id": "13_batches",
  "block": "evaluating",
  "title": "batches",
  "file": "exercises/13_batches.py",
  "why": "Training data is often too big to load at once. Models read it in small groups called batches. A generator makes one batch at a time and does not store all of them.",
  "task": [
   "Write batches(data, size) as a generator. Use yield, not return. Each yield gives a list of size items. The last batch can be smaller.",
   "Do not build all the batches first."
  ],
  "exampleIn": "list(batches([1, 2, 3, 4, 5], 2))",
  "exampleOut": "[[1, 2], [3, 4], [5]]",
  "predict": "What is the difference between return and yield? What does calling a generator function give you?",
  "lookup": [
   "python yield generator",
   "python range with step"
  ],
  "hints": [
   "A function with yield does not run when you call it. It runs when you ask for the next value.",
   "Walk through the data with a step equal to the batch size.",
   "Slicing past the end of a list is safe. It just gives a shorter list."
  ],
  "library": "PyTorch: torch.utils.data.DataLoader(dataset, batch_size=32) gives batches in a loop.",
  "starter": "\"\"\"Exercise 13: batches\n\nBig data does not fit in memory at once. Models read it in small groups\ncalled batches. Write batches(data, size) as a GENERATOR:\nuse yield, not return. Each yield gives a list with size items.\nThe last batch can be smaller. Do not build all batches first.\n\nExample: list(batches([1, 2, 3, 4, 5], 2)) -> [[1, 2], [3, 4], [5]]\n\nRun: python3 exercises/13_batches.py\n\"\"\"\n\n\ndef batches(data, size):\n    pass\n",
  "checks": "import inspect\nassert list(batches([1, 2, 3, 4, 5], 2)) == [[1, 2], [3, 4], [5]]\nassert list(batches([1, 2, 3, 4], 2)) == [[1, 2], [3, 4]]\nassert list(batches([1, 2, 3], 5)) == [[1, 2, 3]]\nassert list(batches([], 3)) == []\nassert list(batches([1, 2, 3], 1)) == [[1], [2], [3]]\ng = batches([1, 2, 3, 4], 2)\nassert inspect.isgenerator(g), \"use yield so batches is a generator\"\nassert next(g) == [1, 2]\nassert next(g) == [3, 4]\ntotal = 0\nfor b in batches(list(range(100)), 8):\n    total += len(b)\nassert total == 100\nprint(\"All checks passed\")\n",
  "tryCode": "list(batches([1, 2, 3, 4, 5, 6, 7], 3))"
 },
 {
  "n": 14,
  "id": "14_dataset",
  "block": "classes",
  "title": "Dataset class",
  "file": "exercises/14_dataset.py",
  "why": "PyTorch asks for a Dataset: an object that knows its length and returns one example by position. Your own class can follow the same rules. This is how libraries share one simple contract.",
  "task": [
   "Write class Dataset with:",
   "__init__(self, items, labels): store both lists.",
   "__len__(self): the number of examples.",
   "__getitem__(self, index): return the tuple (item, label). Negative indexes work like in a list. An index that is too big raises IndexError."
  ],
  "exampleIn": "ds = Dataset([\"cat.png\", \"dog.png\"], [0, 1]); ds[1]",
  "exampleOut": "(\"dog.png\", 1)",
  "predict": "What happens when you write len(x) for your own class? Which method does Python call?",
  "lookup": [
   "python dunder methods __len__ __getitem__",
   "python special methods"
  ],
  "hints": [
   "Special methods have double underscores. Python calls them for you when you use len() or [ ].",
   "Your lists already know how to handle negative and too-big indexes.",
   "Return both pieces together as one tuple."
  ],
  "library": "PyTorch: subclass torch.utils.data.Dataset and write __len__ and __getitem__. Same idea.",
  "starter": "\"\"\"Exercise 14: Dataset class\n\nLibraries like PyTorch use a Dataset: an object that knows its size\nand gives one example by position. Write class Dataset:\n  - __init__(self, items, labels): store both lists\n  - __len__(self): how many examples\n  - __getitem__(self, index): return the tuple (item, label) at that position\nNegative index must work like in a list: ds[-1] is the last example.\nAn index that is too big must raise IndexError.\n\nExample: ds = Dataset([\"cat.png\", \"dog.png\"], [0, 1])\n         len(ds) -> 2     ds[1] -> (\"dog.png\", 1)\n\nRun: python3 exercises/14_dataset.py\n\"\"\"\n\n\nclass Dataset:\n    pass\n",
  "checks": "ds = Dataset([\"cat.png\", \"dog.png\", \"bird.png\"], [0, 1, 2])\nassert len(ds) == 3\nassert ds[0] == (\"cat.png\", 0)\nassert ds[2] == (\"bird.png\", 2)\nassert ds[-1] == (\"bird.png\", 2)\nassert len(Dataset([], [])) == 0\ntry:\n    ds[3]\n    raise AssertionError(\"ds[3] should raise IndexError\")\nexcept IndexError:\n    pass\n# Python can now loop over your object with a plain for loop:\nseen = []\nfor pair in ds:\n    seen.append(pair)\nassert seen == [(\"cat.png\", 0), (\"dog.png\", 1), (\"bird.png\", 2)]\n# Two objects do not share data:\nother = Dataset([1], [9])\nassert len(other) == 1 and len(ds) == 3\nprint(\"All checks passed\")\n",
  "tryCode": "ds = Dataset([\"cat.png\", \"dog.png\", \"bird.png\"], [0, 1, 2])\nds[1]"
 },
 {
  "n": 15,
  "id": "15_nearest_neighbor",
  "block": "classes",
  "title": "NearestNeighbor",
  "file": "exercises/15_nearest_neighbor.py",
  "why": "Nearest neighbor is a real model that needs no training maths. It remembers examples and copies the label of the closest one. It also shows the fit and predict pattern used all over scikit-learn.",
  "task": [
   "Write class NearestNeighbor with fit(self, X, y) and predict(self, x).",
   "fit remembers the points X and the labels y. predict returns the label of the closest point.",
   "Squared distance: for each position take the difference, square it, then add all. We skip the square root. The order of distances stays the same.",
   "Tie: the point first in X wins. If fit was never called, predict returns None."
  ],
  "exampleIn": "fit([[0, 0], [10, 10]], [\"small\", \"big\"]); predict([2, 1])",
  "exampleOut": "\"small\"",
  "predict": "Why can we skip the square root when we only want the closest point?",
  "lookup": [
   "python class attributes self",
   "python min with key"
  ],
  "hints": [
   "fit only stores. Where can an object keep things between two method calls?",
   "Compute one distance per stored point. Keep the best one so far.",
   "Use a strict 'smaller than' when you compare, so the first point wins a tie."
  ],
  "library": "scikit-learn: KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)",
  "starter": "\"\"\"Exercise 15: NearestNeighbor\n\nA nearest-neighbor model has no training maths. It remembers examples.\nTo predict, it finds the closest remembered example and gives its label.\nDistance: squared distance between two points =\n  take the difference in each position, square it, add all.\n(We skip the square root. The order of distances stays the same.)\n\nclass NearestNeighbor:\n  - fit(self, X, y): remember X (list of points) and y (list of labels)\n  - predict(self, x): return the label of the closest point in X.\n    If two points are equally close, the one that comes first in X wins.\n    If fit was never called, return None.\n\nExample: model = NearestNeighbor()\n         model.fit([[0, 0], [10, 10]], [\"small\", \"big\"])\n         model.predict([2, 1]) -> \"small\"\n\nRun: python3 exercises/15_nearest_neighbor.py\n\"\"\"\n\n\nclass NearestNeighbor:\n    pass\n",
  "checks": "model = NearestNeighbor()\nassert model.predict([1, 1]) is None, \"predict before fit gives None\"\nmodel.fit([[0, 0], [10, 10]], [\"a\", \"b\"])\nassert model.predict([1, 1]) == \"a\"\nassert model.predict([9, 8]) == \"b\"\nassert model.predict([5, 5]) == \"a\", \"tie: first point wins\"\nmodel.fit([[0], [4], [9]], [\"x\", \"y\", \"z\"])\nassert model.predict([3]) == \"y\"\nassert model.predict([100]) == \"z\"\nassert model.predict([-50]) == \"x\"\nother = NearestNeighbor()\nother.fit([[1, 2, 3]], [\"only\"])\nassert other.predict([9, 9, 9]) == \"only\"\nassert model.predict([4]) == \"y\", \"models do not share memory\"\nprint(\"All checks passed\")\n",
  "tryCode": "model = NearestNeighbor()\nmodel.fit([[0, 0], [10, 10], [0, 9]], [\"a\", \"b\", \"c\"])\nmodel.predict([1, 8])"
 }
];
