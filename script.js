document.getElementById('startTest').addEventListener('click', function() {
    startSpeedTest();
});

function startSpeedTest() {
    const downloadSpeedElement = document.getElementById('downloadSpeed');
    const uploadSpeedElement = document.getElementById('uploadSpeed');
    const pingElement = document.getElementById('ping');
    const progressBar = document.getElementById('progress');

    // Reset results
    downloadSpeedElement.textContent = '0';
    uploadSpeedElement.textContent = '0';
    pingElement.textContent = '0';
    progressBar.style.width = '0';

    const test = new SpeedTest();

    test.on('downloadspeed', function(speed) {
        downloadSpeedElement.textContent = speed.toFixed(2);
        progressBar.style.width = `${(speed / 100) * 100}%`; // Adjust based on expected max speed
    });

    test.on('uploadspeed', function(speed) {
        uploadSpeedElement.textContent = speed.toFixed(2);
    });

    test.on('ping', function(ping) {
        pingElement.textContent = ping.toFixed(2);
    });

    test.start();
}