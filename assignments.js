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
        demoVideo: "https://www.youtube.com/embed/gEPIkjzlZqQ"
    },{
    title: "Assignment 3: Singular Value Decomposition",
    description: " We applied Singular Value Decomposition (SVD) as a preprocessing step to the MNIST dataset and train a logistic regression classifier. We compared the model performance and training time when using different levels of SVD for dimensionality reduction.",
    githubLink: "https://github.com/Afzalkhan377/afzal-assignment-3"
},{
title: "Assignment 4: Latent Semantic Analysis (LSA) Search Engine Webpage",
description: "In this assignment, I developed an interactive web application that implements a basic search engine using Latent Semantic Analysis (LSA). The search engine takes a user’s query, perform LSA on a pool of documents, and returns the top documents based on cosine similarity",
githubLink: "https://github.com/Afzalkhan377/afzal-assignment-4",
demoVideo: "https://www.youtube.com/embed/eflAnfxeFKE"
},
{
    title: "Assignment 5: K-Nearest Neighbors Kaggle Competition",
    description: "In this assignment, I implemented a K-Nearest Neighbors (KNN) model from scratch to predict customer churn for a bank. ",
    githubLink: "https://github.com/Afzalkhan377/afzal-assignment-5"

},{
 title: "MidTerm ",
    description: "In this competition we have to write a code that can predict the star rating associated with user reviews from Amazon Movie Reviews using the available features. ",
    githubLink: "https://github.com/Afzalkhan377/CS506-Midterm"},
    {
        title: "Assignment 6: Linear Regression Webpage",
description: "he goal was to create an interactive webpage to demonstrate how modifying these parameters affects regression results, especially when there is no actual relationship between X and Y",
githubLink: "https://github.com/Afzalkhan377/afzal-assignment-6",
demoVideo: "https://www.youtube.com/embed/wHPcKAc2j3w"
    },{
        title: "Assignment 7: Hypothesis Testing and Confidence Intervals in Linear Regression",
        description: "We extended our previous work from Assignment 6 to include hypothesis testing and confidence intervals through simulations. We enhance our interactive webpage to allow users to perform hypothesis tests on the slope or intercept of the regression line and generate confidence intervals based on simulations.",
        githubLink: "https://github.com/Afzalkhan377/afzal-assignment-7",
        demoVideo: "https://www.youtube.com/embed/5-enxG5JQUU"
    },{
        
            title: "Assignment 8: Logistic Regression",
            description: "we will explore the effect of shifting clusters in a dataset on the parameters of a logistic regression model. ",
            githubLink: "https://github.com/Afzalkhan377/afzal-Assignment8",
            demoVideo: "https://www.youtube.com/embed/wx6fq7Xyq9c"
            
        
    },
{ title: "Assignment 9: Neural Networks",
            description: "In this assignment, we implemented and analyzed a simple neural network by visualizing its learned features, decision boundary, and gradients. The goal is to develop a deeper understanding of how a Feedforward Neural Network with one hidden layer operates and represents the input space during learning."


            githubLink: "https://github.com/Afzalkhan377/afzal_Assignment9",
            demoVideo: "https://www.youtube.com/embed/MYV08e6OMgo"
            }
];

https://youtu.be/embed/wHPcKAc2j3w

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
