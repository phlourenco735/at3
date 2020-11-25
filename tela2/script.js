const itens = 
[
    {
        id: "121w1x",
        elemento: "Níquel",
        peso: 98.8,
        volume: 10,
        long: "50N",
        lat: "159W",
        local: "908-099-176",
        astronauta: "William Jozé"
    },
    {
        id: "56nb5g",
        elemento: "Cobalto",
        peso: 0.6,
        volume: 0.5,
        long: "120S",
        lat: "12W",
        local: "034-906-218",
        astronauta: "Ricardo Cortéz"
    },
    {
        id: "2k4o6p",
        elemento: "Cobre",
        peso: 52.8,
        volume: 30,
        long: "151S",
        lat: "160E",
        local: "381-096-334",
        astronauta: "Rodrigo Da Silva"
    },
    {
        id: "2erghn",
        elemento: "Mercúrio",
        peso: 2552.30,
        volume: 251,
        long: "93S",
        lat: "72W",
        local: "093-206-277",
        astronauta: "Xavier Mendes"
    },
    {
        id: "0192r7",
        elemento: "Sódio",
        peso: 895.8,
        volume: 3,
        long: "179N",
        lat: "1E",
        local: "132-345-458",
        astronauta: "Miguel Soáres"
    }
];
const lista = document.getElementById("lista");
const data = document.getElementById("data");

lista.style.fontFamily = "Comic Sans MS";

function search() {
    lista.innerHTML = "";
    for (let i = 0; i <= itens.length - 1; i++) {
        //if(itens[i].nome == data.value) {
        let pattern = new RegExp(data.value.toLowerCase(), 'g');
        if(itens[i].id.toLowerCase().match(pattern)) {
            lista.innerHTML += 
            `
            <li>
                <p> Id: ${itens[i].id} </p>
                <p> Elemento: ${itens[i].elemento} </p>
                <p> Peso: ${itens[i].peso} </p>
                <p> Volume: ${itens[i].volume} </p>
                <p> Longitude: ${itens[i].long} </p>
                <p> Latitude: ${itens[i].lat} </p>
                <p> Local encontrado: ${itens[i].local} </p>
                <p> Astronauta Responsável: ${itens[i].astronauta} </p>
            </li>
            <br>
            <hr style="width:300px;margin:auto;height:5px;border-width:0;color:greenyellow;background-color:greenyellow"/> 
            <br>
            `;
        }
    }
}
