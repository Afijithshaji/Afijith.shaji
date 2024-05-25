window.addEventListener('load', () => {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach(badge => {
        const randomColor = getRandomColor();
        badge.style.backgroundColor = randomColor;
        badge.style.color = invertColor(randomColor); // Ensuring text color is readable
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // Convert hex to RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    // Calculate the perceived luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    // Return black or white depending on luminance
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
