const leaderboard = [
    { rank: 1, name: 'John Doe', points: 250 },
    { rank: 2, name: 'Jane Smith', points: 230 },
    { rank: 3, name: 'Alice Brown', points: 215 }
];
const leaderboardBody = document.getElementById('leaderboard-body');
leaderboard.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${entry.rank}</td><td>${entry.name}</td><td>${entry.points}</td>`;
    leaderboardBody.appendChild(row);
});

const leaderboard2 = [
    { rank: 1, name: 'John Doe', points: 250 },
    { rank: 2, name: 'Jane Smith', points: 230 },
    { rank: 3, name: 'Alice Brown', points: 215 }
];
const leaderboardBody2 = document.getElementById('leaderboard-body2');
leaderboard2.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${entry.rank}</td><td>${entry.name}</td><td>${entry.points}</td>`;
    leaderboardBody2.appendChild(row);
});