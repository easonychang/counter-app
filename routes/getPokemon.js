/*
 * GET home page.
 */
const poke = require('pokemon');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eason',
    database: 'pokemonGenOneDB'
});

connection.connect(function(error){
    if(error){
        console.log("Error");
    }else{
        console.log("Connected");
    }
});

/* only needs to be executed once to make database and load 151 orignal pokemon
function getNumStr() {

    let ns = []

    for(let i = 1; i < 152; i++){
        if( i < 10) {
            ns.push("00"+ i);
        } else if( i < 100){
            ns.push("0" + i);
        } else {
            ns.push ("" + i);
        }
    }
    return ns;
} 
 

let numStr = getNumStr();
let pokemonList = poke.all();

for(let i = 1; i < 152; i++){
    
    let sql = "INSERT INTO `pokemonDB` (`pokemon_id`, `pokemon_name`, `pokemon_imageUrl`) VALUES (" + i + ",'" + pokemonList[i-1] + "', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + numStr[i-1] + ".png')";
    //console.log(sql);
    connection.query(sql, function(error, result){
        if(error){
            console.log("Error in the Insert");
        } else{
            console.log("1 record inserted");
        }
    });
} 

*/

/*
connection.query("SELECT * FROM pokemonDB", function(error, rows, fields){
    if(error){
        console.log("Error in the query");
    } else{
        console.log("Success with query");
        console.log(rows[0]);
    }
}); 
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  /*
  console.log(getRandomInt(152));
  console.log(getRandomInt(152));
  console.log(getRandomInt(152));
  console.log(getRandomInt(152));
  // expected output: 0 - 151
  */

exports.getPokemon = function(req, res){

    let pokemons = [];

    connection.query("SELECT * FROM pokemonDB", function(error, rows, fields){
        if(error){
            console.log("Error in the query");
        } else{
            console.log("Success with query");

            for(let i = 0; i < 4; i++){
                let random = getRandomInt(152);
                let p = {
                    "name": rows[random].pokemon_name,
                    "imageUrl": rows[random].pokemon_imageUrl
                };
                pokemons.push(p);
            }
            //console.log(pokemons);

            res.send(pokemons);
        }
    });

    /*let pokemons = [
        {
            "name": "Pikachu",
            "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        },
        {
            "name": "Charmander",
            "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        },
    
    ];
    */

    /*
    connection.query("SELECT * FROM pokemonDB", function(error, rows, fields){
        if(error){
            console.log("Error in the query");
        } else{
            console.log("Success with query");
            console.log(rows);
        }
    });
    */

   

    /*
    var database = firebase.database();
    var ref = database.ref('recentlyplayed');
    var recentlyplayed = " ";
    ref.on('value', snap => {
      
      // Get song from the database send it to frontend.
      recentlyplayed = snap.val();
      console.log(recentlyplayed.songs);
      res.send(recentlyplayed.songs);
    });

    */
  };