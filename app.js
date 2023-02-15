const app = require("express")();
const { log } = require("console");
const ejsLayout = require("express-ejs-layouts");
const port = 5000;

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set("view engine", "ejs");
app.set("view");
app.use(ejsLayout);

app.get("/", (req, res) => {
  res.render("index", { title: "Halaman Home", layout: "layouts/main-layout" });
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    // console.log(data);
    socket.broadcast.emit("message", data);
  });
});

server.listen(port, () => console.log(`listening at http://localhost:${port}`));
