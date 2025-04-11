document.addEventListener('DOMContentLoaded', function() {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const recommendationContainer = document.querySelector('.recommendation-content');
            recommendationContainer.innerHTML = '';

            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    const recommendation = document.createElement('div');
                    recommendation.classList.add('destination');

                    const imgElement = document.createElement('img');
                    imgElement.src = city.imageUrl;
                    imgElement.alt = city.name;

                    const textElement = document.createElement('div');
                    const nameElement = document.createElement('h5');
                    nameElement.textContent = city.name;

                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = city.description;

                    const visitButton = document.createElement('button');
                    visitButton.textContent = 'Visit';
                    visitButton.type = 'button';

                    textElement.appendChild(nameElement);
                    textElement.appendChild(descriptionElement);
                    textElement.appendChild(visitButton);

                    recommendation.appendChild(imgElement);
                    recommendation.appendChild(textElement);

                    recommendationContainer.appendChild(recommendation);
                });
            });

            data.temples.forEach(temple => {
                const recommendation = document.createElement('div');
                recommendation.classList.add('destination');

                const imgElement = document.createElement('img');
                imgElement.src = temple.imageUrl;
                imgElement.alt = temple.name;

                const textElement = document.createElement('div');
                const nameElement = document.createElement('h5');
                nameElement.textContent = temple.name;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = temple.description;

                const visitButton = document.createElement('button');
                visitButton.textContent = 'Visit';
                visitButton.type = 'button';

                textElement.appendChild(nameElement);
                textElement.appendChild(descriptionElement);
                textElement.appendChild(visitButton);

                recommendation.appendChild(imgElement);
                recommendation.appendChild(textElement);

                recommendationContainer.appendChild(recommendation);
            });

            data.beaches.forEach(beach => {
                const recommendation = document.createElement('div');
                recommendation.classList.add('destination');

                const imgElement = document.createElement('img');
                imgElement.src = beach.imageUrl;
                imgElement.alt = beach.name;

                const textElement = document.createElement('div');
                const nameElement = document.createElement('h5');
                nameElement.textContent = beach.name;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = beach.description;

                const visitButton = document.createElement('button');
                visitButton.textContent = 'Visit';
                visitButton.type = 'button';

                textElement.appendChild(nameElement);
                textElement.appendChild(descriptionElement);
                textElement.appendChild(visitButton);

                recommendation.appendChild(imgElement);
                recommendation.appendChild(textElement);

                recommendationContainer.appendChild(recommendation);
            });
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    let data = {};

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(fetchedData => {
            data = fetchedData;
            console.log('Data fetched:', data);
            renderAllRecommendations();
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });

    function createRecommendation(item) {
        const recommendation = document.createElement('div');
        recommendation.classList.add('destination');

        const imgElement = document.createElement('img');
        imgElement.src = item.imageUrl;
        imgElement.alt = item.name;

        const textElement = document.createElement('div');
        const nameElement = document.createElement('h5');
        nameElement.textContent = item.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        const visitButton = document.createElement('button');
        visitButton.textContent = 'Visit';
        visitButton.type = 'button';

        textElement.appendChild(nameElement);
        textElement.appendChild(descriptionElement);
        textElement.appendChild(visitButton);

        recommendation.appendChild(imgElement);
        recommendation.appendChild(textElement);

        return recommendation;
    }

    function renderAllRecommendations() {
        const recommendationContainer = document.querySelector('.recommendation-content');
        recommendationContainer.innerHTML = '';

        data.countries.forEach(country => {
            country.cities.forEach(city => {
                const recommendation = createRecommendation(city);
                recommendationContainer.appendChild(recommendation);
            });
        });

        data.temples.forEach(temple => {
            const recommendation = createRecommendation(temple);
            recommendationContainer.appendChild(recommendation);
        });

        data.beaches.forEach(beach => {
            const recommendation = createRecommendation(beach);
            recommendationContainer.appendChild(recommendation);
        });
    }

    function filterRecommendations(keyword) {
        const recommendationContainer = document.querySelector('.recommendation-content');
        recommendationContainer.innerHTML = '';

        const keywordLower = keyword.toLowerCase();
        let results = [];

        if (keywordLower === 'beach' || keywordLower === 'beaches') {
            results = [...data.beaches];
        } else if (keywordLower === 'temple' || keywordLower === 'temples') {
            results = [...data.temples];
        } else if (keywordLower === 'country' || keywordLower === 'countries') {
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(keywordLower)) {
                        results.push(city);
                    }
                });
            });
        } else {
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(keywordLower)) {
                        results.push(city);
                    }
                });
            });

            data.temples.forEach(temple => {
                if (temple.name.toLowerCase().includes(keywordLower)) {
                    results.push(temple);
                }
            });

            data.beaches.forEach(beach => {
                if (beach.name.toLowerCase().includes(keywordLower)) {
                    results.push(beach);
                }
            });
        }

        results.slice(0, 2).forEach(item => {
            const recommendation = createRecommendation(item);
            recommendationContainer.appendChild(recommendation);
        });
    }

    document.querySelector('#search-btn').addEventListener('click', function() {
        const searchInput = document.querySelector('#search').value.trim();
        if (searchInput) {
            filterRecommendations(searchInput);
        }
    });

    document.querySelector('#clear-btn').addEventListener('click', function() {
        document.querySelector('#search').value = '';
        renderAllRecommendations();
    });
});