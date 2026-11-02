window.I18N = window.I18N || {};
window.I18N.es = {
  subtitle: "15 ejercicios pequeños de Python que te preparan para NumPy, pandas, scikit-learn y PyTorch.",
  blocks: {
    numbers: { title: "Bloque 1: Números", note: "Te prepara para NumPy" },
    text: { title: "Bloque 2: Texto", note: "Te prepara para tokenizadores y modelos de lenguaje" },
    evaluating: { title: "Bloque 3: Evaluar modelos", note: "Te prepara para scikit-learn" },
    classes: { title: "Bloque 4: Clases que funcionan como bibliotecas", note: "Te prepara para PyTorch y scikit-learn" }
  },
  ui: {
    doneCount: "{n}/{total} hechos", contents: "Contenido", skip: "Saltar al contenido", design: "Cómo se diseñó", repo: "Código en GitHub", langLabel: "Idioma",
    progress: "Progreso: {n}/{total}", start: "Empezar con el ejercicio 1", cont: "Continuar: {title}", allDone: "Todo hecho. Repasar el ejercicio 1",
    howTo: "Cómo trabajar",
    steps: ["Lee la tarea. Responde mentalmente la pregunta «Predice primero».", "Pulsa «Ejecutar ejemplo». Los dibujos muestran qué entra y qué sale.", "Escribe tu código en el editor. Usa los términos de «Búscalo». Abre una pista solo si estás atascado.", "Pulsa «Comprobar mi código». Cada prueba muestra éxito o fallo, con lo que obtuviste y lo que se esperaba.", "Cuando todas las pruebas pasan, el ejercicio se marca como hecho y aparece la «Conexión con la biblioteca»."],
    localNote: "Tu código y tu progreso se quedan solo en este navegador. Python se ejecuta dentro de la página. No se envía nada a ningún servidor.",
    resetAll: "Borrar todo el progreso y el código guardado", confirmReset: "¿Borrar todo el progreso y el código guardado en este navegador?",
    exOf: "Ejercicio {n} de {total}", why: "Por qué importa en la IA", task: "La tarea", exIn: "Entrada de ejemplo", exOut: "Salida de ejemplo",
    predict: "Predice primero", predictNote: "Escribe tu respuesta. Luego pulsa «Ejecutar ejemplo» y compara.", lookup: "Búscalo",
    hints: "Pistas", hint: "Pista {n}", lib: "Conexión con la biblioteca", libLocked: "Oculto hasta que marques el ejercicio como hecho. Resuélvelo primero.", markDone: "Marcar como hecho",
    bench: "Zona de trabajo", copy: "Copiar código inicial", copied: "Copiado", copyFail: "No se pudo copiar", reset: "Volver al código inicial", confirmStarter: "¿Reemplazar tu código por el código inicial?",
    gh: "Archivo en GitHub", edNote: "Tab añade sangría. Pulsa Esc y luego Tab para salir del editor. Ctrl+Enter ejecuta el ejemplo. Ctrl+Shift+Enter comprueba tu código.",
    runEx: "Ejecutar ejemplo", check: "Comprobar mi código", running: "Ejecutando...", tryTitle: "Ejemplo para ejecutar (puedes cambiarlo)", checksTitle: "Pruebas",
    py_idle: "Python: no iniciado", py_loading: "Python: cargando (unos 10 MB, solo la primera vez)...", py_ready: "Python: listo",
    py_failed: "Python: no disponible aquí. Ejecuta el archivo en tu ordenador.",
    errTitle: "Python se detuvo con un error", errLine: "(línea {n} de {where})", whereCode: "tu código", whereExample: "el ejemplo",
    unavail: "Python no se pudo cargar en este navegador (sin internet o CDN bloqueado). Aun así puedes hacer el ejercicio: abre el archivo del repositorio y ejecuta python3 en tu ordenador.",
    timeout: "Detenido tras 8 segundos. ¿Quizá un bucle no termina nunca? Revisa tu while.",
    allPassed: "Las {n} pruebas pasaron.", somePassed: "{ok} de {n} pruebas pasaron.", pass: "éxito", fail: "fallo",
    gives: "tu código da", wants: "la prueba espera ({op})", printed: "Salida impresa", returns: "tu función devuelve", output: "Salida", input: "Entrada: {name}",
    nothing: "Nada que mostrar. Pon una expresión en la última línea, por ejemplo una llamada a función.",
    marked: "Ejercicio marcado como hecho.", libPrefix: "Conexión con la biblioteca:", next: "Siguiente: {title}", aria_editor: "Editor de código Python", aria_snip: "Código de ejemplo para ejecutar",
    v_object: "objeto", v_none: "nada (None)", v_text: "texto", v_bool: "True o False", v_number: "número", v_emptyList: "lista vacía", v_listNums: "lista de {n} números",
    v_pairs: "{n} pares (palabra, cuenta)", v_grid: "cuadrícula: {r} filas x {c} columnas", v_ragged: "{n} listas de distinta longitud", v_listItems: "lista de {n} elementos",
    v_emptyDict: "diccionario vacío", v_dictKeys: "diccionario con {n} claves", v_matrix: "tabla: fila = primera palabra, columna = palabra siguiente, número = cuenta", v_corner: "primera \\ siguiente", v_value: "valor", v_key: "clave"
  },
  ex: {
    "01_add_vectors": {
      why: "Muchos modelos trabajan con vectores: listas de números. Sumar dos vectores es uno de los pasos más comunes. NumPy lo hace para un arreglo entero en una sola línea.",
      task: ["Escribe add_vectors(a, b). Devuelve una lista nueva donde cada elemento es a[i] + b[i].", "Si las listas tienen distinta longitud, devuelve None. No cambies a ni b."],
      predict: "¿Qué debería dar add_vectors([1, 2], [1, 2, 3])? Decídelo y luego mira el docstring.",
      hints: ["Necesitas recorrer ambas listas en la misma posición. ¿Qué herramienta recorre dos listas a la vez?", "Crea primero una lista vacía. Luego añade un resultado por cada pareja.", "Comprueba las longitudes antes del bucle. Devolver pronto está bien."],
      library: "Con arreglos de NumPy: a + b. La biblioteca suma elemento a elemento por ti."
    },
    "02_dot": {
      why: "Una unidad parecida a una neurona mezcla sus entradas con pesos. Esa mezcla es un producto punto. Es la operación principal dentro de la mayoría de las redes neuronales.",
      task: ["Escribe dot(a, b). Multiplica cada pareja a[i] * b[i]. Luego suma todos los resultados.", "Piensa en a como los pesos y en b como las entradas. El peso dice cuánto importa cada entrada. La respuesta es un número: una suma ponderada.", "Longitudes distintas: devuelve None. Listas vacías: devuelve 0."],
      predict: "En dot([1, 0, 1], [10, 99, 20]), ¿qué le hace el 0 al valor 99?",
      hints: ["Se parece al ejercicio 01. ¿Qué cambia: una lista como resultado o un solo número?", "Lleva un total acumulado. Empieza en cero.", "Un peso de 0 significa: esta entrada se ignora. Prueba la idea en papel."],
      library: "np.dot(a, b) da el mismo número para dos arreglos de una dimensión."
    },
    "03_matrix_shape": {
      why: "Los datos en IA suelen ser una tabla de números: una matriz. Antes de hacer nada, compruebas su forma (shape). Las formas incorrectas son el error más común en código de NumPy y PyTorch.",
      task: ["Una matriz es una lista de filas. Escribe shape(matrix) que devuelva (filas, columnas). Para [] devuelve (0, 0).", "Escribe transpose(matrix) que devuelva una matriz nueva donde las filas pasan a ser columnas. La original no debe cambiar."],
      predict: "Una matriz tiene forma (2, 3). ¿Cuál es la forma tras transponer? Dilo antes de programar.",
      hints: ["La forma solo necesita dos longitudes: la de la lista y la de su primera fila.", "En la matriz nueva, la primera fila es el primer elemento de cada fila antigua.", "Usa dos bucles. El externo cuenta columnas. El interno cuenta filas."],
      library: "Con NumPy: m.shape y m.T"
    },
    "04_flatten_reshape": {
      why: "Una imagen es una cuadrícula de píxeles. Muchos modelos quieren una sola lista larga. Cambiar la forma sin cambiar los datos se llama reshape. Lo usarás todo el tiempo.",
      task: ["Escribe flatten(image): convierte la cuadrícula en una lista, fila por fila.", "Escribe reshape(values, rows, cols): convierte una lista plana en una cuadrícula. Si rows * cols no es el número de valores, devuelve None.", "Prueba tus ideas con una imagen de 3x3."],
      predict: "Si aplanas una cuadrícula y la vuelves a darle forma, ¿siempre obtienes la misma cuadrícula? ¿Cuándo no?",
      hints: ["flatten: visita cada fila y luego cada valor de esa fila.", "reshape: primero comprueba que el tamaño encaja. Luego corta la lista en trozos iguales.", "El trozo número i empieza en i * cols. Encuentra dónde termina."],
      library: "Con NumPy: image.reshape(3, 3). El resultado es el mismo, en una sola llamada."
    },
    "05_scale_0_1": {
      why: "Las características pueden tener tamaños muy distintos: edad 30, sueldo 50000. Los modelos aprenden mejor cuando todas están en una escala parecida. El escalado min-max es la forma más simple.",
      task: ["Escribe scale_0_1(values). Para cada valor calcula (valor - mínimo) / (máximo - mínimo).", "En palabras: ¿a qué distancia está el valor del mínimo, como parte del rango total? El mínimo pasa a ser 0.0. El máximo pasa a ser 1.0.", "Si todos los valores son iguales, el rango es 0. No se puede dividir entre 0. Devuelve 0.0 para cada valor. Para [] devuelve []."],
      predict: "¿Qué da scale_0_1([7, 7, 7]) si no tratas ese caso? Di qué error esperas.",
      hints: ["Busca el mínimo y el máximo una sola vez, antes del bucle.", "El rango es máximo menos mínimo. ¿Cuándo es cero?", "Trata la lista vacía y el caso de valores iguales antes de dividir."],
      library: "scikit-learn: MinMaxScaler().fit_transform(X) hace lo mismo para cada columna."
    },
    "06_tokenize": {
      why: "Un modelo de lenguaje no puede leer texto en bruto. Primero se corta el texto en piezas pequeñas llamadas tokens. Los tokenizadores reales son más listos, pero la idea empieza aquí.",
      task: ["Escribe tokenize(text). Pasa las letras a minúsculas. Quita todos los signos de puntuación. Separa en palabras.", "Los espacios extra no deben crear palabras vacías. Devuelve una lista de palabras."],
      predict: "¿Qué esperas de tokenize(\"It's me.\")? Una de las palabras puede sorprenderte.",
      hints: ["En la biblioteca estándar hay una cadena ya hecha con todos los signos de puntuación.", "Puedes quitar la puntuación al principio o al final. ¿Cambia el orden el resultado?", "split sin argumentos maneja muchos espacios y saltos de línea."],
      library: "Las bibliotecas reales (por ejemplo NLTK o Hugging Face) tienen tokenizadores. El tuyo es la idea más simple de ellos."
    },
    "07_top_words": {
      why: "Contar palabras es el primer paso de muchos métodos de texto. Muestra de qué trata un texto. También muestra por qué las palabras raras son un problema para los modelos.",
      task: ["Escribe top_words(tokens, n). Devuelve una lista de tuplas (palabra, cuenta) con las n palabras más comunes. Las más comunes primero.", "Si dos palabras tienen la misma cuenta, va primero la que viene antes en el alfabeto.", "Si n es mayor que el número de palabras distintas, devuelve todas."],
      predict: "Dos palabras aparecen 2 veces cada una. ¿Cuál debería ir primero en tu lista y por qué?",
      hints: ["Primero cuenta las palabras en un diccionario. Luego piensa en ordenar.", "Puedes ordenar por más de una cosa: una tupla sirve como clave.", "Para ordenar de mayor a menor por cuenta, pero de A a Z por palabra, usa un pequeño truco con el signo de la cuenta."],
      library: "collections.Counter(tokens).most_common(n)"
    },
    "08_vocab": {
      why: "Los modelos trabajan con números, no con palabras. Un vocabulario da a cada palabra un id. Las palabras que no están en el vocabulario se convierten en un token especial. Así funcionan también los tokenizadores reales.",
      task: ["Escribe build_vocab(tokens): devuelve un diccionario {palabra: id}. El token \"<unk>\" siempre tiene id 0. Las demás palabras reciben los ids 1, 2, 3 ... en orden de primera aparición. Cada palabra aparece una vez.", "Escribe encode(tokens, vocab): una lista de ids. Una palabra que no está en vocab recibe el id de \"<unk>\".", "Escribe decode(ids, vocab): una lista de palabras. Un id desconocido pasa a ser \"<unk>\"."],
      predict: "Codificas un texto con una palabra nueva y luego lo decodificas. ¿Obtienes el mismo texto? ¿Por qué?",
      hints: ["El siguiente id libre es siempre el tamaño actual del diccionario.", "Para encode, pide la palabra al diccionario, pero da un valor por defecto cuando falte.", "Para decode necesitas el diccionario inverso: de id a palabra."],
      library: "Los tokenizadores de Hugging Face también guardan un vocab y un token desconocido."
    },
    "09_bigrams": {
      why: "Un modelo de bigramas adivina la siguiente palabra a partir de la última. Es un modelo de lenguaje diminuto hecho solo de cuentas. Los modelos grandes hacen el mismo trabajo de una forma mucho más rica.",
      task: ["Escribe bigram_counts(tokens). Devuelve un diccionario de diccionarios: counts[first][second] es cuántas veces second vino justo después de first. Solo las palabras que tienen siguiente son claves.", "Escribe predict_next(counts, word). Devuelve la palabra siguiente con la cuenta más alta. En caso de empate, devuelve la primera en el alfabeto. Para una palabra desconocida, devuelve None."],
      predict: "En \"the cat sat on the mat the cat ran\", ¿qué sigue más a menudo a \"the\"?",
      hints: ["Mira parejas de vecinas: la palabra y la siguiente. ¿Cómo puedes formar esas parejas?", "Si la primera palabra es nueva, necesita su propio diccionario interno antes de poder contar en él.", "Patrón de conteo: cuenta nueva = cuenta vieja (o 0) + 1."],
      library: "Esta es la idea de makemore de Karpathy (modelo de bigramas), pero con letras. Mira su serie de vídeos «Neural Networks: Zero to Hero»."
    },
    "10_generate": {
      why: "Un modelo de lenguaje escribe texto eligiendo una palabra, luego la siguiente, una y otra vez. La elección es aleatoria, pero sigue probabilidades. Esto se llama muestreo (sampling).",
      task: ["Escribe generate(counts, start, n, seed). Usa un diccionario counts como en el ejercicio 09.", "Empieza con la palabra start. Repite hasta n veces: elige la siguiente palabra al azar. Una cuenta más alta da más probabilidad. Añádela al resultado. Si la palabra actual no tiene siguientes, para antes.", "Llama primero a random.seed(seed), para que la misma semilla dé el mismo texto. Devuelve la lista de palabras, con start incluida."],
      predict: "Si un seguidor tiene cuenta 1000 y otro 1, ¿con qué frecuencia se elegirá el segundo? ¿Unas cuántas veces en 1000 intentos?",
      hints: ["Necesitas una función que elija de una lista con pesos. Las cuentas son los pesos.", "La palabra elegida pasa a ser la palabra actual. Repite.", "¿Dónde hay que fijar la semilla: antes del bucle o dentro?"],
      library: "Los grandes modelos de lenguaje también muestrean el siguiente token según probabilidades. Un ajuste llamado temperature cambia lo arriesgada que es la elección."
    },
    "11_metrics": {
      why: "¿Qué tan bueno es un modelo? La accuracy es el primer número que se mira. Pero puede engañar. Los cuatro conteos de una tabla de confusión muestran qué tipo de errores comete el modelo.",
      task: ["Las etiquetas son 1 (sí) o 0 (no). Escribe accuracy(preds, labels): la parte de predicciones correctas, de 0 a 1.", "Escribe confusion_counts(preds, labels): un diccionario con TP (dijo 1, verdad 1), FP (dijo 1, verdad 0), TN (dijo 0, verdad 0), FN (dijo 0, verdad 1).", "Longitudes distintas: devuelve None. Listas vacías: la accuracy es 0.0."],
      predict: "Una prueba tiene 95 «no» y 5 «sí». Un modelo siempre dice «no». ¿Cuál es su accuracy?",
      hints: ["La accuracy son las predicciones correctas divididas entre todas las predicciones.", "Cada pareja de valores pertenece exactamente a uno de cuatro casos.", "Primera letra T o F: ¿acertó el modelo? Segunda letra P o N: ¿qué dijo?"],
      library: "scikit-learn: sklearn.metrics.accuracy_score y sklearn.metrics.confusion_matrix"
    },
    "12_train_test_split": {
      why: "Un modelo debe probarse con datos que nunca ha visto. Si los datos de prueba se filtran al entrenamiento, la puntuación parece demasiado buena y el modelo falla en la vida real. Dividir los datos primero es la defensa básica.",
      task: ["Escribe train_test_split(data, test_ratio, seed). Copia la lista. Mezcla la copia con la semilla. El tamaño de prueba es int(len(data) * test_ratio). Los primeros elementos son la parte de prueba, el resto es la parte de entrenamiento. Devuelve (train, test).", "NO cambies la lista original.", "Fuga de datos (data leakage) significa: información de la parte de prueba entra en el entrenamiento. Por ejemplo, el mismo elemento está en ambas partes."],
      predict: "Si mezclas la lista original en el sitio, ¿qué le pasa a quien la usa?",
      hints: ["Algunos métodos de lista cambian la propia lista y no devuelven nada. ¿Es shuffle uno de ellos?", "Haz una copia antes de mezclar.", "Los cortes (slices) te dan las dos partes. Piensa dónde está el corte."],
      library: "scikit-learn: sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)"
    },
    "13_batches": {
      why: "Los datos de entrenamiento suelen ser demasiado grandes para cargarlos de una vez. Los modelos los leen en grupos pequeños llamados lotes (batches). Un generador produce un lote cada vez y no guarda todos.",
      task: ["Escribe batches(data, size) como generador. Usa yield, no return. Cada yield da una lista de size elementos. El último lote puede ser más pequeño.", "No construyas todos los lotes antes."],
      predict: "¿Cuál es la diferencia entre return y yield? ¿Qué obtienes al llamar a una función generadora?",
      hints: ["Una función con yield no se ejecuta cuando la llamas. Se ejecuta cuando pides el siguiente valor.", "Recorre los datos con un paso igual al tamaño del lote.", "Cortar más allá del final de una lista es seguro. Solo da una lista más corta."],
      library: "PyTorch: torch.utils.data.DataLoader(dataset, batch_size=32) da lotes en un bucle."
    },
    "14_dataset": {
      why: "PyTorch pide un Dataset: un objeto que conoce su tamaño y devuelve un ejemplo por posición. Tu propia clase puede seguir las mismas reglas. Así comparten las bibliotecas un contrato simple.",
      task: ["Escribe la clase Dataset con:", "__init__(self, items, labels): guarda ambas listas.", "__len__(self): el número de ejemplos.", "__getitem__(self, index): devuelve la tupla (item, label). Los índices negativos funcionan como en una lista. Un índice demasiado grande lanza IndexError."],
      predict: "¿Qué pasa cuando escribes len(x) con tu propia clase? ¿Qué método llama Python?",
      hints: ["Los métodos especiales llevan guiones bajos dobles. Python los llama por ti cuando usas len() o [ ].", "Tus listas ya saben manejar índices negativos y demasiado grandes.", "Devuelve ambas piezas juntas en una tupla."],
      library: "PyTorch: hereda de torch.utils.data.Dataset y escribe __len__ y __getitem__. La misma idea."
    },
    "15_nearest_neighbor": {
      why: "El vecino más cercano es un modelo real que no necesita matemáticas de entrenamiento. Recuerda ejemplos y copia la etiqueta del más cercano. También muestra el patrón fit y predict que se usa en todo scikit-learn.",
      task: ["Escribe la clase NearestNeighbor con fit(self, X, y) y predict(self, x).", "fit recuerda los puntos X y las etiquetas y. predict devuelve la etiqueta del punto más cercano.", "Distancia al cuadrado: en cada posición toma la diferencia, elévala al cuadrado y suma todo. Nos saltamos la raíz cuadrada. El orden de las distancias se mantiene.", "Empate: gana el punto que va primero en X. Si nunca se llamó a fit, predict devuelve None."],
      predict: "¿Por qué podemos saltarnos la raíz cuadrada si solo queremos el punto más cercano?",
      hints: ["fit solo guarda. ¿Dónde puede un objeto guardar cosas entre dos llamadas a métodos?", "Calcula una distancia por cada punto guardado. Recuerda la mejor hasta ahora.", "Usa un «menor que» estricto al comparar, para que el primer punto gane un empate."],
      library: "scikit-learn: KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)"
    }
  }
};
