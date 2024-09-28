const assignments = [
    {
        title: "Assignment 0: Git Instructions",
        description: "In this assignment, I craeted a repo in which it takes two number adds them and retunrs to the command line",
        githubLink: "https://github.com/Afzalkhan377/bu_afzalkhan377-assignment-0"
    },
    {
        title: "Assignment 1: Data Collection and Analysis",
        description: "In this assignment, In this assignement we had to figure where to stand to use the elevator the quickest depending on the time of arrical of the elevator and the best distance to stand at. We calculated all of this using a dataset.",
        githubLink: "https://github.com/Afzalkhan377/afzal-assignment-1"
    },
    {
        title: "Assignment 2: KMeans Clustering Visualization Webpage",
        description: "In this assignment, I developed an interactive web application that demonstrates the KMeans clustering algorithm using various initialization methods.",
        githubLink: "https://github.com/Afzalkhan377/afzal-assignment-2",
        demoVideo: "https://www.youtube.com/embed/gEPIkjzlZqQ"  // Note the embed link
    }
];

function loadAssignments() {
    const container = document.getElementById('assignments-container');

    assignments.forEach(assignment => {
        const assignmentDiv = document.createElement('div');
        assignmentDiv.classList.add('assignment');

        let demoContent = ''; 
        if (assignment.demoVideo) {
            demoContent = `
                <iframe width="560" height="315" src="${assignment.demoVideo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else {
            demoContent = `<a href="${assignment.demoVideo}" target="_blank">Demo</a>`;
        }

        assignmentDiv.innerHTML = `
            <h3>${assignment.title}</h3>
            <p>${assignment.description}</p>
            <a href="${assignment.githubLink}" target="_blank">Github Link</a>
            ${demoContent}
        `;

        container.appendChild(assignmentDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadAssignments);
