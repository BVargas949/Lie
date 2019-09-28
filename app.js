
//Gyarados

var _condition = "pokemon";
var _pocketMaster = "snorlax";

fetch('https://pokeapi.co/api/v2/pokemon/snorlax/')
// .then( res = res.json())
.then(res => res.json() )
.then(data => {
    console.log(data.sprites)
    const{...img} = data.sprites;
    console.log(img);

    //console.log(img)
 selector = document.querySelector(".card");
    pokeIMG = ` <div class="card" style="width: 18rem;">
     <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;

console.log(data);
selector.innerHTML = pokeIMG;
});

