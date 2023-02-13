const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/addition', (req, res) => {
    const numbers = req.query.numbers;
    let sum = 0; for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    res.send({ sum });
});


app.get('/multiplication', (req, res) => {
    const numbers = req.query.numbers;
    let product = 1; for (let i = 0; i < numbers.length; i++) {
        product *= parseInt(numbers[i]);
    }
    res.send({ product });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
