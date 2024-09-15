
const assignments = [
    {
        title: "Assignment 0: Git Instructions",
        description: "In this assignment, I craeted a repo in which it takes two number adds them and retunrs to the command line",
        githubLink: "https://github.com/Afzalkhan377/bu_afzalkhan377-assignment-0"

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
