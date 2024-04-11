var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
// app.get('/', function (request, response) {
//     // Show the form
//     response.send(`
//         <form action="/addition" method="get">
//             <label for="num1">Number 1:</label>
//             <input type="text" id="num1" name="num1"><br><br>
//             <label for="num2">Number 2:</label>
//             <input type="text" id="num2" name="num2"><br><br>
//             <button type="submit">Add Numbers</button>
//         </form>
//     `);
// });

app.get('/addition', function (request, response) {

    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return response.status(400).json({ error: "Invalid Parameters! Please enter numbers." })
    }

    let data = num1 + num2;

    response.send(`
        <h1>Result</h1>
        <p>${num1} + ${num2} = ${data}</p>
    `);
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});