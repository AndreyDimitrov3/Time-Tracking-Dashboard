document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            updateDashboard(data, "weekly");

            document.querySelectorAll(".button").forEach(button => {
                button.addEventListener("click", () => updateDashboard(data, button.id));
            });
        })
        .catch(error => console.error('Error fetching data:', error));
})

function updateDashboard(data, timeframe) {
    data.forEach(item => {
        document.querySelector(`[data-title="${item.title}"] .current`).innerText = `${item.timeframes[timeframe].current}hrs`;
        document.querySelector(`[data-title="${item.title}"] .previous`).innerText = `Last Week - ${item.timeframes[timeframe].previous}hrs`;
    });
}