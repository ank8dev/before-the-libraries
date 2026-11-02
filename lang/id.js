window.I18N = window.I18N || {};
window.I18N.id = {
  subtitle: "15 latihan Python kecil yang menyiapkan Anda untuk NumPy, pandas, scikit-learn, dan PyTorch.",
  blocks: {
    numbers: { title: "Blok 1: Angka", note: "Persiapan untuk NumPy" },
    text: { title: "Blok 2: Teks", note: "Persiapan untuk tokenizer dan model bahasa" },
    evaluating: { title: "Blok 3: Mengevaluasi model", note: "Persiapan untuk scikit-learn" },
    classes: { title: "Blok 4: Kelas yang bekerja seperti pustaka", note: "Persiapan untuk PyTorch dan scikit-learn" }
  },
  ui: {
    doneCount: "{n}/{total} selesai", contents: "Daftar isi", skip: "Lompat ke konten", design: "Bagaimana ini dirancang", repo: "Kode sumber di GitHub", langLabel: "Bahasa",
    progress: "Kemajuan: {n}/{total}", start: "Mulai dari latihan 1", cont: "Lanjut: {title}", allDone: "Semua selesai. Ulangi latihan 1",
    howTo: "Cara belajar",
    steps: ["Baca tugasnya. Jawab pertanyaan «Prediksi dulu» di dalam hati.", "Klik «Jalankan contoh». Gambar menunjukkan apa yang masuk dan apa yang keluar.", "Tulis kode Anda di editor. Pakai istilah di «Cari ini». Buka petunjuk hanya jika Anda buntu.", "Klik «Periksa kode saya». Setiap pemeriksaan menunjukkan lulus atau gagal, beserta hasil Anda dan hasil yang diharapkan.", "Jika semua pemeriksaan lulus, latihan ditandai selesai dan «Hubungan dengan pustaka» muncul."],
    localNote: "Kode dan kemajuan Anda hanya tersimpan di peramban ini. Python berjalan di dalam halaman. Tidak ada yang dikirim ke server.",
    resetAll: "Hapus semua kemajuan dan kode tersimpan", confirmReset: "Hapus semua kemajuan dan kode tersimpan di peramban ini?",
    exOf: "Latihan {n} dari {total}", why: "Mengapa ini penting dalam AI", task: "Tugas", exIn: "Contoh masukan", exOut: "Contoh keluaran",
    predict: "Prediksi dulu", predictNote: "Tulis jawaban Anda. Lalu klik «Jalankan contoh» dan bandingkan.", lookup: "Cari ini",
    hints: "Petunjuk", hint: "Petunjuk {n}", lib: "Hubungan dengan pustaka", libLocked: "Tersembunyi sampai Anda menandai latihan ini selesai. Selesaikan dulu.", markDone: "Tandai selesai",
    bench: "Area kerja", copy: "Salin kode awal", copied: "Tersalin", copyFail: "Gagal menyalin", reset: "Kembalikan ke kode awal", confirmStarter: "Ganti kode Anda dengan kode awal?",
    gh: "Berkas di GitHub", edNote: "Tab membuat indentasi. Tekan Esc lalu Tab untuk keluar dari editor. Ctrl+Enter menjalankan contoh. Ctrl+Shift+Enter memeriksa kode Anda.",
    runEx: "Jalankan contoh", check: "Periksa kode saya", running: "Berjalan...", tryTitle: "Contoh untuk dijalankan (boleh diubah)", checksTitle: "Pemeriksaan",
    py_idle: "Python: belum dimulai", py_loading: "Python: memuat (sekitar 10 MB, hanya pertama kali)...", py_ready: "Python: siap",
    py_failed: "Python: tidak tersedia di sini. Jalankan berkasnya di komputer Anda.",
    errTitle: "Python berhenti karena error", errLine: "(baris {n} dari {where})", whereCode: "kode Anda", whereExample: "contoh",
    unavail: "Python tidak dapat dimuat di peramban ini (tidak ada internet, atau CDN diblokir). Anda tetap bisa mengerjakan latihan: buka berkas dari repositori dan jalankan python3 di komputer Anda.",
    timeout: "Dihentikan setelah 8 detik. Mungkin ada perulangan yang tidak pernah berakhir? Periksa while Anda.",
    allPassed: "Semua {n} pemeriksaan lulus.", somePassed: "{ok} dari {n} pemeriksaan lulus.", pass: "lulus", fail: "gagal",
    gives: "kode Anda menghasilkan", wants: "pemeriksaan mengharapkan ({op})", printed: "Keluaran cetak", returns: "fungsi Anda mengembalikan", output: "Keluaran", input: "Masukan: {name}",
    nothing: "Tidak ada yang ditampilkan. Letakkan ekspresi di baris terakhir, misalnya pemanggilan fungsi.",
    marked: "Latihan ditandai selesai.", libPrefix: "Hubungan dengan pustaka:", next: "Berikutnya: {title}", aria_editor: "Editor kode Python", aria_snip: "Kode contoh untuk dijalankan",
    v_object: "objek", v_none: "kosong (None)", v_text: "teks", v_bool: "True atau False", v_number: "angka", v_emptyList: "daftar kosong", v_listNums: "daftar berisi {n} angka",
    v_pairs: "{n} pasangan (kata, jumlah)", v_grid: "kisi: {r} baris x {c} kolom", v_ragged: "{n} daftar dengan panjang berbeda", v_listItems: "daftar berisi {n} item",
    v_emptyDict: "dictionary kosong", v_dictKeys: "dictionary dengan {n} kunci", v_matrix: "tabel: baris = kata pertama, kolom = kata berikutnya, angka = jumlah", v_corner: "pertama \\ berikutnya", v_value: "nilai", v_key: "kunci"
  },
  ex: {
    "01_add_vectors": {
      why: "Banyak model bekerja dengan vektor: daftar angka. Menjumlahkan dua vektor adalah salah satu langkah yang paling umum. NumPy melakukannya untuk seluruh array dalam satu baris.",
      task: ["Tulis add_vectors(a, b). Fungsi ini mengembalikan daftar BARU yang setiap itemnya adalah a[i] + b[i].", "Jika panjang daftar berbeda, kembalikan None. Jangan ubah a dan b."],
      predict: "Apa yang seharusnya dikembalikan add_vectors([1, 2], [1, 2, 3])? Putuskan dulu, lalu lihat docstring.",
      hints: ["Anda perlu menelusuri kedua daftar pada posisi yang sama. Alat apa yang menelusuri dua daftar sekaligus?", "Buat daftar kosong dulu. Lalu tambahkan satu hasil untuk setiap pasangan.", "Periksa panjangnya sebelum perulangan. Mengembalikan lebih awal boleh saja."],
      library: "Dengan array NumPy: a + b. Pustaka menjumlahkan item demi item untuk Anda."
    },
    "02_dot": {
      why: "Unit mirip neuron mencampur masukannya dengan bobot. Campuran itu adalah hasil kali titik (dot product). Ini operasi utama di dalam sebagian besar jaringan saraf.",
      task: ["Tulis dot(a, b). Kalikan setiap pasangan a[i] * b[i]. Lalu jumlahkan semua hasilnya.", "Anggap a sebagai bobot dan b sebagai masukan. Bobot menunjukkan seberapa penting tiap masukan. Jawabannya satu angka: jumlah berbobot.", "Panjang berbeda: kembalikan None. Daftar kosong: kembalikan 0."],
      predict: "Pada dot([1, 0, 1], [10, 99, 20]), apa yang dilakukan angka 0 terhadap nilai 99?",
      hints: ["Ini mirip latihan 01. Apa bedanya: hasilnya daftar atau satu angka?", "Simpan total berjalan. Mulai dari nol.", "Bobot 0 berarti: masukan ini diabaikan. Coba gagasan ini di atas kertas."],
      library: "np.dot(a, b) memberi angka yang sama untuk dua array 1-D."
    },
    "03_matrix_shape": {
      why: "Data dalam AI sering berupa tabel angka: matriks. Sebelum melakukan apa pun, Anda memeriksa bentuknya (shape). Bentuk yang salah adalah kesalahan paling umum dalam kode NumPy dan PyTorch.",
      task: ["Matriks adalah daftar baris. Tulis shape(matrix) yang mengembalikan (baris, kolom). Untuk [] kembalikan (0, 0).", "Tulis transpose(matrix) yang mengembalikan matriks baru di mana baris menjadi kolom. Matriks asli tidak boleh berubah."],
      predict: "Sebuah matriks berbentuk (2, 3). Apa bentuknya setelah ditranspos? Katakan sebelum membuat kode.",
      hints: ["Bentuk hanya butuh dua panjang: panjang daftar dan panjang baris pertamanya.", "Di matriks baru, baris pertama adalah item pertama dari setiap baris lama.", "Pakai dua perulangan. Yang luar menghitung kolom. Yang dalam menghitung baris."],
      library: "Dengan NumPy: m.shape dan m.T"
    },
    "04_flatten_reshape": {
      why: "Sebuah gambar adalah kisi piksel. Banyak model menginginkan satu daftar panjang. Mengubah bentuk tanpa mengubah data disebut reshape. Anda akan sering memakainya.",
      task: ["Tulis flatten(image): ubah kisi menjadi satu daftar, baris demi baris.", "Tulis reshape(values, rows, cols): ubah daftar datar menjadi kisi. Jika rows * cols tidak sama dengan jumlah nilai, kembalikan None.", "Gunakan gambar 3x3 untuk menguji gagasan Anda."],
      predict: "Jika Anda meratakan kisi lalu membentuknya kembali, apakah selalu mendapat kisi yang sama? Kapan tidak?",
      hints: ["flatten: kunjungi setiap baris, lalu setiap nilai di baris itu.", "reshape: periksa dulu apakah ukurannya cocok. Lalu potong daftar menjadi bagian yang sama besar.", "Bagian nomor i dimulai di i * cols. Cari di mana bagian itu berakhir."],
      library: "Dengan NumPy: image.reshape(3, 3). Hasilnya sama, dalam satu pemanggilan."
    },
    "05_scale_0_1": {
      why: "Fitur bisa punya ukuran yang sangat berbeda: usia 30, gaji 50000. Model belajar lebih baik jika semua fitur berada pada skala yang mirip. Penskalaan min-max adalah cara paling sederhana.",
      task: ["Tulis scale_0_1(values). Untuk setiap nilai hitung (nilai - terkecil) / (terbesar - terkecil).", "Dengan kata lain: seberapa jauh nilai dari yang terkecil, sebagai bagian dari seluruh rentang? Yang terkecil menjadi 0.0. Yang terbesar menjadi 1.0.", "Jika semua nilai sama, rentangnya 0. Tidak bisa dibagi 0. Kembalikan 0.0 untuk setiap nilai. Untuk [] kembalikan []."],
      predict: "Apa yang terjadi pada scale_0_1([7, 7, 7]) jika Anda tidak menangani kasus itu? Sebutkan error yang Anda duga.",
      hints: ["Cari nilai terkecil dan terbesar sekali saja, sebelum perulangan.", "Rentang adalah terbesar dikurangi terkecil. Kapan rentang itu nol?", "Tangani daftar kosong dan kasus nilai yang sama sebelum membagi."],
      library: "scikit-learn: MinMaxScaler().fit_transform(X) melakukan hal yang sama untuk setiap kolom."
    },
    "06_tokenize": {
      why: "Model bahasa tidak bisa membaca teks mentah. Pertama teks dipotong menjadi potongan kecil yang disebut token. Tokenizer sungguhan lebih pintar, tetapi gagasannya dimulai dari sini.",
      task: ["Tulis tokenize(text). Ubah huruf menjadi huruf kecil. Hapus semua tanda baca. Pecah menjadi kata.", "Spasi berlebih tidak boleh menghasilkan kata kosong. Kembalikan daftar kata."],
      predict: "Apa yang Anda harapkan dari tokenize(\"It's me.\")? Salah satu kata mungkin mengejutkan Anda.",
      hints: ["Di pustaka standar ada string siap pakai berisi semua tanda baca.", "Anda bisa menghapus tanda baca di awal atau di akhir. Apakah urutan mengubah hasil?", "split tanpa argumen menangani banyak spasi dan baris baru."],
      library: "Pustaka sungguhan (misalnya NLTK atau Hugging Face) punya tokenizer. Milik Anda adalah gagasan paling sederhana dari semua itu."
    },
    "07_top_words": {
      why: "Menghitung kata adalah langkah pertama dari banyak metode teks. Ini menunjukkan tentang apa sebuah teks. Ini juga menunjukkan mengapa kata langka menjadi masalah bagi model.",
      task: ["Tulis top_words(tokens, n). Kembalikan daftar tuple (kata, jumlah) untuk n kata paling umum. Yang paling umum lebih dulu.", "Jika dua kata punya jumlah sama, kata yang lebih awal dalam abjad didahulukan.", "Jika n lebih besar dari jumlah kata berbeda, kembalikan semuanya."],
      predict: "Dua kata muncul masing-masing 2 kali. Mana yang harus lebih dulu di daftar Anda, dan mengapa?",
      hints: ["Hitung dulu kata di dalam dictionary. Lalu pikirkan pengurutan.", "Anda bisa mengurutkan berdasarkan lebih dari satu hal: tuple bisa menjadi kunci.", "Untuk mengurutkan jumlah dari besar ke kecil, tetapi kata dari A ke Z, pakai trik kecil dengan tanda dari jumlah."],
      library: "collections.Counter(tokens).most_common(n)"
    },
    "08_vocab": {
      why: "Model bekerja dengan angka, bukan kata. Kosakata (vocabulary) memberi setiap kata sebuah id. Kata yang tidak ada di kosakata menjadi satu token khusus. Tokenizer sungguhan juga bekerja seperti ini.",
      task: ["Tulis build_vocab(tokens): kembalikan dictionary {kata: id}. Token \"<unk>\" selalu punya id 0. Kata lain mendapat id 1, 2, 3 ... menurut urutan kemunculan pertama. Setiap kata muncul sekali.", "Tulis encode(tokens, vocab): daftar id. Kata yang tidak ada di vocab mendapat id dari \"<unk>\".", "Tulis decode(ids, vocab): daftar kata. Id yang tidak dikenal menjadi \"<unk>\"."],
      predict: "Anda meng-encode teks yang berisi kata baru, lalu men-decode-nya kembali. Apakah teksnya sama? Mengapa?",
      hints: ["Id kosong berikutnya selalu sama dengan ukuran dictionary saat ini.", "Untuk encode, tanyakan kata kepada dictionary, tetapi beri nilai bawaan jika kata tidak ada.", "Untuk decode Anda butuh dictionary kebalikan: dari id ke kata."],
      library: "Tokenizer Hugging Face juga menyimpan vocab dan token tak dikenal."
    },
    "09_bigrams": {
      why: "Model bigram menebak kata berikutnya dari kata terakhir. Ini model bahasa mungil yang hanya terbuat dari hitungan. Model besar melakukan pekerjaan yang sama dengan cara yang jauh lebih kaya.",
      task: ["Tulis bigram_counts(tokens). Kembalikan dictionary berisi dictionary: counts[first][second] adalah berapa kali second muncul tepat setelah first. Hanya kata yang punya kata penerus yang menjadi kunci.", "Tulis predict_next(counts, word). Kembalikan kata penerus dengan jumlah tertinggi. Jika seri, kembalikan yang pertama dalam abjad. Untuk kata tak dikenal, kembalikan None."],
      predict: "Pada \"the cat sat on the mat the cat ran\", apa yang paling sering mengikuti \"the\"?",
      hints: ["Lihat pasangan bertetangga: sebuah kata dan kata sesudahnya. Bagaimana membuat pasangan seperti itu?", "Jika kata pertama baru, ia butuh dictionary dalam miliknya sendiri sebelum Anda bisa menghitung di dalamnya.", "Pola menghitung: jumlah baru = jumlah lama (atau 0) + 1."],
      library: "Ini gagasan makemore dari Karpathy (model bigram), tetapi dengan huruf. Tonton seri videonya «Neural Networks: Zero to Hero»."
    },
    "10_generate": {
      why: "Model bahasa menulis teks dengan memilih satu kata, lalu kata berikutnya, berulang-ulang. Pilihannya acak, tetapi mengikuti probabilitas. Ini disebut pengambilan sampel (sampling).",
      task: ["Tulis generate(counts, start, n, seed). Gunakan dictionary counts seperti di latihan 09.", "Mulai dengan kata start. Ulangi hingga n kali: pilih kata berikutnya secara acak. Jumlah yang lebih tinggi berarti peluang lebih besar. Tambahkan ke hasil. Jika kata saat ini tidak punya penerus, berhenti lebih awal.", "Panggil random.seed(seed) lebih dulu, agar seed yang sama menghasilkan teks yang sama. Kembalikan daftar kata, termasuk start."],
      predict: "Jika satu penerus berjumlah 1000 dan yang lain 1, seberapa sering yang kedua dipilih? Kira-kira berapa kali dalam 1000 percobaan?",
      hints: ["Anda butuh satu fungsi yang memilih dari daftar dengan bobot. Jumlahnya adalah bobot.", "Kata yang dipilih menjadi kata saat ini yang baru. Ulangi.", "Di mana seed harus diatur: sebelum perulangan, atau di dalamnya?"],
      library: "Model bahasa besar juga mengambil sampel token berikutnya menurut probabilitas. Pengaturan bernama temperature mengubah seberapa berani pilihannya."
    },
    "11_metrics": {
      why: "Seberapa bagus sebuah model? Akurasi (accuracy) adalah angka pertama yang dilihat orang. Tetapi angka itu bisa menipu. Empat hitungan dalam tabel konfusi menunjukkan jenis kesalahan yang dibuat model.",
      task: ["Label adalah 1 (ya) atau 0 (tidak). Tulis accuracy(preds, labels): bagian prediksi yang benar, dari 0 sampai 1.", "Tulis confusion_counts(preds, labels): dictionary dengan TP (bilang 1, kenyataan 1), FP (bilang 1, kenyataan 0), TN (bilang 0, kenyataan 0), FN (bilang 0, kenyataan 1).", "Panjang berbeda: kembalikan None. Daftar kosong: accuracy adalah 0.0."],
      predict: "Sebuah tes punya 95 «tidak» dan 5 «ya». Sebuah model selalu bilang «tidak». Berapa akurasinya?",
      hints: ["Akurasi adalah prediksi yang benar dibagi semua prediksi.", "Setiap pasangan nilai termasuk tepat satu dari empat kasus.", "Huruf pertama T atau F: apakah model benar? Huruf kedua P atau N: apa yang dikatakannya?"],
      library: "scikit-learn: sklearn.metrics.accuracy_score dan sklearn.metrics.confusion_matrix"
    },
    "12_train_test_split": {
      why: "Model harus diuji dengan data yang belum pernah dilihatnya. Jika data uji bocor ke pelatihan, skornya tampak terlalu bagus dan model gagal di dunia nyata. Memisahkan data lebih dulu adalah pertahanan dasar.",
      task: ["Tulis train_test_split(data, test_ratio, seed). Salin daftarnya. Acak salinan dengan seed. Ukuran uji adalah int(len(data) * test_ratio). Item pertama menjadi bagian uji, sisanya bagian latih. Kembalikan (train, test).", "JANGAN ubah daftar asli.", "Kebocoran data (data leakage) berarti: informasi dari bagian uji masuk ke pelatihan. Misalnya, item yang sama ada di kedua bagian."],
      predict: "Jika Anda mengacak daftar asli di tempat, apa yang terjadi pada pemilik daftar itu?",
      hints: ["Beberapa metode daftar mengubah daftar itu sendiri dan tidak mengembalikan apa pun. Apakah shuffle salah satunya?", "Buat salinan sebelum mengacak.", "Pengirisan (slicing) memberi Anda kedua bagian. Pikirkan di mana letak potongannya."],
      library: "scikit-learn: sklearn.model_selection.train_test_split(X, y, test_size=0.2, random_state=0)"
    },
    "13_batches": {
      why: "Data pelatihan sering terlalu besar untuk dimuat sekaligus. Model membacanya dalam kelompok kecil yang disebut batch. Generator membuat satu batch pada satu waktu dan tidak menyimpan semuanya.",
      task: ["Tulis batches(data, size) sebagai generator. Pakai yield, bukan return. Setiap yield memberi daftar berisi size item. Batch terakhir boleh lebih kecil.", "Jangan membangun semua batch lebih dulu."],
      predict: "Apa beda return dan yield? Apa yang Anda dapat saat memanggil fungsi generator?",
      hints: ["Fungsi dengan yield tidak berjalan saat dipanggil. Ia berjalan saat Anda meminta nilai berikutnya.", "Telusuri data dengan langkah sebesar ukuran batch.", "Mengiris melewati akhir daftar aman. Hasilnya hanya daftar yang lebih pendek."],
      library: "PyTorch: torch.utils.data.DataLoader(dataset, batch_size=32) memberi batch dalam sebuah perulangan."
    },
    "14_dataset": {
      why: "PyTorch meminta sebuah Dataset: objek yang tahu ukurannya dan memberi satu contoh menurut posisi. Kelas buatan Anda sendiri bisa mengikuti aturan yang sama. Begitulah pustaka berbagi satu kesepakatan sederhana.",
      task: ["Tulis kelas Dataset dengan:", "__init__(self, items, labels): simpan kedua daftar.", "__len__(self): jumlah contoh.", "__getitem__(self, index): kembalikan tuple (item, label). Indeks negatif bekerja seperti pada daftar. Indeks yang terlalu besar memunculkan IndexError."],
      predict: "Apa yang terjadi ketika Anda menulis len(x) untuk kelas buatan sendiri? Metode mana yang dipanggil Python?",
      hints: ["Metode khusus memiliki garis bawah ganda. Python memanggilnya untuk Anda saat Anda memakai len() atau [ ].", "Daftar Anda sudah bisa menangani indeks negatif dan yang terlalu besar.", "Kembalikan kedua bagian bersama dalam satu tuple."],
      library: "PyTorch: turunkan dari torch.utils.data.Dataset dan tulis __len__ dan __getitem__. Gagasan yang sama."
    },
    "15_nearest_neighbor": {
      why: "Tetangga terdekat adalah model sungguhan yang tidak butuh matematika pelatihan. Ia mengingat contoh dan menyalin label yang terdekat. Ia juga menunjukkan pola fit dan predict yang dipakai di seluruh scikit-learn.",
      task: ["Tulis kelas NearestNeighbor dengan fit(self, X, y) dan predict(self, x).", "fit mengingat titik X dan label y. predict mengembalikan label titik terdekat.", "Jarak kuadrat: di setiap posisi ambil selisih, kuadratkan, lalu jumlahkan semuanya. Kita lewati akar kuadrat. Urutan jarak tetap sama.", "Seri: titik yang lebih dulu di X menang. Jika fit belum pernah dipanggil, predict mengembalikan None."],
      predict: "Mengapa kita boleh melewati akar kuadrat jika hanya menginginkan titik terdekat?",
      hints: ["fit hanya menyimpan. Di mana sebuah objek bisa menyimpan sesuatu di antara dua pemanggilan metode?", "Hitung satu jarak untuk setiap titik yang tersimpan. Ingat yang terbaik sejauh ini.", "Pakai «lebih kecil dari» yang ketat saat membandingkan, agar titik pertama menang saat seri."],
      library: "scikit-learn: KNeighborsClassifier(n_neighbors=1).fit(X, y).predict(...)"
    }
  }
};
