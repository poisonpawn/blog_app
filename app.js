const express = require("express")
const app = express();


const titles = [];
const contents = [];



const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public")) // to access static files such as images css etc
app.set("view engine", "ejs")
// routes

app.get("/", (req, res) => {

    res.render("home")

})
app.get("/compose", (req, res) => {

    res.render("compose")

})

app.post("/contact", (req, res) => {
    titles.push(req.body.title)
    contents.push(req.body.content)

    res.redirect("/blogs")
})

app.get("/blogs", (req, res) => {

    res.render("blog", {
        blog_titles: titles,
        blog_contents: contents,
    })

})

app.listen(3000, () => {
    console.log("server started on port : 3000");
})