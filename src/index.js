import express from "express";
import ProductRouter from "./router/product.routes.js";
import CartRouter from "./router/carts.routes.js";
import viewsRouter from "./router/views.router.js";
import handlebars from "express-handlebars";
import * as path from "path"
import __dirname from "./utils.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';
import morgan from "morgan";
import flash from 'connect-flash';
import session from "express-session";
import methodOverride from "method-override";


const app = express();
const PORT = 8080

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Global Variables

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
})

//Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
// app.use('api/products', ProductRouter);
// app.use('api/carts', CartRouter);

app.get("/", async (req, res) => {
    res.render("index")
})

//Static
app.use(express.static(path.join(__dirname, 'public')));


mongoose.set('strictQuery', false)
try {
    await mongoose.connect('mongodb+srv://coder:coder@backend39755.3tezvvo.mongodb.net/integradora1')
    app.listen(PORT, ()=> {
        console.log(`Servidor express puerto ${PORT}`);
    });
} catch (error) {
    console.log('No se pudo conectar con la DB')
}




 