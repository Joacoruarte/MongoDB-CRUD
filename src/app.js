import express from "express";
import { engine } from "express-handlebars";
import router from "./routes/index.routes";
import path from "path";
import morgan from "morgan"
const app = express();


app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(router);
app.set("views", path.join(__dirname + "/views"));
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs")

export default app;
