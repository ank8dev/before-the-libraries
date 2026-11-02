window.I18N = window.I18N || {};
window.I18N.de = {
  subtitle: "15 kleine Python-Übungen, die dich auf NumPy, pandas, scikit-learn und PyTorch vorbereiten.",
  blocks: {
    numbers: { title: "Block 1: Zahlen", note: "Bereitet auf NumPy vor" },
    text: { title: "Block 2: Text", note: "Bereitet auf Tokenizer und Sprachmodelle vor" },
    evaluating: { title: "Block 3: Modelle bewerten", note: "Bereitet auf scikit-learn vor" },
    classes: { title: "Block 4: Klassen, die wie Bibliotheken funktionieren", note: "Bereitet auf PyTorch und scikit-learn vor" }
  },
  ui: {
    doneCount: "{n}/{total} erledigt", contents: "Inhalt", skip: "Zum Inhalt springen", design: "Wie das entworfen wurde", repo: "Quellcode auf GitHub", langLabel: "Sprache",
    progress: "Fortschritt: {n}/{total}", start: "Mit Übung 1 beginnen", cont: "Weiter: {title}", allDone: "Alles erledigt. Übung 1 wiederholen",
    howTo: "So arbeitest du",
    steps: ["Lies die Aufgabe. Beantworte die Frage „Zuerst vorhersagen“ im Kopf.", "Klicke auf „Beispiel ausführen“. Die Bilder zeigen, was hineingeht und was herauskommt.", "Schreibe deinen Code im Editor. Nutze die Begriffe aus „Das nachschlagen“. Öffne einen Hinweis nur, wenn du nicht weiterkommst.", "Klicke auf „Meinen Code prüfen“. Jeder Test zeigt Erfolg oder Fehler, mit deinem Ergebnis und dem erwarteten.", "Wenn alle Tests bestehen, wird die Übung als erledigt markiert und die „Verbindung zur Bibliothek“ erscheint."],
    localNote: "Dein Code und dein Fortschritt bleiben nur in diesem Browser. Python läuft in der Seite. Es wird nichts an einen Server gesendet.",
    resetAll: "Gesamten Fortschritt und gespeicherten Code löschen", confirmReset: "Gesamten Fortschritt und gespeicherten Code in diesem Browser löschen?",
    exOf: "Übung {n} von {total}", why: "Warum das in der KI wichtig ist", task: "Die Aufgabe", exIn: "Beispieleingabe", exOut: "Beispielausgabe",
    predict: "Zuerst vorhersagen", predictNote: "Schreibe deine Antwort auf. Dann klicke auf „Beispiel ausführen“ und vergleiche.", lookup: "Das nachschlagen",
    hints: "Hinweise", hint: "Hinweis {n}", lib: "Verbindung zur Bibliothek", libLocked: "Verborgen, bis du die Übung als erledigt markierst. Löse sie zuerst.", markDone: "Als erledigt markieren",
    bench: "Arbeitsbereich", copy: "Startcode kopieren", copied: "Kopiert", copyFail: "Kopieren fehlgeschlagen", reset: "Auf Startcode zurücksetzen", confirmStarter: "Deinen Code durch den Startcode ersetzen?",
    gh: "Datei auf GitHub", edNote: "Tab rückt ein. Drücke Esc und dann Tab, um den Editor zu verlassen. Strg+Enter führt das Beispiel aus. Strg+Umschalt+Enter prüft deinen Code.",
    runEx: "Beispiel ausführen", check: "Meinen Code prüfen", running: "Läuft...", tryTitle: "Beispiel zum Ausführen (du kannst es ändern)", checksTitle: "Tests",
    py_idle: "Python: nicht gestartet", py_loading: "Python: lädt (etwa 10 MB, nur beim ersten Mal)...", py_ready: "Python: bereit",
    py_failed: "Python: hier nicht verfügbar. Führe die Datei auf deinem Computer aus.",
    errTitle: "Python wurde mit einem Fehler beendet", errLine: "(Zeile {n} von {where})", whereCode: "deinem Code", whereExample: "dem Beispiel",
    unavail: "Python konnte in diesem Browser nicht geladen werden (kein Internet oder CDN gesperrt). Du kannst die Übung trotzdem machen: Öffne die Datei aus dem Repository und führe python3 auf deinem Computer aus.",
    timeout: "Nach 8 Sekunden gestoppt. Vielleicht endet eine Schleife nie? Prüfe deine while-Schleife.",
    allPassed: "Alle {n} Tests bestanden.", somePassed: "{ok} von {n} Tests bestanden.", pass: "ok", fail: "Fehler",
    gives: "dein Code liefert", wants: "der Test erwartet ({op})", printed: "Ausgegebener Text", returns: "deine Funktion gibt zurück", output: "Ausgabe", input: "Eingabe: {name}",
    nothing: "Nichts anzuzeigen. Setze in die letzte Zeile einen Ausdruck, zum Beispiel einen Funktionsaufruf.",
    marked: "Übung als erledigt markiert.", libPrefix: "Verbindung zur Bibliothek:", next: "Weiter: {title}", aria_editor: "Python-Code-Editor", aria_snip: "Beispielcode zum Ausführen",
    v_object: "Objekt", v_none: "nichts (None)", v_text: "Text", v_bool: "True oder False", v_number: "Zahl", v_emptyList: "leere Liste", v_listNums: "Liste mit {n} Zahlen",
    v_pairs: "{n} Paare (Wort, Anzahl)", v_grid: "Raster: {r} Zeilen x {c} Spalten", v_ragged: "{n} Listen unterschiedlicher Länge", v_listItems: "Liste mit {n} Elementen",
    v_emptyDict: "leeres Dictionary", v_dictKeys: "Dictionary mit {n} Schlüsseln", v_matrix: "Tabelle: Zeile = erstes Wort, Spalte = nächstes Wort, Zahl = Anzahl", v_corner: "erstes \\ nächstes", v_value: "Wert", v_key: "Schlüssel"
  },
  ex: {
    "01_add_vectors": {
      why: "Viele Modelle arbeiten mit Vektoren: Listen von Zahlen. Zwei Vektoren zu addieren ist einer der häufigsten Schritte. NumPy macht das für ein ganzes Array in einer Zeile.",
      task: ["Schreibe add_vectors(a, b). Sie gibt eine NEUE Liste zurück, in der jedes Element a[i] + b[i] ist.", "Haben die Listen unterschiedliche Längen, gib None zurück. Ändere a und b nicht."],
      predict: "Was soll add_vectors([1, 2], [1, 2, 3]) zurückgeben? Entscheide es und schau dann in den Docstring.",
      hints: ["Du musst beide Listen an derselben Position durchlaufen. Welches Werkzeug läuft durch zwei Listen zugleich?", "Erzeuge zuerst eine leere Liste. Füge dann für jedes Paar ein Ergebnis hinzu.", "Prüfe die Längen vor der Schleife. Früh zurückzugeben ist in Ordnung."],
      library: "Mit NumPy-Arrays: a + b. Die Bibliothek addiert Element für Element für dich."
    },
    "02_dot": {
      why: "Eine neuronenähnliche Einheit mischt ihre Eingaben mit Gewichten. Diese Mischung ist ein Skalarprodukt. Es ist die wichtigste Operation in den meisten neuronalen Netzen.",
      task: ["Schreibe dot(a, b). Multipliziere jedes Paar a[i] * b[i]. Addiere dann alle Ergebnisse.", "Stell dir a als Gewichte und b als Eingaben vor. Das Gewicht sagt, wie wichtig jede Eingabe ist. Die Antwort ist eine Zahl: eine gewichtete Summe.", "Unterschiedliche Längen: gib None zurück. Leere Listen: gib 0 zurück."],
      predict: "Was macht in dot([1, 0, 1], [10, 99, 20]) die 0 mit dem Wert 99?",
      hints: ["Das sieht aus wie Übung 01. Was ist anders: eine Liste als Ergebnis oder eine einzelne Zahl?", "Führe eine laufende Summe. Beginne bei null.", "Ein Gewicht von 0 bedeutet: Diese Eingabe wird ignoriert. Probiere die Idee auf Papier aus."],
      library: "np.dot(a, b) liefert dieselbe Zahl für zwei 1-D-Arrays."
    },
    "03_matrix_shape": {
      why: "Daten in der KI sind oft eine Tabelle aus Zahlen: eine Matrix. Bevor du etwas tust, prüfst du ihre Form (shape). Falsche Formen sind der häufigste Fehler in NumPy- und PyTorch-Code.",
      task: ["Eine Matrix ist eine Liste von Zeilen. Schreibe shape(matrix), die (Zeilen, Spalten) zurückgibt. Für [] gib (0, 0) zurück.", "Schreibe transpose(matrix), die eine neue Matrix zurückgibt, in der Zeilen zu Spalten werden. Das Original darf sich nicht ändern."],
      predict: "Eine Matrix hat die Form (2, 3). Welche Form hat sie nach dem Transponieren? Sag es, bevor du programmierst.",
      hints: ["Für die Form brauchst du nur zwei Längen: die der Liste und die ihrer ersten Zeile.", "In der neuen Matrix ist die erste Zeile das erste Element jeder alten Zeile.", "Nutze zwei Schleifen. Die äußere zählt Spalten. Die innere zählt Zeilen."],
      library: "Mit NumPy: m.shape und m.T"
    },
    "04_flatten_reshape": {
      why: "Ein Bild ist ein Raster aus Pixeln. Viele Modelle wollen stattdessen eine lange Liste. Die Form zu ändern, ohne die Daten zu ändern, heißt reshape. Du wirst das ständig brauchen.",
      task: ["Schreibe flatten(image): Wandle das Raster zeilenweise in eine Liste um.", "Schreibe reshape(values, rows, cols): Wandle eine flache Liste in ein Raster um. Ist rows * cols nicht die Anzahl der Werte, gib None zurück.", "Teste deine Ideen mit einem 3x3-Bild."],
      predict: "Wenn du ein Raster flachst und wieder in Form bringst, bekommst du immer dasselbe Raster? Wann nicht?",
      hints: ["flatten: Besuche jede Zeile, dann jeden Wert dieser Zeile.", "reshape: Prüfe zuerst, ob die Größe passt. Schneide dann die Liste in gleiche Stücke.", "Stück Nummer i beginnt bei i * cols. Finde heraus, wo es endet."],
      library: "Mit NumPy: image.reshape(3, 3). Dasselbe Ergebnis, in einem Aufruf."
    },
    "05_scale_0_1": {
      why: "Merkmale können sehr unterschiedliche Größen haben: Alter 30, Gehalt 50000. Modelle lernen besser, wenn alle Merkmale ähnlich skaliert sind. Min-Max-Skalierung ist der einfachste Weg.",
      task: ["Schreibe scale_0_1(values). Berechne für jeden Wert (Wert - kleinster) / (größter - kleinster).", "In Worten: Wie weit ist der Wert vom kleinsten entfernt, als Teil des gesamten Bereichs? Der kleinste wird 0.0. Der größte wird 1.0.", "Sind alle Werte gleich, ist der Bereich 0. Durch 0 kann man nicht teilen. Gib für jeden Wert 0.0 zurück. Für [] gib [] zurück."],
      predict: "Was passiert bei scale_0_1([7, 7, 7]), wenn du diesen Fall nicht behandelst? Sag, welchen Fehler du erwartest.",
      hints: ["Finde den kleinsten und größten Wert einmal, vor der Schleife.", "Der Bereich ist größter minus kleinster. Wann ist er null?", "Behandle die leere Liste und den Fall gleicher Werte vor dem Teilen."],
      library: "scikit-learn: MinMaxScaler().fit_transform(X) macht dasselbe für jede Spalte."
    },
    "06_tokenize": {
      why: "Ein Sprachmodell kann rohen Text nicht lesen. Zuerst wird der Text in kleine Stücke geschnitten, sogenannte Tokens. Echte Tokenizer sind klüger, aber die Idee beginnt hier.",
      task: ["Schreibe tokenize(text). Mache alle Buchstaben klein. Entferne jedes Satzzeichen. Teile in Wörter.", "Zusätzliche Leerzeichen dürfen keine leeren Wörter erzeugen. Gib die Liste der Wörter zurück."],
      predict: "Was erwartest du von tokenize(\"It's me.\")? Eines der Wörter könnte dich überraschen.",
      hints: ["In der Standardbibliothek gibt es einen fertigen String mit allen Satzzeichen.", "Du kannst die Satzzeichen zuerst oder zuletzt entfernen. Ändert die Reihenfolge das Ergebnis?", "split ohne Argument kommt mit vielen Leerzeichen und Zeilenumbrüchen klar."],
      library: "Echte Bibliotheken (zum Beispiel NLTK oder Hugging Face) haben Tokenizer. Deiner ist ihre einfachste Idee."
    },
    "07_top_words": {
      why: "Wörter zu zählen ist der erste Schritt vieler Textmethoden. Es zeigt, worum es in einem Text geht. Es zeigt auch, warum seltene Wörter für Modelle ein Problem sind.",
      task: ["Schreibe top_words(tokens, n). Gib eine Liste von (Wort, Anzahl)-Tupeln für die n häufigsten Wörter zurück. Das häufigste zuerst.", "Haben zwei Wörter dieselbe Anzahl, kommt das im Alphabet frühere zuerst.", "Ist n größer als die Zahl der verschiedenen Wörter, gib alle zurück."],
      predict: "Zwei Wörter kommen je 2-mal vor. Welches soll in deiner Liste zuerst stehen, und warum?",
      hints: ["Zähle die Wörter zuerst in einem Dictionary. Denke dann ans Sortieren.", "Du kannst nach mehr als einer Sache sortieren: Ein Tupel funktioniert als Schlüssel.", "Um nach Anzahl absteigend, aber nach Wort von A bis Z zu sortieren, nutze einen kleinen Trick mit dem Vorzeichen der Anzahl."],
      library: "collections.Counter(tokens).most_common(n)"
    },
    "08_vocab": {
      why: "Modelle arbeiten mit Zahlen, nicht mit Wörtern. Ein Vokabular gibt jedem Wort eine id. Wörter, die nicht im Vokabular stehen, werden zu einem besonderen Token. So funktionieren auch echte Tokenizer.",
      task: ["Schreibe build_vocab(tokens): Gib ein Dictionary {Wort: id} zurück. Das Token \"<unk>\" hat immer die id 0. Die anderen Wörter bekommen die ids 1, 2, 3 ... in der Reihenfolge ihres ersten Auftretens. Jedes Wort kommt einmal vor.", "Schreibe encode(tokens, vocab): eine Liste von ids. Ein Wort, das nicht in vocab steht, bekommt die id von \"<unk>\".", "Schreibe decode(ids, vocab): eine Liste von Wörtern. Eine unbekannte id wird zu \"<unk>\"."],
      predict: "Du kodierst einen Text mit einem neuen Wort und dekodierst ihn wieder. Bekommst du denselben Text? Warum?",
      hints: ["Die nächste freie id ist immer die aktuelle Größe des Dictionarys.", "Frage bei encode das Dictionary nach dem Wort, gib aber einen Standardwert an, falls es fehlt.", "Für decode brauchst du das umgekehrte Dictionary: von id zu Wort."],
      library: "Die Tokenizer von Hugging Face halten ebenfalls ein vocab und ein unbekanntes Token."
    },
    "09_bigrams": {
      why: "Ein Bigramm-Modell rät das nächste Wort aus dem letzten Wort. Es ist ein winziges Sprachmodell, das nur aus Zählungen besteht. Große Modelle erledigen dieselbe Aufgabe auf viel reichere Weise.",
      task: ["Schreibe bigram_counts(tokens). Gib ein Dictionary von Dictionaries zurück: counts[first][second] ist, wie oft second direkt nach first kam. Nur Wörter mit einem Nachfolger werden Schlüssel.", "Schreibe predict_next(counts, word). Gib den Nachfolger mit der höchsten Anzahl zurück. Bei Gleichstand gib den im Alphabet ersten zurück. Für ein unbekanntes Wort gib None zurück."],
      predict: "Was folgt in \"the cat sat on the mat the cat ran\" am häufigsten auf \"the\"?",
      hints: ["Schau dir Nachbarpaare an: das Wort und das nächste. Wie kannst du solche Paare bilden?", "Ist das erste Wort neu, braucht es sein eigenes inneres Dictionary, bevor du darin zählst.", "Zählmuster: neue Anzahl = alte Anzahl (oder 0) + 1."],
      library: "Das ist die Idee von Karpathys makemore (Bigramm-Modell), aber mit Buchstaben. Sieh dir seine Videoreihe „Neural Networks: Zero to Hero“ an."
    },
    "10_generate": {
      why: "Ein Sprachmodell schreibt Text, indem es ein Wort wählt, dann das nächste, immer wieder. Die Wahl ist zufällig, folgt aber Wahrscheinlichkeiten. Das nennt man Sampling.",
      task: ["Schreibe generate(counts, start, n, seed). Nutze ein counts-Dictionary wie in Übung 09.", "Beginne mit dem Wort start. Wiederhole bis zu n-mal: Wähle zufällig das nächste Wort. Eine höhere Anzahl bedeutet eine höhere Chance. Füge es dem Ergebnis hinzu. Hat das aktuelle Wort keine Nachfolger, höre früher auf.", "Rufe zuerst random.seed(seed) auf, damit derselbe Seed denselben Text ergibt. Gib die Liste der Wörter zurück, einschließlich start."],
      predict: "Wenn ein Nachfolger die Anzahl 1000 hat und ein anderer 1, wie oft wird der zweite gewählt? Etwa wie oft bei 1000 Versuchen?",
      hints: ["Du brauchst eine Funktion, die aus einer Liste mit Gewichten wählt. Die Anzahlen sind die Gewichte.", "Das gewählte Wort wird das neue aktuelle Wort. Wiederhole.", "Wo muss der Seed gesetzt werden: vor der Schleife oder darin?"],
      library: "Große Sprachmodelle ziehen das nächste Token ebenfalls nach Wahrscheinlichkeiten. Eine Einstellung namens temperature ändert, wie riskant die Wahl ist."
    },
    "11_metrics": {
      why: "Wie gut ist ein Modell? Die Genauigkeit (accuracy) ist die erste Zahl, die man ansieht. Aber sie kann täuschen. Die vier Zählwerte einer Konfusionsmatrix zeigen, welche Art von Fehlern ein Modell macht.",
      task: ["Labels sind 1 (ja) oder 0 (nein). Schreibe accuracy(preds, labels): der Anteil richtiger Vorhersagen, von 0 bis 1.", "Schreibe confusion_counts(preds, labels): ein Dictionary mit TP (sagte 1, Wahrheit 1), FP (sagte 1, Wahrheit 0), TN (sagte 0, Wahrheit 0), FN (sagte 0, Wahrheit 1).", "Unterschiedliche Längen: gib None zurück. Leere Listen: accuracy ist 0.0."],
      predict: "Ein Test hat 95 „nein“ und 5 „ja“. Ein Modell sagt immer „nein“. Wie hoch ist seine accuracy?",
      hints: ["Accuracy ist richtige Vorhersagen geteilt durch alle Vorhersagen.", "Jedes Wertepaar gehört zu genau einem von vier Fällen.", "Erster Buchstabe T oder F: Lag das Modell richtig? Zweiter Buchstabe P oder N: Was sagte es?"],
      library: "scikit-learn: sklearn.metrics.accuracy_score und sklearn.metrics.confusion_matrix"
    },
    "12_train_test_split": {
      why: "Ein Modell muss mit Daten getestet werden, die es nie gesehen hat. Gelangen Testdaten ins Training, sieht die Bewertung zu gut aus und das Modell versagt im echten Leben. Die Daten zuerst zu trennen ist die grundlegende Abwehr.",
      task: ["Schreibe train_test_split(data, test_ratio, seed). Kopiere die Liste. Mische die Kopie mit dem Seed. Die Testgröße ist int(len(data) * test_ratio). Die ersten Elemente sind der Testteil, der Rest der Trainingsteil. Gib (train, test) zurück.", "Ändere die Originalliste NICHT.", "Datenleck (data leakage) bedeutet: Informationen aus dem Testteil gelangen ins Training. Zum Beispiel ist dasselbe Element in beiden Teilen."],
      predict: "Wenn du die Originalliste an Ort und Stelle mischst, was passiert mit der Person, der sie gehört?",
      hints: ["Manche Listenmethoden ändern die Liste selbst und geben nichts zurück. Gehört shuffle dazu?", "Mache vor dem Mischen eine Kopie.", "Slicing liefert dir beide Teile. Überlege, wo der Schnitt liegt."],
      library: "scikit-learn: sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)"
    },
    "13_batches": {
      why: "Trainingsdaten sind oft zu groß, um sie auf einmal zu laden. Modelle lesen sie in kleinen Gruppen, den Batches. Ein Generator erzeugt jeweils einen Batch und speichert nicht alle.",
      task: ["Schreibe batches(data, size) als GENERATOR. Nutze yield, nicht return. Jedes yield liefert eine Liste mit size Elementen. Der letzte Batch kann kleiner sein.", "Baue nicht zuerst alle Batches."],
      predict: "Was ist der Unterschied zwischen return und yield? Was erhältst du, wenn du eine Generatorfunktion aufrufst?",
      hints: ["Eine Funktion mit yield läuft nicht beim Aufruf. Sie läuft, wenn du den nächsten Wert verlangst.", "Gehe mit einer Schrittweite gleich der Batchgröße durch die Daten.", "Über das Ende einer Liste hinaus zu slicen ist sicher. Du bekommst nur eine kürzere Liste."],
      library: "PyTorch: torch.utils.data.DataLoader(dataset, batch_size=32) liefert Batches in einer Schleife."
    },
    "14_dataset": {
      why: "PyTorch verlangt ein Dataset: ein Objekt, das seine Größe kennt und ein Beispiel pro Position liefert. Deine eigene Klasse kann dieselben Regeln befolgen. So teilen Bibliotheken einen einfachen Vertrag.",
      task: ["Schreibe die Klasse Dataset mit:", "__init__(self, items, labels): speichere beide Listen.", "__len__(self): die Anzahl der Beispiele.", "__getitem__(self, index): gib das Tupel (item, label) zurück. Negative Indizes funktionieren wie bei einer Liste. Ein zu großer Index löst IndexError aus."],
      predict: "Was passiert, wenn du len(x) für deine eigene Klasse schreibst? Welche Methode ruft Python auf?",
      hints: ["Spezielle Methoden haben doppelte Unterstriche. Python ruft sie für dich auf, wenn du len() oder [ ] benutzt.", "Deine Listen können negative und zu große Indizes schon behandeln.", "Gib beide Teile zusammen als ein Tupel zurück."],
      library: "PyTorch: Erbe von torch.utils.data.Dataset und schreibe __len__ und __getitem__. Dieselbe Idee."
    },
    "15_nearest_neighbor": {
      why: "Der nächste Nachbar ist ein echtes Modell, das keine Trainingsmathematik braucht. Es merkt sich Beispiele und kopiert das Label des nächsten. Es zeigt auch das fit-und-predict-Muster, das überall in scikit-learn vorkommt.",
      task: ["Schreibe die Klasse NearestNeighbor mit fit(self, X, y) und predict(self, x).", "fit merkt sich die Punkte X und die Labels y. predict gibt das Label des nächsten Punkts zurück.", "Quadrierte Distanz: Nimm an jeder Position die Differenz, quadriere sie und addiere alles. Die Quadratwurzel lassen wir weg. Die Reihenfolge der Distanzen bleibt gleich.", "Gleichstand: Der Punkt, der in X zuerst kommt, gewinnt. Wurde fit nie aufgerufen, gibt predict None zurück."],
      predict: "Warum können wir die Quadratwurzel weglassen, wenn wir nur den nächsten Punkt wollen?",
      hints: ["fit speichert nur. Wo kann ein Objekt zwischen zwei Methodenaufrufen Dinge aufbewahren?", "Berechne eine Distanz pro gespeichertem Punkt. Merke dir die bisher beste.", "Nutze beim Vergleichen ein striktes „kleiner als“, damit der erste Punkt einen Gleichstand gewinnt."],
      library: "scikit-learn: KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)"
    }
  }
};
