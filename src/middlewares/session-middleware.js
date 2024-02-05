import session from 'express-session';
import MongoStore from 'connect-mongo';
import { mongoUrl, mongoOptions } from './db-connection.js';
import { SESSION_SECRET } from '../config/config.js';

const store = MongoStore.create({
    mongoUrl,
    ttl: 300,
    mongoOptions
});

const sessionHandler = session({
    store,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
});

export default sessionHandler;