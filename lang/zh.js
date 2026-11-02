window.I18N = window.I18N || {};
window.I18N.zh = {
  subtitle: "15 个小型 Python 练习，帮你为学习 NumPy、pandas、scikit-learn 和 PyTorch 做准备。",
  blocks: {
    numbers: { title: "第 1 部分：数字", note: "为 NumPy 做准备" },
    text: { title: "第 2 部分：文本", note: "为分词器和语言模型做准备" },
    evaluating: { title: "第 3 部分：评估模型", note: "为 scikit-learn 做准备" },
    classes: { title: "第 4 部分：像库一样工作的类", note: "为 PyTorch 和 scikit-learn 做准备" }
  },
  ui: {
    doneCount: "已完成 {n}/{total}", contents: "目录", skip: "跳到正文", design: "设计思路", repo: "GitHub 源码", langLabel: "语言",
    progress: "进度：{n}/{total}", start: "从练习 1 开始", cont: "继续：{title}", allDone: "全部完成。复习练习 1",
    howTo: "怎么练习",
    steps: ["读题。先在心里回答“先预测”的问题。", "点击“运行示例”。图片会显示输入和输出。", "在编辑器里写代码。使用“查一查”里的关键词。卡住时再打开提示。", "点击“检查我的代码”。每项检查都会显示通过或失败，以及你得到的结果和期望的结果。", "所有检查通过后，练习会被标记为完成，并显示“与库的联系”。"],
    localNote: "你的代码和进度只保存在这个浏览器里。Python 在页面内运行。不会向服务器发送任何内容。",
    resetAll: "重置所有进度和已保存的代码", confirmReset: "要删除这个浏览器里的所有进度和已保存的代码吗？",
    exOf: "练习 {n} / {total}", why: "为什么这在 AI 中很重要", task: "任务", exIn: "示例输入", exOut: "示例输出",
    predict: "先预测", predictNote: "先写下你的答案。然后点击“运行示例”并对比。", lookup: "查一查",
    hints: "提示", hint: "提示 {n}", lib: "与库的联系", libLocked: "标记为完成后才会显示。请先自己解题。", markDone: "标记为完成",
    bench: "工作区", copy: "复制初始代码", copied: "已复制", copyFail: "复制失败", reset: "恢复初始代码", confirmStarter: "要用初始代码替换你的代码吗？",
    gh: "GitHub 上的文件", edNote: "Tab 键缩进。按 Esc，再按 Tab，可离开编辑器。Ctrl+Enter 运行示例。Ctrl+Shift+Enter 检查代码。",
    runEx: "运行示例", check: "检查我的代码", running: "运行中...", tryTitle: "要运行的示例（可以修改）", checksTitle: "检查",
    py_idle: "Python：未启动", py_loading: "Python：加载中（约 10 MB，仅第一次）...", py_ready: "Python：已就绪",
    py_failed: "Python：这里无法使用。请在你的电脑上运行该文件。",
    errTitle: "Python 因错误而停止", errLine: "（{where}，第 {n} 行）", whereCode: "你的代码", whereExample: "示例",
    unavail: "这个浏览器无法加载 Python（没有网络，或 CDN 被屏蔽）。你仍然可以做练习：打开仓库里的文件，在你的电脑上运行 python3。",
    timeout: "8 秒后已停止。也许有循环永远不会结束？检查你的 while 循环。",
    allPassed: "全部 {n} 项检查通过。", somePassed: "{n} 项检查中通过了 {ok} 项。", pass: "通过", fail: "失败",
    gives: "你的代码得到", wants: "检查期望 ({op})", printed: "打印输出", returns: "你的函数返回", output: "输出", input: "输入：{name}",
    nothing: "没有可显示的内容。请在最后一行放一个表达式，例如函数调用。",
    marked: "练习已标记为完成。", libPrefix: "与库的联系：", next: "下一个：{title}", aria_editor: "Python 代码编辑器", aria_snip: "要运行的示例代码",
    v_object: "对象", v_none: "空 (None)", v_text: "文本", v_bool: "True 或 False", v_number: "数字", v_emptyList: "空列表", v_listNums: "含 {n} 个数字的列表",
    v_pairs: "{n} 对（词，次数）", v_grid: "网格：{r} 行 x {c} 列", v_ragged: "{n} 个长度不同的列表", v_listItems: "含 {n} 项的列表",
    v_emptyDict: "空字典", v_dictKeys: "含 {n} 个键的字典", v_matrix: "表格：行 = 前一个词，列 = 后一个词，数字 = 次数", v_corner: "前词 \\ 后词", v_value: "值", v_key: "键"
  },
  ex: {
    "01_add_vectors": {
      why: "很多模型使用向量：一列数字。两个向量相加是最常见的步骤之一。NumPy 一行代码就能对整个数组完成它。",
      task: ["编写 add_vectors(a, b)。返回一个新列表，每一项是 a[i] + b[i]。", "如果两个列表长度不同，返回 None。不要修改 a 和 b。"],
      predict: "add_vectors([1, 2], [1, 2, 3]) 应该返回什么？先自己决定，再看 docstring。",
      hints: ["你需要在同一位置同时访问两个列表。哪个工具可以同时遍历两个列表？", "先创建一个空列表。然后为每一对添加一个结果。", "在循环之前检查长度。提前返回是可以的。"],
      library: "用 NumPy 数组：a + b。库会逐项帮你相加。"
    },
    "02_dot": {
      why: "类似神经元的单元会用权重混合它的输入。这种混合就是点积。它是大多数神经网络内部的主要运算。",
      task: ["编写 dot(a, b)。把每一对相乘 a[i] * b[i]。然后把所有结果相加。", "把 a 看作权重，把 b 看作输入。权重表示每个输入有多重要。答案是一个数：加权和。", "长度不同：返回 None。空列表：返回 0。"],
      predict: "在 dot([1, 0, 1], [10, 99, 20]) 中，0 对值 99 起什么作用？",
      hints: ["这和练习 01 很像。区别是什么：结果是列表，还是一个数？", "保留一个累计总和。从零开始。", "权重为 0 表示：这个输入被忽略。在纸上验证这个想法。"],
      library: "对两个一维数组，np.dot(a, b) 得到同样的数。"
    },
    "03_matrix_shape": {
      why: "AI 中的数据常常是一张数字表：矩阵。动手之前先检查它的形状 (shape)。形状错误是 NumPy 和 PyTorch 代码中最常见的错误。",
      task: ["矩阵是由行组成的列表。编写 shape(matrix)，返回 (行数, 列数)。对 [] 返回 (0, 0)。", "编写 transpose(matrix)，返回一个新矩阵，其中行变成列。原矩阵不能改变。"],
      predict: "一个矩阵的形状是 (2, 3)。转置后形状是什么？写代码之前先说出来。",
      hints: ["形状只需要两个长度：列表的长度和它第一行的长度。", "在新矩阵中，第一行是每个旧行的第一个元素。", "用两个循环。外层循环数列。内层循环数行。"],
      library: "用 NumPy：m.shape 和 m.T"
    },
    "04_flatten_reshape": {
      why: "一张图片是一个像素网格。很多模型想要一个长长的列表。不改变数据而改变形状叫 reshape。你会经常用到它。",
      task: ["编写 flatten(image)：按行把网格变成一个列表。", "编写 reshape(values, rows, cols)：把扁平列表变成网格。如果 rows * cols 不等于值的个数，返回 None。", "用 3x3 的图片来测试你的想法。"],
      predict: "把网格展平再恢复形状，总能得到同一个网格吗？什么时候不能？",
      hints: ["flatten：访问每一行，再访问该行的每个值。", "reshape：先检查大小是否匹配。然后把列表切成相等的小段。", "第 i 段从 i * cols 开始。找出它在哪里结束。"],
      library: "用 NumPy：image.reshape(3, 3)。结果相同，只需一次调用。"
    },
    "05_scale_0_1": {
      why: "特征的大小可能差别很大：年龄 30，工资 50000。当所有特征处于相近的尺度时，模型学得更好。最小-最大缩放是最简单的方法。",
      task: ["编写 scale_0_1(values)。对每个值计算 (值 - 最小值) / (最大值 - 最小值)。", "用话说：这个值离最小值有多远，占整个范围的几分之几？最小值变成 0.0。最大值变成 1.0。", "如果所有值都相等，范围是 0。不能除以 0。对每个值返回 0.0。对 [] 返回 []。"],
      predict: "如果不处理这种情况，scale_0_1([7, 7, 7]) 会怎样？说出你预期的错误。",
      hints: ["在循环之前，只找一次最小值和最大值。", "范围是最大值减最小值。什么时候它是零？", "在除法之前处理空列表和值全相等的情况。"],
      library: "scikit-learn：MinMaxScaler().fit_transform(X) 对每一列做同样的事。"
    },
    "06_tokenize": {
      why: "语言模型无法直接阅读原始文本。首先要把文本切成叫做 token 的小片段。真正的分词器更聪明，但想法从这里开始。",
      task: ["编写 tokenize(text)。把字母变成小写。删除所有标点符号。拆分成单词。", "多余的空格不能产生空单词。返回单词列表。"],
      predict: "你预期 tokenize(\"It's me.\") 返回什么？其中一个词可能会让你意外。",
      hints: ["标准库里有一个现成的、包含所有标点符号的字符串。", "可以先删标点，也可以后删。顺序会改变结果吗？", "不带参数的 split 能处理多个空格和换行。"],
      library: "真正的库（例如 NLTK 或 Hugging Face）都有分词器。你写的是它们最简单的想法。"
    },
    "07_top_words": {
      why: "统计单词是许多文本方法的第一步。它能显示文本讲的是什么。它也说明了为什么罕见词对模型是个问题。",
      task: ["编写 top_words(tokens, n)。返回 n 个最常见单词的 (单词, 次数) 元组列表。最常见的排在最前面。", "如果两个单词次数相同，按字母表顺序靠前的排在前面。", "如果 n 大于不同单词的数量，返回全部。"],
      predict: "有两个单词都出现了 2 次。在你的列表里哪个应该排第一，为什么？",
      hints: ["先用字典统计单词。然后再考虑排序。", "可以按多个条件排序：元组可以当作键。", "要让次数从大到小、单词从 A 到 Z，可以用次数的符号做一个小技巧。"],
      library: "collections.Counter(tokens).most_common(n)"
    },
    "08_vocab": {
      why: "模型使用数字，而不是单词。词表给每个单词一个 id。不在词表里的单词都会变成一个特殊 token。真正的分词器也是这样工作的。",
      task: ["编写 build_vocab(tokens)：返回字典 {单词: id}。token \"<unk>\" 的 id 始终是 0。其他单词按第一次出现的顺序获得 id 1、2、3 ……。每个单词只出现一次。", "编写 encode(tokens, vocab)：返回 id 列表。不在 vocab 中的单词得到 \"<unk>\" 的 id。", "编写 decode(ids, vocab)：返回单词列表。未知的 id 变成 \"<unk>\"。"],
      predict: "你对包含新单词的文本编码，然后再解码。能得到同样的文本吗？为什么？",
      hints: ["下一个空闲 id 始终是字典当前的大小。", "对 encode，向字典查单词，但在找不到时给出默认值。", "对 decode，你需要反向字典：从 id 到单词。"],
      library: "Hugging Face 的分词器同样保存 vocab 和未知 token。"
    },
    "09_bigrams": {
      why: "二元模型（bigram）根据上一个词猜下一个词。它是一个只由计数构成的微型语言模型。大模型用丰富得多的方式完成同样的工作。",
      task: ["编写 bigram_counts(tokens)。返回字典的字典：counts[first][second] 表示 second 紧跟在 first 后面出现了多少次。只有后面有词的单词才会成为键。", "编写 predict_next(counts, word)。返回计数最高的后续单词。如果并列，返回字母表中靠前的那个。对未知单词返回 None。"],
      predict: "在 \"the cat sat on the mat the cat ran\" 中，\"the\" 后面最常出现的是什么？",
      hints: ["看相邻的词对：一个词和它后面的词。怎样才能组成这样的词对？", "如果第一个词是新的，在里面计数之前，它需要自己的内层字典。", "计数模式：新计数 = 旧计数（或 0）+ 1。"],
      library: "这就是 Karpathy 的 makemore（二元模型）的思路，只是用的是字母。可以看他的视频系列“Neural Networks: Zero to Hero”。"
    },
    "10_generate": {
      why: "语言模型写文本的方式是：选一个词，再选下一个词，一遍又一遍。选择是随机的，但遵循概率。这叫做采样（sampling）。",
      task: ["编写 generate(counts, start, n, seed)。使用与练习 09 相同的 counts 字典。", "从单词 start 开始。最多重复 n 次：随机选择下一个单词。计数越高，被选中的机会越大。把它加入结果。如果当前单词没有后续词，就提前停止。", "先调用 random.seed(seed)，这样相同的种子会得到相同的文本。返回单词列表，包含 start。"],
      predict: "如果一个后续词的计数是 1000，另一个是 1，第二个多久会被选中一次？尝试 1000 次大约多少次？",
      hints: ["你需要一个能按权重从列表中选择的函数。计数就是权重。", "被选中的单词成为新的当前单词。重复。", "种子应该设置在哪里：循环之前，还是循环里面？"],
      library: "大型语言模型同样按概率采样下一个 token。一个叫 temperature 的设置会改变选择的冒险程度。"
    },
    "11_metrics": {
      why: "一个模型有多好？准确率 (accuracy) 是人们最先看的数字。但它可能会骗人。混淆表的四个计数能显示模型犯的是哪种错误。",
      task: ["标签是 1（是）或 0（否）。编写 accuracy(preds, labels)：预测正确的比例，范围 0 到 1。", "编写 confusion_counts(preds, labels)：返回含有 TP（预测 1，实际 1）、FP（预测 1，实际 0）、TN（预测 0，实际 0）、FN（预测 0，实际 1）的字典。", "长度不同：返回 None。空列表：accuracy 为 0.0。"],
      predict: "一次测试有 95 个“否”和 5 个“是”。一个模型总是回答“否”。它的 accuracy 是多少？",
      hints: ["accuracy 是正确预测数除以全部预测数。", "每一对值恰好属于四种情况之一。", "第一个字母 T 或 F：模型对了吗？第二个字母 P 或 N：它说了什么？"],
      library: "scikit-learn：sklearn.metrics.accuracy_score 和 sklearn.metrics.confusion_matrix"
    },
    "12_train_test_split": {
      why: "模型必须在它从未见过的数据上测试。如果测试数据泄漏进训练，分数会好得不真实，模型在现实中会失败。先划分数据是最基本的防御。",
      task: ["编写 train_test_split(data, test_ratio, seed)。复制列表。用给定的种子打乱副本。测试集大小是 int(len(data) * test_ratio)。前面的项目是测试部分，其余是训练部分。返回 (train, test)。", "不要修改原始列表。", "数据泄漏 (data leakage) 的意思是：测试部分的信息进入了训练。例如，同一个项目同时出现在两个部分。"],
      predict: "如果你直接在原列表上打乱，拥有这个列表的人会遇到什么问题？",
      hints: ["有些列表方法会修改列表本身，并且不返回任何东西。shuffle 是其中之一吗？", "在打乱之前先复制一份。", "切片能给你两个部分。想想切在哪里。"],
      library: "scikit-learn：sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)"
    },
    "13_batches": {
      why: "训练数据常常太大，无法一次装入内存。模型会分成叫做批次 (batch) 的小组来读取。生成器每次产生一个批次，不会把所有批次都存起来。",
      task: ["把 batches(data, size) 写成生成器。使用 yield，不要用 return。每次 yield 给出含 size 个项目的列表。最后一个批次可以更小。", "不要预先构建所有批次。"],
      predict: "return 和 yield 有什么区别？调用生成器函数会得到什么？",
      hints: ["带 yield 的函数在你调用它时不会运行。当你要下一个值时才运行。", "以批次大小为步长遍历数据。", "对列表切片超过末尾是安全的。只会得到更短的列表。"],
      library: "PyTorch：torch.utils.data.DataLoader(dataset, batch_size=32) 在循环中给出批次。"
    },
    "14_dataset": {
      why: "PyTorch 需要一个 Dataset：一个知道自己大小、并能按位置返回一个样本的对象。你自己的类也可以遵守同样的规则。库就是这样共享一个简单的约定。",
      task: ["编写类 Dataset，包含：", "__init__(self, items, labels)：保存两个列表。", "__len__(self)：样本数量。", "__getitem__(self, index)：返回元组 (item, label)。负数索引的行为与列表相同。过大的索引要抛出 IndexError。"],
      predict: "对你自己的类写 len(x) 时会发生什么？Python 会调用哪个方法？",
      hints: ["特殊方法带有双下划线。当你使用 len() 或 [ ] 时，Python 会替你调用它们。", "你的列表已经会处理负数索引和过大的索引。", "把两部分一起作为一个元组返回。"],
      library: "PyTorch：继承 torch.utils.data.Dataset，并编写 __len__ 和 __getitem__。思路相同。"
    },
    "15_nearest_neighbor": {
      why: "最近邻是一个真正的模型，不需要训练数学。它记住样本，并复制最近样本的标签。它还展示了在整个 scikit-learn 中都会用到的 fit 和 predict 模式。",
      task: ["编写类 NearestNeighbor，包含 fit(self, X, y) 和 predict(self, x)。", "fit 记住点 X 和标签 y。predict 返回最近点的标签。", "平方距离：在每个位置取差，求平方，然后全部相加。我们省略平方根。距离的顺序保持不变。", "并列：在 X 中排在前面的点获胜。如果从未调用 fit，predict 返回 None。"],
      predict: "如果只想要最近的点，为什么可以省略平方根？",
      hints: ["fit 只负责存储。对象在两次方法调用之间可以把东西放在哪里？", "为每个已存储的点计算一个距离。记住目前最好的那个。", "比较时用严格的“小于”，这样并列时第一个点获胜。"],
      library: "scikit-learn：KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)"
    }
  }
};
window.I18N.zh.ui.extra = "额外挑战（可选）";
(function(c){ Object.keys(c).forEach(function(id){ window.I18N.zh.ex[id].challenge = c[id]; }); })({
 "01_add_vectors": "再写一个 sub_vectors(a, b)。把一个向量加上它自己，再减去它，会得到什么？",
 "02_dot": "用 dot 求向量的长度：取向量与自身的 dot。运行前先预测 [3, 4] 的答案。",
 "03_matrix_shape": "转置一个 1x3 矩阵和一个 3x1 矩阵。得到什么形状？转置两次总是得到原矩阵吗？",
 "04_flatten_reshape": "只用 flatten 和 reshape 的思路，把图片左右翻转。步骤的顺序是什么？",
 "05_scale_0_1": "缩放到 -1 到 1 的范围，而不是 0 到 1。需要做什么小改动？",
 "06_tokenize": "让 tokenize 保留 \"it's\" 中的撇号。你的规则怎么变？",
 "07_top_words": "同时返回每个单词在全文中所占的比例（次数除以总数）。哪些单词占了你自己句子的 50%？",
 "08_vocab": "统计 encode 遇到了多少个未知单词。一个函数怎样同时返回 id 和这个计数？",
 "09_bigrams": "返回最常见的 2 个后续词。如果一个词只有一个后续词怎么办？",
 "10_generate": "用你自己的句子和 5 个不同的种子生成 5 段文本。哪些词重复最多？为什么？",
 "11_metrics": "添加 precision（TP 除以 TP + FP）。它什么时候无定义？那时你返回什么？",
 "12_train_test_split": "让训练集和测试集中 0 和 1 标签的比例保持一致。为什么简单的打乱在非常小的数据上可能失败？",
 "13_batches": "添加一个 drop_last 选项，跳过较小的最后一个批次。这在训练中什么时候有用？",
 "14_dataset": "添加一个方法，把前 n 个样本作为新的 Dataset 返回。它对负数 n 有效吗？",
 "15_nearest_neighbor": "让模型在 k 个最近点中投票（k = 3）。票数相同时会发生什么？"
});
