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