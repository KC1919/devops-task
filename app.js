const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        console.log("Failed to render index page", error);
    }
});

app.listen(PORT, () => {
    try {
        console.log(`Server listening on port ${PORT}`);
    } catch (error) {
        console.log("Failed to start server", error);
    }
})