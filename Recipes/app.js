const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const portno = 8080
let data

//data json
const recipeJSON = '[ { "id": "0001", "type": "Fried Rice", "name": "Paneer Fried Rice", "price": 2.99, "ingredients": { "protein": { "name": "Paneer", "preparation": "Shallow fried" }, "salsa": { "name": "Tomato Salsa", "spiciness": "Medium" }, "toppings": [ { "name": "Ginger and Garlic", "quantity": "1 cup", "ingredients": ["Ginger Garlic"] }, { "name": "Cheese", "quantity": "1/2 cup", "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"] }, { "name": "Guacamole", "quantity": "2 tablespoons", "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"] }, { "name": "Sour Cream", "quantity": "2 tablespoons", "ingredients": ["Sour Cream"] } ] } }, { "id": "0002", "type": "Pasta", "name": "Beef Pasta", "price": 3.49, "ingredients": { "protein": { "name": "Beef", "preparation": "Seasoned and Grilled" }, "salsa": { "name": "Salsa Verde", "spiciness": "Hot" }, "toppings": [ { "name": "Onions", "quantity": "1/4 cup", "ingredients": ["White Onion", "Red Onion"] }, { "name": "Cilantro", "quantity": "2 tablespoons", "ingredients": ["Fresh Cilantro"] }, { "name": "Queso Fresco", "quantity": "1/4 cup", "ingredients": ["Queso Fresco"] } ] } }, { "id": "0003", "type": "Taco", "name": "Fish Taco", "price": 4.99, "ingredients": { "protein": { "name": "Fish", "preparation": "Battered and Fried" }, "salsa": { "name": "Chipotle Mayo", "spiciness": "Mild" }, "toppings": [ { "name": "Cabbage Slaw", "quantity": "1 cup", "ingredients": [ "Shredded Cabbage", "Carrot", "Mayonnaise", "Lime Juice", "Salt" ] }, { "name": "Pico de Gallo", "quantity": "1/2 cup", "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"] }, { "name": "Lime Crema", "quantity": "2 tablespoons", "ingredients": ["Sour Cream", "Lime Juice", "Salt"] } ] } } ] ';

//middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get('/', (req,res) => {
    res.render(("app.ejs"),{recipe:data} )
    
})

app.post('/recipe', (req,res) => {
    switch(req.body.choice){
        case "rice":
            data = JSON.parse(recipeJSON)[0];
            console.log(data);
            break;
        case "pasta":
            data = JSON.parse(recipeJSON)[1];
            break;
        case "taco":
            data = JSON.parse(recipeJSON)[2];
            break;
    }
    res.redirect('/');
})

app.listen(portno, () => {
    console.log(`server started at ${portno}`);
})