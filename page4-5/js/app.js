// Dummy Data
const tasks = [
    { id: 1, title: 'Neighborhood Clean-Up', votes: 120, image: 'images/clean-up.webp', voted: false },
    { id: 2, title: 'Reduce Energy Use Campaign', votes: 98, image: 'images/reduce-energy.webp', voted: false },
    { id: 3, title: 'Improve Street Lighting', votes: 85, image: 'images/improve-lighting.webp', voted: false }
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
        <p>Votes: <span class="vote-count">${task.votes}</span></p>
        <button class="vote-btn" data-task-id="${task.id}" style="${task.voted ? 'background-color: #ccc;' : ''}">
            ${task.voted ? 'Voted' : 'Vote'}
        </button>
    `;
    taskListDiv.appendChild(taskDiv);
});

// Voting functionality with unvote support and modal
const modal = document.getElementById('popupModal');
const closeModalBtn = document.querySelector('.close-btn');

document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const taskId = e.target.dataset.taskId;
        const task = tasks.find(t => t.id == taskId);

        if (!task.voted) {
            task.votes += 1;  // Increment vote count
            task.voted = true; // Mark as voted

            // Update votes display and button state
            e.target.previousElementSibling.querySelector('.vote-count').textContent = task.votes;
            e.target.textContent = 'Voted';
            e.target.style.backgroundColor = '#ccc'; // Grey out the button

            showModal();  // Show thank you modal
        } else {
            task.votes -= 1;  // Decrement vote count
            task.voted = false; // Mark as not voted

            // Update votes display and button state
            e.target.previousElementSibling.querySelector('.vote-count').textContent = task.votes;
            e.target.textContent = 'Vote';
            e.target.style.backgroundColor = ''; // Re-enable the button with original color
        }
    });
});

// Show the thank you modal
function showModal() {
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
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
