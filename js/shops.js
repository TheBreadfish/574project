/*  USEFULL PARTS

 Line 35: Where you paste the functions to add new shops (newShop())
 Line 70: Where the shops are displayed
 Line 106: genCode() function
 Line 116: Code handling displaying the shop

    - if you want to know how/what to put in the shopGen() function check classes.js (js/classes.js)    */

let Shops = [];

function newShop(name, description, owner, datecreated, keywords, loc, items, eta, stock, meta) {
    let newShop = new Shop(name, description, datecreated, owner, JSON.parse(keywords), loc, JSON.parse(items), eta, stock, meta);

    Shops.unshift(newShop);
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function insertCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const date = new Date();

/*-------------------------------------------------------------


ex: newShop("name", "description", "owner", "datecreated")
*/

// Some example shops: 
// (use the genCode() function to make new lines)



newShop("Food & Panther Cash", "Good quality food. I have sodas, candy, panther cash, and more. Thank you for visting my shop, I hope you buy some drinks or panther cash! <br><br><br>:)", "John Cena", insertCommas("1660602333316"), '["Candy", "Drinks", "Soda", "Panther", "Cash", "this keyword is a keyword only for testing and yeah :)"]', "Under the big tent in front of the school", '["Sodas","Candy","Panther Cash"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "15-20", "Good drinks, candy, and panther cash");

newShop("shop name this is a shop name yes hello hi", "description", "owner", insertCommas("1660602333316"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta");

newShop("shop name this is a shop name yes hello hi", "description", "owner", insertCommas("1660602333316"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta");

newShop("shop name this is a shop name yes hello hi", "description", "owner", insertCommas("1660602333316"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta");

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

newShop("shop name this is a shop name yes hello hi", "description", "owner", insertCommas("1660602333316"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta");

/*
Do NOT paste the new shop function below this comment

-------------------------------------------------------------*/

for(let i = 0; i < Shops.length; i++) {

    let liName = document.createElement("a");
    let liNameKeywords = '<span style="display: none;">';
    for(let l = 0; l < Shops[i].keywords.length; l++) {
      liNameKeywords += Shops[i].keywords[l]+" "
    }
    liNameKeywords += '</span><br>'
    liName.innerHTML = Shops[i].name+liNameKeywords
    liName.style.fontSize = "x-large";

    liName.addEventListener("click", function() {shopOpen(i)});

    let liMeta = document.createElement("span");
    liMeta.innerHTML = Shops[i].meta + "<br>";

    let liOwner = document.createElement("span");
    liOwner.innerHTML = capFirstLetter(Shops[i].owner);

    let liDateCreated = document.createElement("span");
    liDateCreated.innerText = Shops[i].datecreated + "<br><br>";
    liDateCreated.style.fontSize = "xx-small";
    liDateCreated.style.display = "none";



    let li = document.createElement("li");


    li.appendChild(liName);
    li.appendChild(liMeta);
    li.appendChild(liOwner);
    li.appendChild(liDateCreated);



    const ul = document.getElementById("shops");

    ul.appendChild(li);
}

function genCode(name, desc, owner, keywords, loc, items, eta, stock, meta) {
    return 'newShop("'+name+'", "'+desc+'", "'+owner+'", insertCommas("'+date.getTime()+'"), '+'"'+keywords+'", "'+loc+'", "'+items+'", "'+eta+'", "'+stock+'", "'+meta+'")';

    //newShop("name", "desc", "owner", "datecreated", '["keywords"]', "loc", '["items"]', '{timeMin:"min", timeMax:"max", unit:"unit"', "stock", "meta");
}

// console.log(genCode("name", "description", "owner", "['keyword1', 'keyword2']", "location", "['item1','item2']", "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta"));



function shopOpen(i) {
  console.log(i)

  let shopContent = `
  <br>
  <a onClick="window.location.href=window.location.href">back to shops</a>
  <br>
  <k>`+Shops[i].name+`</k>
  <br>
  <span style="font-size: x-large">`+capFirstLetter(Shops[i].owner)+`</span>
  <hr><br><br>
  <span>`+Shops[i].description+`</span>
  <br><br><br><hr><br>
  <span> Meet `+capFirstLetter(Shops[i].owner)+` at `+Shops[i].loc.toLowerCase()+` to trade!</span>
  <br><br>
  <span style="font-size: small;"> Items: `+Shops[i].items+`</span>
  <br>
  <span style="font-size: small;"> Total stock: `+Shops[i].stock+`</span>
  `


  const content = document.getElementById("content")

  content.innerHTML = "<br><br><br><br>" + shopContent
}


/*
https://www.w3schools.com/howto/howto_js_search_menu.asp
*/
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("shops");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerHTML;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

let searchIdeas = [
  "Games", "3d Prints", "Candy", "Food", "how to cure depression", "Art", "Drinks"
]

document.getElementById("searchBar").placeholder = 'Search for "'+searchIdeas[Math.floor(Math.random() * searchIdeas.length)]+'"'