window.I18N = window.I18N || {};
window.I18N.fr = {
  subtitle: "15 petits exercices Python qui vous préparent à NumPy, pandas, scikit-learn et PyTorch.",
  blocks: {
    numbers: { title: "Bloc 1 : Nombres", note: "Prépare à NumPy" },
    text: { title: "Bloc 2 : Texte", note: "Prépare aux tokeniseurs et aux modèles de langage" },
    evaluating: { title: "Bloc 3 : Évaluer des modèles", note: "Prépare à scikit-learn" },
    classes: { title: "Bloc 4 : Des classes qui fonctionnent comme des bibliothèques", note: "Prépare à PyTorch et scikit-learn" }
  },
  ui: {
    doneCount: "{n}/{total} terminés", contents: "Sommaire", skip: "Aller au contenu", design: "Comment c'est conçu", repo: "Code sur GitHub", langLabel: "Langue",
    progress: "Progression : {n}/{total}", start: "Commencer par l'exercice 1", cont: "Continuer : {title}", allDone: "Tout est terminé. Revoir l'exercice 1",
    howTo: "Comment travailler",
    steps: ["Lisez la tâche. Répondez dans votre tête à la question « Prédisez d'abord ».", "Cliquez sur « Lancer l'exemple ». Les images montrent ce qui entre et ce qui sort.", "Écrivez votre code dans l'éditeur. Utilisez les termes de « Cherchez ceci ». N'ouvrez un indice que si vous êtes bloqué.", "Cliquez sur « Vérifier mon code ». Chaque test montre réussite ou échec, avec ce que vous avez obtenu et ce qui était attendu.", "Quand tous les tests passent, l'exercice est marqué comme terminé et le « Lien avec la bibliothèque » apparaît."],
    localNote: "Votre code et votre progression restent uniquement dans ce navigateur. Python s'exécute dans la page. Rien n'est envoyé à un serveur.",
    resetAll: "Effacer toute la progression et le code enregistré", confirmReset: "Supprimer toute la progression et le code enregistré dans ce navigateur ?",
    exOf: "Exercice {n} sur {total}", why: "Pourquoi c'est important en IA", task: "La tâche", exIn: "Entrée d'exemple", exOut: "Sortie d'exemple",
    predict: "Prédisez d'abord", predictNote: "Écrivez votre réponse. Puis cliquez sur « Lancer l'exemple » et comparez.", lookup: "Cherchez ceci",
    hints: "Indices", hint: "Indice {n}", lib: "Lien avec la bibliothèque", libLocked: "Caché jusqu'à ce que vous marquiez l'exercice comme terminé. Résolvez-le d'abord.", markDone: "Marquer comme terminé",
    bench: "Espace de travail", copy: "Copier le code de départ", copied: "Copié", copyFail: "Échec de la copie", reset: "Revenir au code de départ", confirmStarter: "Remplacer votre code par le code de départ ?",
    gh: "Fichier sur GitHub", edNote: "Tab indente. Appuyez sur Échap puis Tab pour quitter l'éditeur. Ctrl+Entrée lance l'exemple. Ctrl+Maj+Entrée vérifie votre code.",
    runEx: "Lancer l'exemple", check: "Vérifier mon code", running: "Exécution...", tryTitle: "Exemple à lancer (vous pouvez le modifier)", checksTitle: "Tests",
    py_idle: "Python : non démarré", py_loading: "Python : chargement (environ 10 Mo, seulement la première fois)...", py_ready: "Python : prêt",
    py_failed: "Python : indisponible ici. Exécutez le fichier sur votre ordinateur.",
    errTitle: "Python s'est arrêté avec une erreur", errLine: "(ligne {n} de {where})", whereCode: "votre code", whereExample: "l'exemple",
    unavail: "Python n'a pas pu se charger dans ce navigateur (pas d'internet, ou CDN bloqué). Vous pouvez quand même faire l'exercice : ouvrez le fichier du dépôt et lancez python3 sur votre ordinateur.",
    timeout: "Arrêté après 8 secondes. Une boucle ne se termine peut-être jamais ? Vérifiez votre while.",
    allPassed: "Les {n} tests ont réussi.", somePassed: "{ok} tests sur {n} ont réussi.", pass: "réussi", fail: "échec",
    gives: "votre code donne", wants: "le test attend ({op})", printed: "Sortie imprimée", returns: "votre fonction renvoie", output: "Sortie", input: "Entrée : {name}",
    nothing: "Rien à afficher. Mettez une expression sur la dernière ligne, par exemple un appel de fonction.",
    marked: "Exercice marqué comme terminé.", libPrefix: "Lien avec la bibliothèque :", next: "Suivant : {title}", aria_editor: "Éditeur de code Python", aria_snip: "Code d'exemple à lancer",
    v_object: "objet", v_none: "rien (None)", v_text: "texte", v_bool: "True ou False", v_number: "nombre", v_emptyList: "liste vide", v_listNums: "liste de {n} nombres",
    v_pairs: "{n} paires (mot, compte)", v_grid: "grille : {r} lignes x {c} colonnes", v_ragged: "{n} listes de longueurs différentes", v_listItems: "liste de {n} éléments",
    v_emptyDict: "dictionnaire vide", v_dictKeys: "dictionnaire de {n} clés", v_matrix: "tableau : ligne = premier mot, colonne = mot suivant, nombre = compte", v_corner: "premier \\ suivant", v_value: "valeur", v_key: "clé"
  },
  ex: {
    "01_add_vectors": {
      why: "Beaucoup de modèles travaillent avec des vecteurs : des listes de nombres. Additionner deux vecteurs est l'une des étapes les plus courantes. NumPy le fait pour un tableau entier en une seule ligne.",
      task: ["Écrivez add_vectors(a, b). Elle renvoie une NOUVELLE liste dont chaque élément est a[i] + b[i].", "Si les listes n'ont pas la même longueur, renvoyez None. Ne modifiez pas a ni b."],
      predict: "Que doit renvoyer add_vectors([1, 2], [1, 2, 3]) ? Décidez, puis regardez le docstring.",
      hints: ["Il faut parcourir les deux listes à la même position. Quel outil parcourt deux listes ensemble ?", "Créez d'abord une liste vide. Puis ajoutez un résultat pour chaque paire.", "Vérifiez les longueurs avant la boucle. Renvoyer tôt est permis."],
      library: "Avec des tableaux NumPy : a + b. La bibliothèque additionne élément par élément pour vous."
    },
    "02_dot": {
      why: "Une unité semblable à un neurone mélange ses entrées avec des poids. Ce mélange est un produit scalaire. C'est l'opération principale à l'intérieur de la plupart des réseaux de neurones.",
      task: ["Écrivez dot(a, b). Multipliez chaque paire a[i] * b[i]. Puis additionnez tous les résultats.", "Voyez a comme des poids et b comme des entrées. Le poids dit l'importance de chaque entrée. La réponse est un seul nombre : une somme pondérée.", "Longueurs différentes : renvoyez None. Listes vides : renvoyez 0."],
      predict: "Dans dot([1, 0, 1], [10, 99, 20]), que fait le 0 à la valeur 99 ?",
      hints: ["C'est proche de l'exercice 01. Qu'est-ce qui change : une liste en résultat, ou un seul nombre ?", "Gardez un total courant. Commencez à zéro.", "Un poids de 0 signifie : cette entrée est ignorée. Testez l'idée sur papier."],
      library: "np.dot(a, b) donne le même nombre pour deux tableaux 1-D."
    },
    "03_matrix_shape": {
      why: "Les données en IA sont souvent un tableau de nombres : une matrice. Avant tout, on vérifie sa forme (shape). Des formes incorrectes sont l'erreur la plus courante dans le code NumPy et PyTorch.",
      task: ["Une matrice est une liste de lignes. Écrivez shape(matrix) qui renvoie (lignes, colonnes). Pour [] renvoyez (0, 0).", "Écrivez transpose(matrix) qui renvoie une nouvelle matrice où les lignes deviennent des colonnes. L'originale ne doit pas changer."],
      predict: "Une matrice a la forme (2, 3). Quelle est la forme après transposition ? Dites-le avant de coder.",
      hints: ["La forme n'a besoin que de deux longueurs : celle de la liste et celle de sa première ligne.", "Dans la nouvelle matrice, la première ligne est le premier élément de chaque ancienne ligne.", "Utilisez deux boucles. L'externe compte les colonnes. L'interne compte les lignes."],
      library: "Avec NumPy : m.shape et m.T"
    },
    "04_flatten_reshape": {
      why: "Une image est une grille de pixels. Beaucoup de modèles veulent une seule longue liste. Changer la forme sans changer les données s'appelle reshape. Vous l'utiliserez tout le temps.",
      task: ["Écrivez flatten(image) : transformez la grille en une liste, ligne par ligne.", "Écrivez reshape(values, rows, cols) : transformez une liste plate en grille. Si rows * cols n'est pas le nombre de valeurs, renvoyez None.", "Utilisez une image 3x3 pour tester vos idées."],
      predict: "Si vous aplatissez une grille puis la remettez en forme, obtenez-vous toujours la même grille ? Quand non ?",
      hints: ["flatten : visitez chaque ligne, puis chaque valeur de cette ligne.", "reshape : vérifiez d'abord que la taille convient. Puis découpez la liste en morceaux égaux.", "Le morceau numéro i commence à i * cols. Trouvez où il se termine."],
      library: "Avec NumPy : image.reshape(3, 3). Même résultat, en un seul appel."
    },
    "05_scale_0_1": {
      why: "Les caractéristiques peuvent avoir des tailles très différentes : âge 30, salaire 50000. Les modèles apprennent mieux quand elles sont à une échelle proche. La mise à l'échelle min-max est la façon la plus simple.",
      task: ["Écrivez scale_0_1(values). Pour chaque valeur calculez (valeur - minimum) / (maximum - minimum).", "En mots : à quelle distance la valeur est-elle du minimum, comme part de l'étendue totale ? Le minimum devient 0.0. Le maximum devient 1.0.", "Si toutes les valeurs sont égales, l'étendue est 0. On ne peut pas diviser par 0. Renvoyez 0.0 pour chaque valeur. Pour [] renvoyez []."],
      predict: "Que donne scale_0_1([7, 7, 7]) si vous ne traitez pas ce cas ? Dites quelle erreur vous attendez.",
      hints: ["Trouvez le minimum et le maximum une seule fois, avant la boucle.", "L'étendue est le maximum moins le minimum. Quand vaut-elle zéro ?", "Traitez la liste vide et le cas des valeurs égales avant de diviser."],
      library: "scikit-learn : MinMaxScaler().fit_transform(X) fait la même chose pour chaque colonne."
    },
    "06_tokenize": {
      why: "Un modèle de langage ne peut pas lire du texte brut. Le texte est d'abord découpé en petits morceaux appelés tokens. Les vrais tokeniseurs sont plus malins, mais l'idée commence ici.",
      task: ["Écrivez tokenize(text). Mettez les lettres en minuscules. Supprimez toute la ponctuation. Découpez en mots.", "Les espaces en trop ne doivent pas créer de mots vides. Renvoyez la liste des mots."],
      predict: "Qu'attendez-vous de tokenize(\"It's me.\") ? L'un des mots peut vous surprendre.",
      hints: ["Dans la bibliothèque standard, il existe une chaîne toute faite avec toute la ponctuation.", "Vous pouvez supprimer la ponctuation avant ou après. L'ordre change-t-il le résultat ?", "split sans argument gère de nombreux espaces et sauts de ligne."],
      library: "Les vraies bibliothèques (par exemple NLTK ou Hugging Face) ont des tokeniseurs. Le vôtre en est l'idée la plus simple."
    },
    "07_top_words": {
      why: "Compter les mots est la première étape de nombreuses méthodes de texte. Cela montre de quoi parle un texte. Cela montre aussi pourquoi les mots rares posent problème aux modèles.",
      task: ["Écrivez top_words(tokens, n). Renvoyez une liste de tuples (mot, compte) pour les n mots les plus fréquents. Les plus fréquents d'abord.", "Si deux mots ont le même compte, celui qui vient en premier dans l'alphabet passe d'abord.", "Si n est plus grand que le nombre de mots différents, renvoyez-les tous."],
      predict: "Deux mots apparaissent 2 fois chacun. Lequel doit venir en premier dans votre liste, et pourquoi ?",
      hints: ["Comptez d'abord les mots dans un dictionnaire. Puis pensez au tri.", "On peut trier selon plusieurs critères : un tuple fait office de clé.", "Pour trier du plus grand au plus petit compte, mais de A à Z pour les mots, utilisez une petite astuce avec le signe du compte."],
      library: "collections.Counter(tokens).most_common(n)"
    },
    "08_vocab": {
      why: "Les modèles utilisent des nombres, pas des mots. Un vocabulaire donne un id à chaque mot. Les mots absents du vocabulaire deviennent un token spécial. Les vrais tokeniseurs fonctionnent aussi ainsi.",
      task: ["Écrivez build_vocab(tokens) : renvoyez un dictionnaire {mot: id}. Le token \"<unk>\" a toujours l'id 0. Les autres mots reçoivent les ids 1, 2, 3 ... dans l'ordre de première apparition. Chaque mot apparaît une fois.", "Écrivez encode(tokens, vocab) : une liste d'ids. Un mot absent de vocab reçoit l'id de \"<unk>\".", "Écrivez decode(ids, vocab) : une liste de mots. Un id inconnu devient \"<unk>\"."],
      predict: "Vous encodez un texte contenant un mot nouveau, puis vous le décodez. Obtenez-vous le même texte ? Pourquoi ?",
      hints: ["Le prochain id libre est toujours la taille actuelle du dictionnaire.", "Pour encode, demandez le mot au dictionnaire, mais donnez une valeur par défaut s'il manque.", "Pour decode, il faut le dictionnaire inverse : de l'id au mot."],
      library: "Les tokeniseurs de Hugging Face gardent aussi un vocab et un token inconnu."
    },
    "09_bigrams": {
      why: "Un modèle de bigrammes devine le mot suivant à partir du dernier mot. C'est un minuscule modèle de langage fait uniquement de comptes. Les grands modèles font le même travail de façon bien plus riche.",
      task: ["Écrivez bigram_counts(tokens). Renvoyez un dictionnaire de dictionnaires : counts[first][second] est le nombre de fois où second est venu juste après first. Seuls les mots qui ont un suivant deviennent des clés.", "Écrivez predict_next(counts, word). Renvoyez le suivant ayant le compte le plus élevé. En cas d'égalité, renvoyez le premier dans l'alphabet. Pour un mot inconnu, renvoyez None."],
      predict: "Dans \"the cat sat on the mat the cat ran\", qu'est-ce qui suit le plus souvent \"the\" ?",
      hints: ["Regardez les paires de voisins : le mot et le suivant. Comment former ces paires ?", "Si le premier mot est nouveau, il lui faut son propre dictionnaire interne avant de compter dedans.", "Modèle de comptage : nouveau compte = ancien compte (ou 0) + 1."],
      library: "C'est l'idée de makemore de Karpathy (modèle de bigrammes), mais avec des lettres. Voyez sa série de vidéos « Neural Networks: Zero to Hero »."
    },
    "10_generate": {
      why: "Un modèle de langage écrit du texte en choisissant un mot, puis le suivant, encore et encore. Le choix est aléatoire, mais suit des probabilités. C'est l'échantillonnage (sampling).",
      task: ["Écrivez generate(counts, start, n, seed). Utilisez un dictionnaire counts comme dans l'exercice 09.", "Commencez avec le mot start. Répétez jusqu'à n fois : choisissez le mot suivant au hasard. Un compte plus élevé donne plus de chances. Ajoutez-le au résultat. Si le mot actuel n'a pas de suivants, arrêtez-vous plus tôt.", "Appelez d'abord random.seed(seed), pour que la même graine donne le même texte. Renvoyez la liste des mots, start inclus."],
      predict: "Si un suivant a le compte 1000 et un autre 1, à quelle fréquence le second sera-t-il choisi ? Environ combien de fois sur 1000 essais ?",
      hints: ["Il vous faut une fonction qui choisit dans une liste avec des poids. Les comptes sont les poids.", "Le mot choisi devient le nouveau mot courant. Répétez.", "Où faut-il fixer la graine : avant la boucle ou dedans ?"],
      library: "Les grands modèles de langage échantillonnent aussi le token suivant selon des probabilités. Un réglage appelé temperature change le côté risqué du choix."
    },
    "11_metrics": {
      why: "Un modèle est-il bon ? L'exactitude (accuracy) est le premier nombre qu'on regarde. Mais elle peut tromper. Les quatre comptes d'une table de confusion montrent quel type d'erreurs le modèle commet.",
      task: ["Les étiquettes sont 1 (oui) ou 0 (non). Écrivez accuracy(preds, labels) : la part des prédictions correctes, de 0 à 1.", "Écrivez confusion_counts(preds, labels) : un dictionnaire avec TP (a dit 1, vérité 1), FP (a dit 1, vérité 0), TN (a dit 0, vérité 0), FN (a dit 0, vérité 1).", "Longueurs différentes : renvoyez None. Listes vides : l'exactitude vaut 0.0."],
      predict: "Un test a 95 « non » et 5 « oui ». Un modèle dit toujours « non ». Quelle est son exactitude ?",
      hints: ["L'exactitude, ce sont les prédictions correctes divisées par toutes les prédictions.", "Chaque paire de valeurs appartient à exactement un des quatre cas.", "Première lettre T ou F : le modèle avait-il raison ? Deuxième lettre P ou N : qu'a-t-il dit ?"],
      library: "scikit-learn : sklearn.metrics.accuracy_score et sklearn.metrics.confusion_matrix"
    },
    "12_train_test_split": {
      why: "Un modèle doit être testé sur des données qu'il n'a jamais vues. Si les données de test fuient dans l'entraînement, le score paraît trop bon et le modèle échoue dans la vraie vie. Séparer les données d'abord est la défense de base.",
      task: ["Écrivez train_test_split(data, test_ratio, seed). Copiez la liste. Mélangez la copie avec la graine. La taille du test est int(len(data) * test_ratio). Les premiers éléments forment la partie test, le reste la partie entraînement. Renvoyez (train, test).", "Ne modifiez PAS la liste d'origine.", "La fuite de données (data leakage) signifie : de l'information de la partie test entre dans l'entraînement. Par exemple, le même élément est dans les deux parties."],
      predict: "Si vous mélangez la liste d'origine sur place, que se passe-t-il pour la personne à qui elle appartient ?",
      hints: ["Certaines méthodes de liste modifient la liste elle-même et ne renvoient rien. shuffle en fait-il partie ?", "Faites une copie avant de mélanger.", "Le découpage (slicing) donne les deux parties. Réfléchissez à l'endroit de la coupe."],
      library: "scikit-learn : sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)"
    },
    "13_batches": {
      why: "Les données d'entraînement sont souvent trop grandes pour tenir en mémoire d'un coup. Les modèles les lisent par petits groupes appelés lots (batches). Un générateur produit un lot à la fois et ne les stocke pas tous.",
      task: ["Écrivez batches(data, size) comme un GÉNÉRATEUR. Utilisez yield, pas return. Chaque yield donne une liste de size éléments. Le dernier lot peut être plus petit.", "Ne construisez pas d'abord tous les lots."],
      predict: "Quelle est la différence entre return et yield ? Qu’obtenez-vous en appelant une fonction génératrice ?",
      hints: ["Une fonction avec yield ne s'exécute pas quand vous l'appelez. Elle s'exécute quand vous demandez la valeur suivante.", "Parcourez les données avec un pas égal à la taille du lot.", "Découper au-delà de la fin d'une liste est sans danger. On obtient juste une liste plus courte."],
      library: "PyTorch : torch.utils.data.DataLoader(dataset, batch_size=32) donne des lots dans une boucle."
    },
    "14_dataset": {
      why: "PyTorch demande un Dataset : un objet qui connaît sa taille et renvoie un exemple par position. Votre propre classe peut suivre les mêmes règles. C'est ainsi que les bibliothèques partagent un contrat simple.",
      task: ["Écrivez la classe Dataset avec :", "__init__(self, items, labels) : stockez les deux listes.", "__len__(self) : le nombre d'exemples.", "__getitem__(self, index) : renvoyez le tuple (item, label). Les indices négatifs marchent comme dans une liste. Un indice trop grand lève IndexError."],
      predict: "Que se passe-t-il quand vous écrivez len(x) pour votre propre classe ? Quelle méthode Python appelle-t-il ?",
      hints: ["Les méthodes spéciales ont des doubles tirets bas. Python les appelle pour vous quand vous utilisez len() ou [ ].", "Vos listes savent déjà gérer les indices négatifs et trop grands.", "Renvoyez les deux morceaux ensemble dans un tuple."],
      library: "PyTorch : héritez de torch.utils.data.Dataset et écrivez __len__ et __getitem__. Même idée."
    },
    "15_nearest_neighbor": {
      why: "Le plus proche voisin est un vrai modèle qui n'a pas besoin de mathématiques d'entraînement. Il retient des exemples et copie l'étiquette du plus proche. Il montre aussi le motif fit et predict utilisé dans tout scikit-learn.",
      task: ["Écrivez la classe NearestNeighbor avec fit(self, X, y) et predict(self, x).", "fit retient les points X et les étiquettes y. predict renvoie l'étiquette du point le plus proche.", "Distance au carré : à chaque position, prenez la différence, mettez-la au carré, puis additionnez tout. On saute la racine carrée. L'ordre des distances reste le même.", "Égalité : le point qui vient en premier dans X gagne. Si fit n'a jamais été appelé, predict renvoie None."],
      predict: "Pourquoi peut-on sauter la racine carrée si l'on veut seulement le point le plus proche ?",
      hints: ["fit ne fait que stocker. Où un objet peut-il garder des choses entre deux appels de méthode ?", "Calculez une distance par point stocké. Retenez la meilleure jusqu'ici.", "Utilisez un « plus petit que » strict à la comparaison, pour que le premier point gagne une égalité."],
      library: "scikit-learn : KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)"
    }
  }
};
