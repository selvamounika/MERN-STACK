// Function to update the clock and date
function updateClock() {
    const now = new Date();

    // Get time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // Get date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = currentDate;

    // Update background and greeting dynamically
    updateBackgroundAndGreeting(hours);
}

// Function to update background and greeting based on time
function updateBackgroundAndGreeting(hours) {
    const body = document.body;
    const greeting = document.getElementById('greeting');

    if (hours >= 6 && hours < 12) {
        // Morning
        body.style.background = "url('https://source.unsplash.com/1600x900/?morning,sunrise') no-repeat center center fixed";
        greeting.textContent = "Good Morning! Rise and Shine!";
    } else if (hours >= 12 && hours < 18) {
        // Afternoon
        body.style.background = "url('https://source.unsplash.com/1600x900/?afternoon,city') no-repeat center center fixed";
        greeting.textContent = "Good Afternoon! Keep Going!";
    } else if (hours >= 18 && hours < 21) {
        // Evening
        body.style.background = "url('https://source.unsplash.com/1600x900/?evening,sunset') no-repeat center center fixed";
        greeting.textContent = "Good Evening! Relax and Unwind!";
    } else {
        // Night
        body.style.background = "url('https://source.unsplash.com/1600x900/?night,stars') no-repeat center center fixed";
        greeting.textContent = "Good Night! Sweet Dreams!";
    }

    body.style.backgroundSize = 'cover';
}

// Initialize the clock immediately and set it to update every second
setInterval(updateClock, 1000);
updateClock();

