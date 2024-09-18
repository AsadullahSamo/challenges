var canvas = document.getElementById("waveCanvas");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
resizeCanvas();

var waveOffset = 0;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create a linear gradient for the wave
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#00bfff'); // Light blue at the top
    gradient.addColorStop(1, '#1e90ff'); // Darker blue at the bottom

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2 + 20); // Start below the center

    var frequency = 0.02;
    var amplitude = 20; // Increase to ensure visibility but still relatively low

    for (var x = 0; x < canvas.width; x++) {
        var y = amplitude * Math.sin(x * frequency + waveOffset) + canvas.height / 2;
        ctx.lineTo(x, y + 20); // Offset y to make wave height less
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    
    // Fill the wave with the gradient
    ctx.fillStyle = gradient;
    ctx.fill();

    waveOffset += 0.05;
}

function animate() {
    drawWave();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', resizeCanvas);
