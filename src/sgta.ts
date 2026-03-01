function luassegitiga(alas: number, tinggi: number): number {
  return 0.5 * alas * tinggi;
}

// 1. Simpan hasilnya ke dalam variabel
const hasil = luassegitiga(10, 5); 

// 2. Tampilkan di terminal
console.log("Luas Segitiga adalah: " + hasil);

// Atau panggil langsung di dalam console.log
console.log("Hasil tes kedua: ", luassegitiga(20, 10));