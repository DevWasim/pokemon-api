let input = document.getElementById('pokemonName');
let img = document.querySelector('img');


pokemon();

async function pokemon() {
    const pokemonName = input.value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
        throw new Error("Api Not Fatched");
    }
    else {
        const data = await response.json();
        pokemonImages = data.sprites.front_default;
        img.setAttribute('src', pokemonImages);
        img.style.display = 'initial';

    }

}