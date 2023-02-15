const app = require("express")();
const ejsLayout = require("express-ejs-layouts");
const port = 5000;

app.set("view engine", "ejs");
app.set("view");
app.use(ejsLayout);

app.get("/", (req, res) => {
  res.render("index", { title: "Halaman Home", layout: "layouts/main-layout" });
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
