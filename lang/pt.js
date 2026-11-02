window.I18N = window.I18N || {};
window.I18N.pt = {
  subtitle: "15 pequenos exercícios de Python que preparam você para NumPy, pandas, scikit-learn e PyTorch.",
  blocks: {
    numbers: { title: "Bloco 1: Números", note: "Prepara para o NumPy" },
    text: { title: "Bloco 2: Texto", note: "Prepara para tokenizadores e modelos de linguagem" },
    evaluating: { title: "Bloco 3: Avaliar modelos", note: "Prepara para o scikit-learn" },
    classes: { title: "Bloco 4: Classes que funcionam como bibliotecas", note: "Prepara para PyTorch e scikit-learn" }
  },
  ui: {
    doneCount: "{n}/{total} concluídos", contents: "Conteúdo", skip: "Ir para o conteúdo", design: "Como foi projetado", repo: "Código no GitHub", langLabel: "Idioma",
    progress: "Progresso: {n}/{total}", start: "Começar pelo exercício 1", cont: "Continuar: {title}", allDone: "Tudo concluído. Rever o exercício 1",
    howTo: "Como trabalhar",
    steps: ["Leia a tarefa. Responda mentalmente à pergunta «Preveja primeiro».", "Clique em «Executar exemplo». As imagens mostram o que entra e o que sai.", "Escreva seu código no editor. Use os termos de «Pesquise isto». Abra uma dica só se estiver travado.", "Clique em «Verificar meu código». Cada teste mostra sucesso ou falha, com o que você obteve e o que era esperado.", "Quando todos os testes passam, o exercício é marcado como concluído e a «Ligação com a biblioteca» aparece."],
    localNote: "Seu código e seu progresso ficam apenas neste navegador. O Python roda dentro da página. Nada é enviado a um servidor.",
    resetAll: "Apagar todo o progresso e o código salvo", confirmReset: "Apagar todo o progresso e o código salvo neste navegador?",
    exOf: "Exercício {n} de {total}", why: "Por que isso importa em IA", task: "A tarefa", exIn: "Entrada de exemplo", exOut: "Saída de exemplo",
    predict: "Preveja primeiro", predictNote: "Escreva sua resposta. Depois clique em «Executar exemplo» e compare.", lookup: "Pesquise isto",
    hints: "Dicas", hint: "Dica {n}", lib: "Ligação com a biblioteca", libLocked: "Oculto até você marcar o exercício como concluído. Resolva-o primeiro.", markDone: "Marcar como concluído",
    bench: "Área de trabalho", copy: "Copiar código inicial", copied: "Copiado", copyFail: "Falha ao copiar", reset: "Voltar ao código inicial", confirmStarter: "Substituir seu código pelo código inicial?",
    gh: "Arquivo no GitHub", edNote: "Tab recua o texto. Pressione Esc e depois Tab para sair do editor. Ctrl+Enter executa o exemplo. Ctrl+Shift+Enter verifica seu código.",
    runEx: "Executar exemplo", check: "Verificar meu código", running: "Executando...", tryTitle: "Exemplo para executar (você pode mudar)", checksTitle: "Testes",
    py_idle: "Python: não iniciado", py_loading: "Python: carregando (cerca de 10 MB, só na primeira vez)...", py_ready: "Python: pronto",
    py_failed: "Python: indisponível aqui. Execute o arquivo no seu computador.",
    errTitle: "O Python parou com um erro", errLine: "(linha {n} de {where})", whereCode: "seu código", whereExample: "o exemplo",
    unavail: "O Python não carregou neste navegador (sem internet ou CDN bloqueado). Você ainda pode fazer o exercício: abra o arquivo do repositório e execute python3 no seu computador.",
    timeout: "Parado após 8 segundos. Talvez um laço nunca termine? Verifique seu while.",
    allPassed: "Todos os {n} testes passaram.", somePassed: "{ok} de {n} testes passaram.", pass: "ok", fail: "falha",
    gives: "seu código dá", wants: "o teste espera ({op})", printed: "Saída impressa", returns: "sua função retorna", output: "Saída", input: "Entrada: {name}",
    nothing: "Nada para mostrar. Coloque uma expressão na última linha, por exemplo uma chamada de função.",
    marked: "Exercício marcado como concluído.", libPrefix: "Ligação com a biblioteca:", next: "Próximo: {title}", aria_editor: "Editor de código Python", aria_snip: "Código de exemplo para executar",
    v_object: "objeto", v_none: "nada (None)", v_text: "texto", v_bool: "True ou False", v_number: "número", v_emptyList: "lista vazia", v_listNums: "lista de {n} números",
    v_pairs: "{n} pares (palavra, contagem)", v_grid: "grade: {r} linhas x {c} colunas", v_ragged: "{n} listas de tamanhos diferentes", v_listItems: "lista de {n} itens",
    v_emptyDict: "dicionário vazio", v_dictKeys: "dicionário com {n} chaves", v_matrix: "tabela: linha = primeira palavra, coluna = próxima palavra, número = contagem", v_corner: "primeira \\ próxima", v_value: "valor", v_key: "chave"
  },
  ex: {
    "01_add_vectors": {
      why: "Muitos modelos trabalham com vetores: listas de números. Somar dois vetores é um dos passos mais comuns. O NumPy faz isso para um array inteiro em uma linha.",
      task: ["Escreva add_vectors(a, b). Ela retorna uma lista NOVA em que cada item é a[i] + b[i].", "Se as listas tiverem tamanhos diferentes, retorne None. Não altere a nem b."],
      predict: "O que add_vectors([1, 2], [1, 2, 3]) deve retornar? Decida e depois confira o docstring.",
      hints: ["Você precisa percorrer as duas listas na mesma posição. Que ferramenta anda por duas listas juntas?", "Crie primeiro uma lista vazia. Depois adicione um resultado para cada par.", "Verifique os tamanhos antes do laço. Retornar cedo é válido."],
      library: "Com arrays do NumPy: a + b. A biblioteca soma item por item para você."
    },
    "02_dot": {
      why: "Uma unidade parecida com um neurônio mistura suas entradas com pesos. Essa mistura é um produto escalar. É a operação principal dentro da maioria das redes neurais.",
      task: ["Escreva dot(a, b). Multiplique cada par a[i] * b[i]. Depois some todos os resultados.", "Pense em a como pesos e em b como entradas. O peso diz o quanto cada entrada importa. A resposta é um número: uma soma ponderada.", "Tamanhos diferentes: retorne None. Listas vazias: retorne 0."],
      predict: "Em dot([1, 0, 1], [10, 99, 20]), o que o 0 faz com o valor 99?",
      hints: ["Parece o exercício 01. O que muda: uma lista como resultado ou um só número?", "Mantenha um total acumulado. Comece em zero.", "Um peso 0 significa: essa entrada é ignorada. Teste a ideia no papel."],
      library: "np.dot(a, b) dá o mesmo número para dois arrays 1-D."
    },
    "03_matrix_shape": {
      why: "Dados em IA costumam ser uma tabela de números: uma matriz. Antes de qualquer coisa, você confere seu formato (shape). Formatos errados são o erro mais comum em código NumPy e PyTorch.",
      task: ["Uma matriz é uma lista de linhas. Escreva shape(matrix) que retorna (linhas, colunas). Para [] retorne (0, 0).", "Escreva transpose(matrix) que retorna uma matriz nova em que as linhas viram colunas. A original não pode mudar."],
      predict: "Uma matriz tem formato (2, 3). Qual é o formato depois da transposição? Diga antes de programar.",
      hints: ["O formato precisa só de dois tamanhos: o da lista e o da sua primeira linha.", "Na matriz nova, a primeira linha é o primeiro item de cada linha antiga.", "Use dois laços. O externo conta colunas. O interno conta linhas."],
      library: "Com NumPy: m.shape e m.T"
    },
    "04_flatten_reshape": {
      why: "Uma imagem é uma grade de pixels. Muitos modelos querem uma única lista longa. Mudar o formato sem mudar os dados chama-se reshape. Você vai usar isso o tempo todo.",
      task: ["Escreva flatten(image): transforme a grade em uma lista, linha por linha.", "Escreva reshape(values, rows, cols): transforme uma lista plana em uma grade. Se rows * cols não for o número de valores, retorne None.", "Use uma imagem 3x3 para testar suas ideias."],
      predict: "Se você achatar uma grade e depois refizer o formato, sempre obtém a mesma grade? Quando não?",
      hints: ["flatten: visite cada linha e depois cada valor dessa linha.", "reshape: primeiro verifique se o tamanho cabe. Depois corte a lista em pedaços iguais.", "O pedaço número i começa em i * cols. Descubra onde termina."],
      library: "Com NumPy: image.reshape(3, 3). O resultado é o mesmo, em uma chamada."
    },
    "05_scale_0_1": {
      why: "As características podem ter tamanhos muito diferentes: idade 30, salário 50000. Os modelos aprendem melhor quando todas estão numa escala parecida. A escala min-max é o jeito mais simples.",
      task: ["Escreva scale_0_1(values). Para cada valor calcule (valor - menor) / (maior - menor).", "Em palavras: a que distância o valor está do menor, como parte do intervalo total? O menor vira 0.0. O maior vira 1.0.", "Se todos os valores forem iguais, o intervalo é 0. Não dá para dividir por 0. Retorne 0.0 para cada valor. Para [] retorne []."],
      predict: "O que acontece com scale_0_1([7, 7, 7]) se você não tratar esse caso? Diga que erro espera.",
      hints: ["Ache o menor e o maior valor uma só vez, antes do laço.", "O intervalo é o maior menos o menor. Quando ele é zero?", "Trate a lista vazia e o caso de valores iguais antes de dividir."],
      library: "scikit-learn: MinMaxScaler().fit_transform(X) faz o mesmo para cada coluna."
    },
    "06_tokenize": {
      why: "Um modelo de linguagem não consegue ler texto bruto. Primeiro o texto é cortado em pedaços pequenos chamados tokens. Tokenizadores reais são mais inteligentes, mas a ideia começa aqui.",
      task: ["Escreva tokenize(text). Passe as letras para minúsculas. Remova toda pontuação. Divida em palavras.", "Espaços extras não devem criar palavras vazias. Retorne a lista de palavras."],
      predict: "O que você espera de tokenize(\"It's me.\")? Uma das palavras pode surpreender.",
      hints: ["Na biblioteca padrão há uma string pronta com toda a pontuação.", "Você pode remover a pontuação antes ou depois. A ordem muda o resultado?", "split sem argumento lida com muitos espaços e quebras de linha."],
      library: "Bibliotecas reais (como NLTK ou Hugging Face) têm tokenizadores. O seu é a ideia mais simples deles."
    },
    "07_top_words": {
      why: "Contar palavras é o primeiro passo de muitos métodos de texto. Mostra sobre o que o texto é. Também mostra por que palavras raras são um problema para os modelos.",
      task: ["Escreva top_words(tokens, n). Retorne uma lista de tuplas (palavra, contagem) com as n palavras mais comuns. As mais comuns primeiro.", "Se duas palavras têm a mesma contagem, vem primeiro a que aparece antes no alfabeto.", "Se n for maior que o número de palavras diferentes, retorne todas."],
      predict: "Duas palavras aparecem 2 vezes cada. Qual deve vir primeiro na sua lista, e por quê?",
      hints: ["Primeiro conte as palavras em um dicionário. Depois pense em ordenar.", "Dá para ordenar por mais de uma coisa: uma tupla serve como chave.", "Para ordenar do maior para o menor pela contagem, mas de A a Z pela palavra, use um truque com o sinal da contagem."],
      library: "collections.Counter(tokens).most_common(n)"
    },
    "08_vocab": {
      why: "Modelos trabalham com números, não com palavras. Um vocabulário dá a cada palavra um id. Palavras que não estão no vocabulário viram um token especial. É assim que os tokenizadores reais também funcionam.",
      task: ["Escreva build_vocab(tokens): retorne um dicionário {palavra: id}. O token \"<unk>\" sempre tem id 0. As outras palavras recebem ids 1, 2, 3 ... na ordem da primeira aparição. Cada palavra aparece uma vez.", "Escreva encode(tokens, vocab): uma lista de ids. Uma palavra que não está em vocab recebe o id de \"<unk>\".", "Escreva decode(ids, vocab): uma lista de palavras. Um id desconhecido vira \"<unk>\"."],
      predict: "Você codifica um texto com uma palavra nova e depois decodifica de volta. Obtém o mesmo texto? Por quê?",
      hints: ["O próximo id livre é sempre o tamanho atual do dicionário.", "Para encode, peça a palavra ao dicionário, mas dê um valor padrão quando faltar.", "Para decode você precisa do dicionário inverso: de id para palavra."],
      library: "Os tokenizadores do Hugging Face também guardam um vocab e um token desconhecido."
    },
    "09_bigrams": {
      why: "Um modelo de bigramas adivinha a próxima palavra a partir da última. É um modelo de linguagem minúsculo feito só de contagens. Modelos grandes fazem o mesmo trabalho de um jeito muito mais rico.",
      task: ["Escreva bigram_counts(tokens). Retorne um dicionário de dicionários: counts[first][second] é quantas vezes second veio logo depois de first. Só palavras que têm seguinte viram chaves.", "Escreva predict_next(counts, word). Retorne a palavra seguinte com a maior contagem. Em empate, retorne a primeira no alfabeto. Para palavra desconhecida, retorne None."],
      predict: "Em \"the cat sat on the mat the cat ran\", o que mais vem depois de \"the\"?",
      hints: ["Olhe para pares de vizinhas: a palavra e a seguinte. Como formar esses pares?", "Se a primeira palavra é nova, ela precisa do seu próprio dicionário interno antes de contar nele.", "Padrão de contagem: nova contagem = contagem antiga (ou 0) + 1."],
      library: "Esta é a ideia do makemore de Karpathy (modelo de bigramas), mas com letras. Veja a série de vídeos «Neural Networks: Zero to Hero»."
    },
    "10_generate": {
      why: "Um modelo de linguagem escreve texto escolhendo uma palavra, depois a próxima, de novo e de novo. A escolha é aleatória, mas segue probabilidades. Isso se chama amostragem (sampling).",
      task: ["Escreva generate(counts, start, n, seed). Use um dicionário counts como no exercício 09.", "Comece com a palavra start. Repita até n vezes: escolha a próxima palavra ao acaso. Contagem maior significa mais chance. Adicione-a ao resultado. Se a palavra atual não tiver seguintes, pare antes.", "Chame random.seed(seed) primeiro, para que a mesma semente dê o mesmo texto. Retorne a lista de palavras, incluindo start."],
      predict: "Se um seguinte tem contagem 1000 e outro 1, com que frequência o segundo será escolhido? Cerca de quantas vezes em 1000 tentativas?",
      hints: ["Você precisa de uma função que escolhe de uma lista com pesos. As contagens são os pesos.", "A palavra escolhida vira a nova palavra atual. Repita.", "Onde a semente deve ser definida: antes do laço ou dentro dele?"],
      library: "Grandes modelos de linguagem também amostram o próximo token por probabilidades. Um ajuste chamado temperature muda o quão arriscada é a escolha."
    },
    "11_metrics": {
      why: "Quão bom é um modelo? A acurácia (accuracy) é o primeiro número que se olha. Mas ela pode enganar. As quatro contagens de uma tabela de confusão mostram que tipo de erro o modelo comete.",
      task: ["Os rótulos são 1 (sim) ou 0 (não). Escreva accuracy(preds, labels): a parte das previsões corretas, de 0 a 1.", "Escreva confusion_counts(preds, labels): um dicionário com TP (disse 1, verdade 1), FP (disse 1, verdade 0), TN (disse 0, verdade 0), FN (disse 0, verdade 1).", "Tamanhos diferentes: retorne None. Listas vazias: a acurácia é 0.0."],
      predict: "Um teste tem 95 «não» e 5 «sim». Um modelo sempre diz «não». Qual é a acurácia dele?",
      hints: ["Acurácia é previsões corretas divididas por todas as previsões.", "Cada par de valores pertence a exatamente um de quatro casos.", "Primeira letra T ou F: o modelo acertou? Segunda letra P ou N: o que ele disse?"],
      library: "scikit-learn: sklearn.metrics.accuracy_score e sklearn.metrics.confusion_matrix"
    },
    "12_train_test_split": {
      why: "Um modelo deve ser testado com dados que nunca viu. Se os dados de teste vazam para o treino, a nota parece boa demais e o modelo falha na vida real. Dividir os dados primeiro é a defesa básica.",
      task: ["Escreva train_test_split(data, test_ratio, seed). Copie a lista. Embaralhe a cópia com a semente. O tamanho do teste é int(len(data) * test_ratio). Os primeiros itens são o teste, o resto é o treino. Retorne (train, test).", "NÃO altere a lista original.", "Vazamento de dados (data leakage) significa: informação do conjunto de teste entra no treino. Por exemplo, o mesmo item está nas duas partes."],
      predict: "Se você embaralhar a lista original no lugar, o que acontece com quem é dono dela?",
      hints: ["Alguns métodos de lista alteram a própria lista e não retornam nada. O shuffle é um deles?", "Faça uma cópia antes de embaralhar.", "Fatiar (slicing) dá as duas partes. Pense em onde fica o corte."],
      library: "scikit-learn: sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)"
    },
    "13_batches": {
      why: "Dados de treino costumam ser grandes demais para carregar de uma vez. Os modelos os leem em grupos pequenos chamados lotes (batches). Um gerador produz um lote por vez e não guarda todos.",
      task: ["Escreva batches(data, size) como um GERADOR. Use yield, não return. Cada yield dá uma lista com size itens. O último lote pode ser menor.", "Não construa todos os lotes antes."],
      predict: "Qual é a diferença entre return e yield? O que você recebe ao chamar uma função geradora?",
      hints: ["Uma função com yield não executa quando você a chama. Executa quando você pede o próximo valor.", "Percorra os dados com um passo igual ao tamanho do lote.", "Fatiar além do fim de uma lista é seguro. Só dá uma lista mais curta."],
      library: "PyTorch: torch.utils.data.DataLoader(dataset, batch_size=32) entrega lotes em um laço."
    },
    "14_dataset": {
      why: "O PyTorch pede um Dataset: um objeto que sabe seu tamanho e devolve um exemplo por posição. Sua própria classe pode seguir as mesmas regras. É assim que as bibliotecas compartilham um contrato simples.",
      task: ["Escreva a classe Dataset com:", "__init__(self, items, labels): guarde as duas listas.", "__len__(self): o número de exemplos.", "__getitem__(self, index): retorne a tupla (item, label). Índices negativos funcionam como em uma lista. Um índice grande demais lança IndexError."],
      predict: "O que acontece quando você escreve len(x) para a sua própria classe? Que método o Python chama?",
      hints: ["Métodos especiais têm sublinhados duplos. O Python os chama por você quando usa len() ou [ ].", "Suas listas já sabem lidar com índices negativos e grandes demais.", "Retorne as duas partes juntas, em uma tupla."],
      library: "PyTorch: herde de torch.utils.data.Dataset e escreva __len__ e __getitem__. A mesma ideia."
    },
    "15_nearest_neighbor": {
      why: "O vizinho mais próximo é um modelo real que não precisa de matemática de treino. Ele lembra exemplos e copia o rótulo do mais próximo. Também mostra o padrão fit e predict usado em todo o scikit-learn.",
      task: ["Escreva a classe NearestNeighbor com fit(self, X, y) e predict(self, x).", "fit lembra os pontos X e os rótulos y. predict retorna o rótulo do ponto mais próximo.", "Distância ao quadrado: em cada posição pegue a diferença, eleve ao quadrado e some tudo. Pulamos a raiz quadrada. A ordem das distâncias continua a mesma.", "Empate: vence o ponto que vem primeiro em X. Se fit nunca foi chamado, predict retorna None."],
      predict: "Por que podemos pular a raiz quadrada se só queremos o ponto mais próximo?",
      hints: ["fit só guarda. Onde um objeto pode guardar coisas entre duas chamadas de método?", "Calcule uma distância por ponto guardado. Lembre a melhor até agora.", "Use um «menor que» estrito ao comparar, para que o primeiro ponto vença o empate."],
      library: "scikit-learn: KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)"
    }
  }
};
