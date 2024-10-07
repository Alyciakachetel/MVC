const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const products = [
        { name: 'Product 1', price: 10, stocked: true },
        { name: 'Product 2', price: 20, stocked: false },
    ];
    res.render('productView', { products });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});