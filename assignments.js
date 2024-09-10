// assignments.js

// Array of assignment objects
const assignments = [
    {
        title: "Assignment 1: Building a Basic Web App",
        description: "In this assignment, I created a basic web application using HTML, CSS, and JavaScript.",
        githubLink: "https://github.com/your-username/bu_username-assignment-1"
    },
    {
        title: "Assignment 2: Data Structures and Algorithms",
        description: "This assignment involved implementing various data structures and analyzing their efficiency.",
        githubLink: "https://github.com/your-username/bu_username-assignment-2"
    },
    // Add more assignments here as needed
];

// Function to generate the assignment cards
function loadAssignments() {
    const container = document.getElementById('assignments-container');

    assignments.forEach(assignment => {
        const assignmentDiv = document.createElement('div');
        assignmentDiv.classList.add('assignment');

        assignmentDiv.innerHTML = `
            <h3>${assignment.title}</h3>
            <p>${assignment.description}</p>
            <a href="${assignment.githubLink}" target="_blank">Github Link</a>
        `;

        container.appendChild(assignmentDiv);
    });
}

// Call the function to load assignments when the page loads
document.addEventListener('DOMContentLoaded', loadAssignments);
