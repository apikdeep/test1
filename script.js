// Set the date when your relationship started
const startDate = new Date('2023-10-11T20:36:00'); // Change this to your actual start date

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateYearsAndDays(startDate, currentDate) {
    let totalDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    let years = 0;
    
    // Count full years, adjusting for leap years
    while (true) {
        const nextAnniversary = new Date(startDate);
        nextAnniversary.setFullYear(startDate.getFullYear() + years + 1);
        
        // If the next anniversary is beyond the current date, break
        if (nextAnniversary > currentDate) break;
        
        totalDays -= (isLeapYear(startDate.getFullYear() + years) ? 366 : 365);
        years++;
    }
    
    return { years, remainingDays: totalDays };
}

function updateCountdown() {
    const now = new Date();
    const { years, remainingDays } = calculateYearsAndDays(startDate, now);

    document.getElementById('time-elapsed').innerText = 
        `${years} years, ${remainingDays} days`;

    // Check if a year has passed
    
}

// Function to show congratulatory message
function showMessage(years) {
    const messageContainer = document.getElementById('message');
    messageContainer.innerText = `Congratulations on completing ${years} year(s)!`;
    messageContainer.style.opacity = '1';

    // Hide the message after 24 hours
    setTimeout(() => {
        messageContainer.style.opacity = '0';
    }, 86400000); // Message displayed for 24 hours
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to set the time immediately
