document.addEventListener("DOMContentLoaded", function () {
    const githubUsername = 'amranibrahim19'; // Replace with your GitHub username

    // GitHub API endpoint for listing public repositories
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    // Fetch the list of public repositories and display them
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById('repo-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                listItem.appendChild(link);
                repoList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
