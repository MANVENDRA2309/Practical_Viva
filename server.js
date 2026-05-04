const express = require("express");
const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/product"));
app.use("/orders", require("./routes/order"));

app.listen(3000, () => console.log("Server running"));
