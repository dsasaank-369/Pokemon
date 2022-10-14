const container = document.querySelector('.container');
const api = 'https://api.pikaserve.xyz/pokemon/random';

let mainData = {};



const getPokemons = async () => {
    const response = await fetch(api);
    const data = await response.json();
    mainData = data;

    const html = `
        <div class="card mb-3" style="max-width: 578px">
        <div class="row g-0">
        <div class="col-md-4">
            <img
            src=${data.image.thumbnail}
            class="img-fluid rounded-start"
            alt="..."
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="60"
            style="width: 100%"
            />
        </div>
        <div class="col-md-8 revealContainer">
            <div class="card-body">
            <h5 class="card-title">Here is the Description</h5>
            <p class="card-text">
                ${data.description}
            </p>
            <button class="reveal">Reveal</button>
            </div>
        </div>
        </div>
    </div>
    `

    container.innerHTML = html;

    document.querySelector('.reveal').addEventListener('click', () => {
        const html = `
            <p class="card-text yellow">${mainData.name.english}</p>
        `

        let div = document.createElement("p")
        div.innerText = mainData.name.english;
        div.classList.add('highlight')
        document.querySelector('.revealContainer').append(div);
    })

}

getPokemons();