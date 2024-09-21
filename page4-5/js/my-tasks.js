// Updated Task List including Cybersecurity-related tasks
const myTasks = [
    { id: 1, title: 'Inspect Neighborhood Clean-Up', status: 'In Progress', description: 'Help inspect and ensure the completion of the neighborhood clean-up initiative. Review areas cleaned, take notes, and report back.', video: 'https://www.youtube.com/embed/HCPSmOPP_-4', points: 50 },
    { id: 2, title: 'Reduce Energy Use Campaign Feedback', status: 'Completed', description: 'Collect feedback on the city-wide energy reduction campaign and report findings.', video: '', points: 30 },
    { id: 3, title: 'Street Lighting Audit', status: 'Pending', description: 'Audit street lighting to ensure optimal coverage and energy efficiency.', video: 'https://www.youtube.com/embed/HCPSmOPP_-4', points: 50 },
    { id: 4, title: 'Community Recycling Initiative', status: 'In Progress', description: 'Assist in organizing a community recycling initiative.', video: '', points: 40 },
    { id: 5, title: 'Review Public Transportation Schedules', status: 'Completed', description: 'Review and suggest optimizations for the city\'s public transportation schedules.', video: '', points: 35 },
    { id: 6, title: 'Traffic Flow Optimization Study', status: 'Pending', description: 'Analyze traffic flow patterns to improve traffic conditions.', video: '', points: 25 },
    { id: 7, title: 'Tree Planting Event Organization', status: 'In Progress', description: 'Organize a community-driven tree planting event.', video: '', points: 45 },
    { id: 8, title: 'Water Usage Monitoring Campaign', status: 'Pending', description: 'Participate in a water usage monitoring campaign to reduce wastage.', video: '', points: 30 },
    { id: 9, title: 'Update City Park Equipment', status: 'Completed', description: 'Help update and maintain city park equipment for safety and efficiency.', video: '', points: 40 },
    { id: 10, title: 'Coordinate Local School Energy Audit', status: 'In Progress', description: 'Work with local schools to assess and optimize energy usage.', video: '', points: 55 },
    // Cybersecurity-related tasks
    { id: 11, title: 'City Network Vulnerability Assessment', status: 'In Progress', description: 'Perform a vulnerability assessment on the city\'s network infrastructure.', video: '', points: 60 },
    { id: 12, title: 'Incident Response Plan for Public Services', status: 'Pending', description: 'Develop an incident response plan for the city\'s public services.', video: '', points: 70 },
    { id: 13, title: 'IoT Device Security Audit for Smart City Infrastructure', status: 'In Progress', description: 'Audit the security of IoT devices used in the city\'s smart infrastructure.', video: '', points: 65 },
    { id: 14, title: 'Cybersecurity Awareness Training for City Employees', status: 'Completed', description: 'Conduct cybersecurity awareness training for city employees.', video: '', points: 40 },
    { id: 15, title: 'Monitor and Mitigate Phishing Attempts on City Systems', status: 'In Progress', description: 'Monitor and mitigate phishing attempts targeting city systems.', video: '', points: 75 }
];

// Populate My Tasks
const myTaskList = document.getElementById('my-task-list');
myTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>Status: ${task.status}</p>
        <div class="task-details">
            <p>${task.description ? task.description : 'No description available.'}</p>
            <iframe width="100%" height="315" src="${task.video ? task.video : 'https://www.youtube.com/embed/HCPSmOPP_-4'}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            <p><strong>Points:</strong> ${task.points ? task.points : 'Not specified'}</p>
        </div>
    `;
    
    // Add click functionality to expand/collapse each task
    taskItem.addEventListener('click', function () {
        const taskDetails = this.querySelector('.task-details');
        taskDetails.style.display = taskDetails.style.display === 'block' ? 'none' : 'block';
    });

    myTaskList.appendChild(taskItem);
});
