// Ambil elemen-elemen yang menampilkan nama pemain
var player1NameElement = document.getElementById("player1Name");
var player2NameElement = document.getElementById("player2Name");

// Ambil nama pemain dari input pada layar selamat datang
var player1Name = document.getElementById("player1Name").value;
var player2Name = document.getElementById("player2Name").value;

// Atur teks di dalam elemen-elemen nama pemain
player1NameElement.innerText = "Player 1: " + player1Name;
player2NameElement.innerText = "Player 2: " + player2Name;

// Data leaderboard
var leaderboardData = [
    { player: "Player 1", score: 100 },
    { player: "Player 2", score: 90 },
    { player: "Player 3", score: 80 },
    { player: "Player 4", score: 70 }
];

// Fungsi untuk mengisi tabel leaderboard
function populateLeaderboard() {
    var leaderboardTable = document.getElementById("leaderboardTable");

    // Bersihkan konten yang ada
    leaderboardTable.innerHTML = "";

    // Buat elemen tabel
    var table = document.createElement("table");

    // Buat header tabel
    var headerRow = table.insertRow();
    var playerHeader = headerRow.insertCell();
    playerHeader.textContent = "Player";
    var scoreHeader = headerRow.insertCell();
    scoreHeader.textContent = "Score";

    // Isi baris tabel dengan data leaderboard
    leaderboardData.forEach(function(entry) {
        var row = table.insertRow();
        var playerCell = row.insertCell();
        playerCell.textContent = entry.player;
        var scoreCell = row.insertCell();
        scoreCell.textContent = entry.score;
    });

    // Sisipkan tabel ke dalam div leaderboardTable
    leaderboardTable.appendChild(table);
}

// Isi leaderboard pada awalnya
populateLeaderboard();

// Fungsi untuk mendapatkan nama pemain dari local storage
function getPlayerName() {
    return localStorage.getItem("playerName");
}

// Panggil fungsi getPlayerName() untuk mendapatkan nama pemain
var playerName = getPlayerName();

// Lakukan sesuatu dengan nama pemain, misalnya menampilkan pada elemen tertentu
var playerNameElement = document.getElementById("playerNameElement");
playerNameElement.textContent = "Welcome, " + playerName + "!";

// Event listener ketika dokumen telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function() {
    // Ambil nama pemain dari local storage
    var player1Name = localStorage.getItem("player1Name");
    var player2Name = localStorage.getItem("player2Name");

    // Tampilkan nama pemain di elemen-elemen tertentu
    document.getElementById("player1NameElement").textContent = "Player 1: " + player1Name;
    document.getElementById("player2NameElement").textContent = "Player 2: " + player2Name;
});
 // Ambil elemen game score
 var gameScore = document.getElementById('gameScore');

 // Tambahkan event listener untuk mengubah warna saat diklik
 gameScore.addEventListener('click', function() {
     // Ubah warna background saat diklik
     if (gameScore.style.backgroundColor === 'red') {
         gameScore.style.backgroundColor = 'green';
     } else {
         gameScore.style.backgroundColor = 'red';
     }
 });