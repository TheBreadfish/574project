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



newShop("shop name this is a shop name yes hello hi", "description", "owner", insertCommas("1660602333316"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta");

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

newShop("name", "description", "owner", insertCommas("1660846734070"), '["keyword1", "keyword2"]', "location", '["item1","item2"]', "{timeMin:'1', timeMax:'2', unit:'unit'}", "stock", "meta")

/*
Do NOT paste the new shop function below this comment

-------------------------------------------------------------*/

for(let i = 0; i < Shops.length; i++) {

    let liName = document.createElement("a");
    liName.innerHTML = Shops[i].name + "<br>";
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
  <k>`+Shops[i].name+`</k>
  <br>
  <span style="font-size: x-large">`+Shops[i].owner+`</span>
  <hr><br><br>
  <span>`+Shops[i].description+`</span>
  `


  const content = document.getElementById("content")

  content.innerHTML = "<br><br><br><br>" + shopContent
}
