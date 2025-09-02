document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk memperbarui jam secara real-time
    function updateClock() {
        const now = new Date();
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Jakarta' // WIB
        };
        const timeString = now.toLocaleTimeString('id-ID', timeOptions);
        document.getElementById('real-time-clock').textContent = timeString;
    }

    // Fungsi untuk memperbarui status baterai
    function updateBatteryStatus() {
        if ("getBattery" in navigator) {
            navigator.getBattery().then(function(battery) {
                const batteryLevel = Math.round(battery.level * 100);
                const batteryIcon = document.getElementById('battery-status');
                
                if (battery.charging) {
                    batteryIcon.className = 'fas fa-battery-full';
                    batteryIcon.style.color = '#4CAF50'; // Warna hijau saat charging
                } else if (batteryLevel > 75) {
                    batteryIcon.className = 'fas fa-battery-full';
                    batteryIcon.style.color = '';
                } else if (batteryLevel > 50) {
                    batteryIcon.className = 'fas fa-battery-three-quarters';
                    batteryIcon.style.color = '';
                } else if (batteryLevel > 25) {
                    batteryIcon.className = 'fas fa-battery-half';
                    batteryIcon.style.color = '';
                } else {
                    batteryIcon.className = 'fas fa-battery-quarter';
                    batteryIcon.style.color = '#FF5733'; // Warna merah saat low
                }
                batteryIcon.setAttribute('title', `${batteryLevel}%`);
            });
        }
    }

    // Fungsi untuk memperbarui status koneksi (Wi-Fi/Offline)
    function updateNetworkStatus() {
        const wifiIcon = document.querySelector('.fa-wifi');
        if (navigator.onLine) {
            wifiIcon.style.display = 'inline-block';
        } else {
            wifiIcon.style.display = 'none';
        }
    }

    // Panggil fungsi saat halaman dimuat
    updateClock();
    updateBatteryStatus();
    updateNetworkStatus();

    // Atur interval pembaruan
    setInterval(updateClock, 1000);
    setInterval(updateBatteryStatus, 30000);
    
    // Dengarkan event koneksi online/offline
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
});