var nama = "Budi";
function sapaES5(user) {
    return "Halo " + user + ", selamat datang!";
}
console.log(sapaES5(nama));

const namaModern = "Siti";
const sapaES6 = (user) => `Halo ${user}, selamat datang di era modern!`;
console.log(sapaES6(namaModern));
