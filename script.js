function getRepositories() {
    const username = document.getElementById('username').value;

    if (!username) {
        alert('Please enter a GitHub username.');
        return;
    }

    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(repositories => displayRepositories(repositories))
        .catch(error => {
            alert(`Error: ${error.message}`);
            console.error(error);
        });
}

function displayRepositories(repositories) {
    const repositoriesContainer = document.getElementById('repositories');
    repositoriesContainer.innerHTML = '';

    if (repositories.length === 0) {
        repositoriesContainer.innerHTML = '<p>No repositories found.</p>';
        return;
    }

    const ul = document.createElement('ul');

    repositories.forEach(repo => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.href = repo.html_url;
        link.textContent = repo.name;

        li.appendChild(link);
        ul.appendChild(li);
    });

    repositoriesContainer.appendChild(ul);
}


// slider 
let currentSlide = 1;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slides.style.transform = `translateX(${-slideWidth * (index - 1)}px)`;
  currentSlide = index;
}

function prevSlide() {
  if (currentSlide > 1) {
    showSlide(currentSlide - 1);
  }
}

function nextSlide() {
  if (currentSlide < 10) {
    showSlide(currentSlide + 1);
  }
}

function goToPage(pageNumber) {
  showSlide(pageNumber);
}


// slider