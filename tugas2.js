const mahasiswa = {
    id: 1,
    nama: "Ale",
    prodi: "Sistem Informasi",
    hobi: ["Membaca", "Bermain Game"]
};

const {nama, prodi} = mahasiswa;
console.log(`Mahasiswa bernama ${nama} dari prodi ${prodi}.`);

const hobiBaru = [...mahasiswa.hobi, "Coding"];
console.log("Hobi baru: ", hobiBaru)