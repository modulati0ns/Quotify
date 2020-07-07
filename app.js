const button = document.querySelector('.button')
const text = document.querySelector('.quote');
const autor = document.querySelector('.autor');
button.addEventListener("click", getQuotes);

async function getQuotes() {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let number = Math.floor(Math.random() * data.length);
            let quote = data[number].text;
            let author = data[number].author;
            if (author == null) {
                console.log("Sin autor, buscando otra cita");
                getQuotes();
            } else {
                text.innerHTML = '"' + quote + '"';
                autor.innerHTML = '- ' + author;
                console.log(author);
            }
        });
}