// Dummy Data for My Tasks (This would be dynamic in a real app)
const myTasks = [
    { id: 1, title: 'Inspect Neighborhood Clean-Up', status: 'In Progress' },
    { id: 2, title: 'Reduce Energy Use Campaign Feedback', status: 'Completed' },
    { id: 3, title: 'Street Lighting Audit', status: 'Pending' },
    { id: 4, title: 'Community Recycling Initiative', status: 'In Progress' },
    { id: 5, title: 'Review Public Transportation Schedules', status: 'Completed' },
    { id: 6, title: 'Traffic Flow Optimization Study', status: 'Pending' },
    { id: 7, title: 'Tree Planting Event Organization', status: 'In Progress' },
    { id: 8, title: 'Water Usage Monitoring Campaign', status: 'Pending' },
    { id: 9, title: 'Update City Park Equipment', status: 'Completed' },
    { id: 10, title: 'Coordinate Local School Energy Audit', status: 'In Progress' },
    // New Cybersecurity-related tasks
    { id: 11, title: 'City Network Vulnerability Assessment', status: 'In Progress' },
    { id: 12, title: 'Incident Response Plan for Public Services', status: 'Pending' },
    { id: 13, title: 'IoT Device Security Audit for Smart City Infrastructure', status: 'In Progress' },
    { id: 14, title: 'Cybersecurity Awareness Training for City Employees', status: 'Completed' },
    { id: 15, title: 'Monitor and Mitigate Phishing Attempts on City Systems', status: 'In Progress' }
];

// Populate My Tasks
const myTaskList = document.getElementById('my-task-list');
myTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>Status: ${task.status}</p>
    `;
    myTaskList.appendChild(taskItem);
});
