const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Pindah ke galeri pantai
function goToPantaiGallery() {
    window.location.href = 'galeri1.html';
}

// Pindah ke galeri jalan-jalan kota
function goToKotaGallery() {
    window.location.href = 'galeri2.html';
}

// Toggle musik
function toggleMusic() {
    if (bgMusic && !bgMusic.paused) {
        bgMusic.pause();
        musicToggle.textContent = '▶️ Mainkan Musik';
    } else if (bgMusic) {
        bgMusic.play().catch(() => {
            console.log('Musik tidak bisa dimainkan (mungkin file tidak ada).');
        });
        musicToggle.textContent = '⏸️ Pause Musik';
    }
}
