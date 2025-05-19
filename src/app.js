const express = require("express");
const app = express();
const tarefasRoutes = require("./routes/tarefasRoutes");
app.use(express.json());
app.use("/tarefas", tarefasRoutes);

module.exports = app;
