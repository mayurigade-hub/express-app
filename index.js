const express = require('express');
const app = express();

app.listen(8080);


app.get('/', (req, res) => {//home path
    res.send("Hello, World!");
})

app.get('/about', (req, res) => {
    res.send("about page");
})

app.get('/contact', (req, res) => {
    res.send("contact page");
})


// app.use((req, res) => {
//     console.log("Request received");
//     res.send("Hello, World!");
// })