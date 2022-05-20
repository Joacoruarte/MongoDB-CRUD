import './config'
import app from "./app";
import "./database"
app.listen(process.env.PORT);
console.log("Server on port ", 3000);
