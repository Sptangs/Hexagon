function startGame() {
    var player1Name = document.getElementById('player1Name').value;
    var player2Name = document.getElementById('player2Name').value;

    // Periksa apakah nama pemain telah dimasukkan
    if (player1Name.trim() === '') {
        alert("Please enter Player 1's name.");
        return;
    }

    // Periksa apakah nama Player 2 diperlukan dan telah dimasukkan
    if (document.getElementById('player2Prompt').style.display === 'block' && player2Name.trim() === '') {
        alert("Please enter Player 2's name.");
        return;
    }

    // Sembunyikan layar selamat datang
    document.getElementById('welcomeScreen').style.display = 'none';

    // Tampilkan konten permainan
    document.getElementById('gameinti').style.display = 'block';

    // Tampilkan nama pemain
    var playerNames = document.getElementById('playerNames');
    playerNames.innerHTML = "<p>Player 1: " + player1Name + "</p>";
    if (player2Name.trim() !== '') {
        playerNames.innerHTML += "<p>Player 2: " + player2Name + "</p>";
    }

    // Perbarui nama pemain di dalam papan permainan
    document.getElementById('player1Gameboard').innerText = player1Name;
    if (player2Name.trim() !== '') {
        document.getElementById('player2Gameboard').innerText = player2Name;
    }
}

function showPlayer2Input() {
    // Tampilkan input nama Player 2
    document.getElementById('player2Prompt').style.display = 'block';
    document.getElementById('player2Name').style.display = 'block';
    document.getElementById('player2Button').style.display = 'none'; // Sembunyikan tombol "Compete with Player 2"
}

function savePlayerName() {
    var player1Name = document.getElementById("player1Name").value;
    localStorage.setItem("player1Name", player1Name);
}