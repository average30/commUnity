// Dummy Data
const tasks = [
    { id: 1, title: 'Neighborhood Clean-Up', votes: 120, image: 'images/placeholder.png' },
    { id: 2, title: 'Reduce Energy Use Campaign', votes: 98, image: 'images/placeholder.png' },
    { id: 3, title: 'Improve Street Lighting', votes: 85, image: 'images/placeholder.png' }
];

const leaderboard = [
    { rank: 1, name: 'John Doe', points: 250 },
    { rank: 2, name: 'Jane Smith', points: 230 },
    { rank: 3, name: 'Alice Brown', points: 215 }
];

// Populate Top Voted Tasks
const taskListDiv = document.getElementById('task-list');
tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-card');
    taskDiv.innerHTML = `
        <img src="${task.image}" alt="Task Image">
        <h3>${task.title}</h3>
        <p>Votes: ${task.votes}</p>
        <button class="vote-btn" data-task-id="${task.id}">Vote</button>
    `;
    taskListDiv.appendChild(taskDiv);
});

// Voting functionality with popup modal
const modal = document.getElementById('popupModal');
const closeModalBtn = document.querySelector('.close-btn');

document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const taskId = e.target.dataset.taskId;
        const task = tasks.find(t => t.id == taskId);
        task.votes += 1;  // Increment vote count
        e.target.previousElementSibling.innerHTML = `Votes: ${task.votes}`;  // Update votes display
        showModal();  // Show thank you modal
    });
});

function showModal() {
    modal.style.display = 'block';
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Populate Leaderboard
const leaderboardBody = document.getElementById('leaderboard-body');
leaderboard.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${entry.rank}</td><td>${entry.name}</td><td>${entry.points}</td>`;
    leaderboardBody.appendChild(row);
});

// City Data Monitoring with Chart.js
const waterChartCtx = document.getElementById('waterChart').getContext('2d');
const energyChartCtx = document.getElementById('energyChart').getContext('2d');
const trafficChartCtx = document.getElementById('trafficChart').getContext('2d');

// Placeholder Data for Charts
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    waterUsage: [300, 290, 320, 310, 305, 315],
    energyConsumption: [500, 520, 510, 530, 540, 525],
    trafficFlow: [120, 130, 110, 140, 135, 150]
};

// Water Usage Chart
new Chart(waterChartCtx, {
    type: 'line',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: 'Water Usage (liters)',
            data: chartData.waterUsage,
            borderColor: 'blue',
            fill: false
        }]
    }
});

// Energy Consumption Chart
new Chart(energyChartCtx, {
    type: 'line',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: 'Energy Consumption (kWh)',
            data: chartData.energyConsumption,
            borderColor: 'green',
            fill: false
        }]
    }
});

// Traffic Flow Chart
new Chart(trafficChartCtx, {
    type: 'line',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: 'Traffic Flow (vehicles/hour)',
            data: chartData.trafficFlow,
            borderColor: 'red',
            fill: false
        }]
    }
});
