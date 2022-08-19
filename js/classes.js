class Shop {
    constructor(name, description, datecreated, owner, keywords, loc, items, eta, stock, meta) {
        this.name = name; 
        // "Get 3d prints!"

        this.description = description; 
        // "High quaility 3d prints for prices from 7-15 dollars!"

        this.datecreated = datecreated; 
        // "2022 Aug, 14 20:24:43"

        this.owner = owner; 
        // "Johnny Appleseed"

        this.keywords = keywords; 
        // ["Prints", "3d", "Good", "Johnny", "Appleseed"]

        this.loc = loc; 
        // "Under the big tent infront of the school"

        this.items = items; 
        // ["Chicken", "Tree", "Cup", "Chair", "Soda Can"]

        this.eta = eta; 
        // {timeMin:"1", timeMax:"3", unit:"Days"}

        this.stock = stock; 
        // 6

        this.meta = meta; 
        // "Come get some 3d prints from me!"
    }
}
