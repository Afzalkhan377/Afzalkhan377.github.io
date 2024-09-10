
const assignments = [
    {
        title: "Assignment 0: Git Instructions",
        description: "In this assignment, I created a basic personal website using HTML, CSS, and JavaScript.",
        githubLink: "https://afzalkhan377.github.io/index.html"

    }
   
];


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


document.addEventListener('DOMContentLoaded', loadAssignments);
