// Dummy Data
const tasks = [
    { id: 1, title: 'Neighborhood Clean-Up', votes: 120, image: 'images/clean-up.webp', voted: false, joined: false, time: '9:00 AM - 12:00 PM', location: 'Main Street Park', description: 'Join us in cleaning up the neighborhood. We will meet at Main Street Park and provide all necessary supplies.' },
    { id: 2, title: 'Reduce Energy Use Campaign', votes: 98, image: 'images/reduce-energy.webp', voted: false, joined: false, time: '1:00 PM - 4:00 PM', location: 'City Hall', description: 'Help the community learn how to reduce energy consumption. This event will include a presentation and discussions on best practices.' },
    { id: 3, title: 'Improve Street Lighting', votes: 85, image: 'images/improve-lighting.webp', voted: false, joined: false, time: '6:00 PM - 9:00 PM', location: 'Downtown Area', description: 'Work with city officials to assess and improve street lighting in the downtown area. The event will involve a walking tour to identify improvements.' }
];

const leaderboard = [
    { rank: 1, name: 'John Doe', points: 250 },
    { rank: 2, name: 'Jane Smith', points: 230 },
    { rank: 3, name: 'Alice Brown', points: 215 }
];

const joinedTasks = []; // To keep track of joined tasks

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
        <button class="join-btn" data-task-id="${task.id}" style="${task.joined ? 'background-color: #ccc;' : ''}">
            ${task.joined ? 'Joined' : 'Join'}
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

// Join button functionality to add task to community projects
document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const taskId = e.target.dataset.taskId;
        const task = tasks.find(t => t.id == taskId);

        if (!task.joined) {
            task.joined = true; // Mark as joined
            joinedTasks.push(task); // Add to joined tasks

            e.target.textContent = 'Joined';
            e.target.style.backgroundColor = '#ccc'; // Grey out the button

            updateMyTasksPage(); // Update My Tasks page with joined tasks
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

// Function to update the My Tasks page
function updateMyTasksPage() {
    const myCommunityTasksDiv = document.getElementById('community-tasks');
    myCommunityTasksDiv.innerHTML = ''; // Clear previous entries

    joinedTasks.forEach(task => {
        const taskRow = document.createElement('div');
        taskRow.classList.add('community-task-card');
        taskRow.innerHTML = `
            <h3>${task.title}</h3>
            <p>Time: ${task.time}</p>
            <p>Location: ${task.location}</p>
            <button class="details-btn" data-task-id="${task.id}">Details</button>
            <div class="task-details" style="display: none;">
                <p>${task.description}</p>
            </div>
        `;
        myCommunityTasksDiv.appendChild(taskRow);

        // Toggle showing the large description on click
        taskRow.querySelector('.details-btn').addEventListener('click', (e) => {
            const detailsDiv = taskRow.querySelector('.task-details');
            detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
        });
    });
}

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
