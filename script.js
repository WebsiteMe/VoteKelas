/// Fungsi untuk menyimpan vote ke Local Storage
function simpanVote(absen) {
    let votes = JSON.parse(localStorage.getItem('votes')) || {};
    votes[absen] = (votes[absen] || 0) + 1;
    localStorage.setItem('votes', JSON.stringify(votes));
}

// Fungsi untuk menampilkan hasil voting
function tampilkanHasil() {
    // Ambil data dari Local Storage
    let votes = JSON.parse(localStorage.getItem('votes')) || {};
    let resultDiv = document.getElementById('result');

    // Pastikan kita ada di halaman hasil sebelum mencoba menampilkan hasil
    if (resultDiv) {
        if (Object.keys(votes).length === 0) {
            // Jika tidak ada data voting
            resultDiv.innerHTML = '<p>Belum ada voting yang dilakukan.</p>';
        } else {
            // Buat HTML untuk menampilkan hasil voting
            let resultHTML = '<ul>';
            for (let absen in votes) {
                resultHTML += `<li>Absen ${absen}: ${votes[absen]} vote(s)</li>`;
            }
            resultHTML += '</ul>';
            resultDiv.innerHTML = resultHTML;
        }
    }
}

// Panggil fungsi untuk menampilkan hasil jika kita berada di halaman hasil
tampilkanHasil();

// Event listener untuk form voting
document.getElementById('votingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let absen = document.getElementById('absen').value;

    if (absen) {
        simpanVote(absen); // Simpan vote
        window.location.href = 'terimakasih.html'; // Arahkan ke halaman terima kasih
    } else {
        alert('Silakan pilih nomor absen.');
    }
});

// Event listener untuk form password (melihat hasil)
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;

    if (password === '200817') {
        window.location.href = 'hasil.html'; // Arahkan ke halaman hasil
    } else {
        alert('Sandi salah!');
    }
});

// Tampilkan hasil jika di halaman hasil
tampilkanHasil();


// Event listener untuk form voting
document.getElementById('votingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let absen = document.getElementById('absen').value;

    if (absen) {
        simpanVote(absen); // Simpan vote
        window.location.href = 'terimakasih.html'; // Arahkan ke halaman terima kasih
    } else {
        alert('Silakan pilih nomor absen.');
    }
});

// Event listener untuk form password (melihat hasil)
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;

    if (password === '200817') {
        window.location.href = 'hasil.html'; // Arahkan ke halaman hasil
    } else {
        alert('Sandi salah!');
    }
});

// Tampilkan hasil jika di halaman hasil
tampilkanHasil();
