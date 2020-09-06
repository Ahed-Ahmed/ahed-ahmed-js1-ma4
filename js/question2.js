const url = 'https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating';

const Containers = document.querySelector('.container');

async function Games() {
    
    try {
        
        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        const listGames = json.results;

        listGames.forEach(function(result) {

            Containers.innerHTML += `<a href="question3.html?id=${result.id}">
                                        <h4>${result.name}</h4>   
                                        <time>Released: ${result.released}</time>
                                        <p>${result.rating}</p>
                                    </a>`;
            
        });

    } catch(error) {

        Containers.innerHTML = message("error", error);
        
    }
}

Games();