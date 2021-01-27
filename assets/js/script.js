$(document).ready(function () {

//----PRIMER CONTRINCANTE----
    $.ajax({
        type: "GET",
        url: `https://www.superheroapi.com/api.php/1085398275229535/${Math.floor(Math.random()*731)}`,
        dataType: "json",
        success: function (response) {

            let superHeroes = response;

        //----Ficha----
            $('#heroe1').html(`
                <img src="${superHeroes.image.url}" alt= "${superHeroes.name}">
            `);
            $('#nombre1').html(`<h1>${superHeroes.name}</h1>`);
            $('#nombreReal1').html(`<p>Alias: ${superHeroes.biography['full-name']}</p>`);
            $('#alterEgo1').html(`<p>Alter-Ego: ${superHeroes.biography['alter-egos']}</p>`);

            $('#primeraAparicion1').html(`<p>Primera Aparición: ${superHeroes.biography['first-appearance']}</p>`);
            $('#publicacion1').html(`<p>Publicación base: ${superHeroes.biography.publisher}</p>`);

        //----Stats----    
            $('#int1').html(`<p>Inteligencia: ${superHeroes.powerstats.intelligence}%</p>`)
            $('#str1').html(`<p>Fuerza: ${superHeroes.powerstats.strength}%</p>`)
            $('#spd1').html(`<p>Velocidad: ${superHeroes.powerstats.speed}%</p>`)
            $('#dur1').html(`<p>Durabilidad: ${superHeroes.powerstats.durability}%</p>`)
            $('#pow1').html(`<p>Poder: ${superHeroes.powerstats.power}%</p>`)
            $('#comb1').html(`<p>Combate: ${superHeroes.powerstats.combat}%</p>`)
        }
    });

//----SEGUNDO CONTRINCANTE----
    $.ajax({
        type: "GET",
        url: `https://www.superheroapi.com/api.php/1085398275229535/${Math.floor(Math.random()*731)}`,
        dataType: "json",
        success: function (response) {

            let superHeroes = response;

        //----Ficha----
            $('#heroe2').html(`
                <img src="${superHeroes.image.url}" alt= "${superHeroes.name}">
            `);
            $('#nombre2').html(`<h1>${superHeroes.name}</h1>`);
            $('#nombreReal2').html(`<p>Alias: ${superHeroes.biography['full-name']}</p>`);
            $('#alterEgo2').html(`<p>Alter-Ego: ${superHeroes.biography['alter-egos']}</p>`);

            $('#primeraAparicion2').html(`<p>Primera Aparición: ${superHeroes.biography['first-appearance']}</p>`);
            $('#publicacion2').html(`<p>Publicación base: ${superHeroes.biography.publisher}</p>`);

        //----Stats----    
            $('#int2').html(`<p>Inteligencia: ${superHeroes.powerstats.intelligence}%</p>`)
            $('#str2').html(`<p>Fuerza: ${superHeroes.powerstats.strength}%</p>`)
            $('#spd2').html(`<p>Velocidad: ${superHeroes.powerstats.speed}%</p>`)
            $('#dur2').html(`<p>Durabilidad: ${superHeroes.powerstats.durability}%</p>`)
            $('#pow2').html(`<p>Poder: ${superHeroes.powerstats.power}%</p>`)
            $('#comb2').html(`<p>Combate: ${superHeroes.powerstats.combat}%</p>`)

        }
        
    });
})