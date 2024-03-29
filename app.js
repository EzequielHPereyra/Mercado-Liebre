const express = require ("express");
const path = require ("path");
const app = express();
const publicPath = path.resolve( __dirname, "./public");

app.use ( express.static(publicPath) );
 
app.listen(process.env.PORT || 3000, () => {console.log("Mercado liebre UP")});

app.get("/", (req , res) => {
    res.sendFile( path.resolve (__dirname, "./views/home.html"))
})

app.post("/", (req , res) => {
    res.sendFile( path.resolve (__dirname, "./views/home.html"))
})

app.get("/login", (req , res) => {
    res.sendFile( path.resolve (__dirname, "./views/login.html"))
});
app.get("/register", (req , res) => {
    res.sendFile( path.resolve (__dirname, "./views/register.html"))
})
