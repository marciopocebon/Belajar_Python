var daftar_tutorial = function () {
    var tutorial_pemula = {
      "pemula/pengenalan.html": "pengenalan dasar python",
      "pemula/program-pertama.html": "membuat program python pertama",
      "pemula/aturan-syntak.html": "aturan penulisan syntak di python",
      "pemula/variabel-type-data.html": "mengenal variabel dan type data pada python",
      "pemula/input-output.html": "mengambil input dan menghasilkan output",
      "pemula/operator.html": "memahami 6 jenis operator pada python",
      "pemula/list.html": "python List",
      "pemula/tuple.html": "python Tuple",
      "pemula/dictionary.html": "dictionary pada python",
      "pemula/percabangan_if_else.html": "percabangan if.. else pada python",
      "pemula/loop.html": "memahami loop pada python",
      "pemula/fungsi.html": "fungsi pada python",
      "pemula/try_exception.html": "memahami 'try.. except' di python",
      "pemula/tutorial_file.html": "Membaca dan Menulis File di Python",
    };
    var number = 1;
    for (var key in tutorial_pemula) {
      if (number < 10) {
        document.write("<a class=\"tutut\" href=\"" + key + "\" class=\"daf-tutorial-text\">0" + number + "." + tutorial_pemula[key] + "</a><span>");
      } else {
        document.write("<a class=\"tutut\" href=\"" + key + "\" class=\"daf-tutorial-text\">" + number + "." + tutorial_pemula[key] + "</a><span>");
      }
      number++;
    }
}
// operator
var operator_aritmatika = function () {
  var data = {
    "penjumlahan": "+",
    "pengurangan": "-",
    "pembagian": "/",
    "perkalian": "*",
    "sisa bagi": "%",
    "pemangkatan": "**"
  };
  for (var k in data) {
    document.write("<tr><td>" + k + "</td>");
    document.write("<td>" + data[k] + "</td></tr>");
  }
}

var operator_penugasan = function () {
  var data_operator_penugasan = {
    "pengisian": "=",
    "penjumlahan": "+=",
    "pengurangan": "-=",
    "perkalian": "*=",
    "pembagian": "/=",
    "sisa bagi": "%=",
    "pemangkatan": "**="
  };
  for (var p in data_operator_penugasan) {
    document.write("<tr><td>" + p + "</td><td>" + data_operator_penugasan[p] + "</td><tr>");
  }
}

var operator_pembandingan = function () {
  var data_operator_pembandingan = {
    "lebih besar": ">",
    "lebih kecil": "<",
    "lebih besar sama dengan": ">=",
    "lebih kecil sama dengan": "<=",
    "sama dengan": "==",
    "tidak sama dengan": "!="
  };
  for (var ng in data_operator_pembandingan) {
    document.write("<tr><td>" + ng + "</td><td>" + data_operator_pembandingan[ng] + "</td><tr>");
  }
}
var operator_logika = function () {
  var data_operator_logika = {
    "logika and/dan": "and",
    "logika or/atau": "or",
    "Negasi/kebalikan": "not"
  };
  for (var log in data_operator_logika) {
    document.write("<tr><td>" + log + "</td><td>" + data_operator_logika[log] + "</td><tr>");
  }
}
var operator_bitwise = function () {
  var data_operator_bitwise = {
    "AND": "&",
    "OR": "|",
    "XOR": "^",
    "Negasi/kebalikan": "~",
    "Left Shift": "<<",
    "Right Shift": ">>"
  };
  for (var bit in data_operator_bitwise) {
    document.write("<tr><td>" + bit + "</td><td>" + data_operator_bitwise[bit] + "</td><tr>");
  }
}