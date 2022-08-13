Shops = []

function newShop(name, description, owner, datecreated) {
    let newShop = new Shop(name, description, datecreated, owner)

    Shops.unshift(newShop)

    console.log(Shops)
    console.log(newShop)
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function insertCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const date = new Date();

/*-------------------------------------------------------------*/

/*
ex: newShop("name", "description", "owner", "datecreated")
*/

// Some example shops: 
//(use genCode("name", "desc", "owner") to make new lines)



newShop("3rd Printing", "Get custom 3d prints.", "joe ...MAMA", "1")

newShop("Jeff's Art", "Get some art, paintings, ect...", "jeffrey bezos", "0")

newShop("name", "desc", "owner", insertCommas("1660360227138"))


/*
Do NOT paste the new shop function below this comment
*/

/*-------------------------------------------------------------*/

for(let i = 0; i < Shops.length; i++) {

    let liName = document.createElement("h3")
    liName.innerText = Shops[i].name

    let liDescription = document.createElement("p")
    liDescription.innerText = Shops[i].description 

    let liOwner = document.createElement("p")
    liOwner.innerText = capFirstLetter(Shops[i].owner)

    let liDateCreated = document.createElement("p")
    liDateCreated.innerText = Shops[i].datecreated
    liDateCreated.style.fontSize = "xx-small"


    let li = document.createElement("li")



    li.appendChild(liName)
    li.appendChild(liDescription)
    li.appendChild(liOwner)
    li.appendChild(liDateCreated)

    console.log(li)



    const ul = document.getElementById("shops")

    ul.appendChild(li)
}

function genCode(name, desc, owner) {
    return 'newShop("'+name+'", "'+desc+'", "'+owner+'", insertCommas("'+date.getTime()+'"))'

    //newShop("name", "desc", "owner", "date")
}

console.log(genCode("name", "desc", "owner"))