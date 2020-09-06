const detailsContainer = document.querySelector(".detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.rawg.io/api/games/" + id;

async function aGame() {

  try {

    const response = await fetch(url);

    const details = await response.json();

    createDetailsHtml(details);

  }

  catch(error) {

    detailsContainer.innerHTML = message("error", error);

  }

}

aGame()

function createDetailsHtml(details) {

    const getDate = new Date(details.released);
    
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(getDate)
    
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(getDate)
    
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(getDate)
    
    const dateReleased = `${mo} ${da}, ${ye}`;

    detailsContainer.innerHTML = `<div>
                                        <a href="question2.html">Back to game cards</a>
                                        <h2>${details.name}</h2>
                                        <img src="${details.background_image}" alt="${details.name}">
                                        <div>${details.description}</div>
                                        <p><strong>Date released:</strong> <time>${dateReleased}</time></p>
                                    </div>`
}