const main = document.querySelector("main");

let html = "";

for(let i = 0; i < characters.length; i++){
    let character = characters[i];

    html = html + `
        <h2>Name: ${character.name}</h2>
        <p>Type: ${character.type}</p>
        <img src="${character.photo}">
        <p>
          Favorite Books: ${character.favoriteBooks}
        </p>
    `
}

main.insertAdjacentHTML('beforeend', html)