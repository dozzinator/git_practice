let start = "Script loaded.";
console.log(start);

var buyOrSell = ['Buy', 'Sell'];
var objects = ['ticket(s)', 'phone(s)', 'car(s)', 'laptop(s)'];
var time = ['this morning', 'this afternoon', 'tonight'];
var randomNumber = Math.floor(Math.random() * 10 + 1); 

function randomSelection(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

function messageCreator() {
    randomBuyOrSell = randomSelection(buyOrSell);
    randomObjects = randomSelection(objects);
    randomTime = randomSelection(time);
    console.log('Hello, your assignment for today is: ' + randomBuyOrSell + ' ' + randomNumber + ' ' + randomObjects + ' ' + randomTime + '!')
};

messageCreator();


//-- "Buy or Sell"
//-- "Tickets, Phones, Cars or Laptops" Buy nothing today!"
//-- "Number between 1 and 10"
//-- "This morning, This afternoon or at night!

//const randomBuyOrSell = buyOrSell[Math.floor(Math.random() * lengthBuyOrSell)];
//const randomObjects = objects[Math.floor(Math.random() * lengthObjects)];
//const randomTime = time[Math.floor(Math.random() * lengthTime)];