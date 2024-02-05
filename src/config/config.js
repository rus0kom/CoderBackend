import * as dotenv from 'dotenv'

dotenv.config({ path: './src/config/.env' })

const MONGO_ATLAS = process.env.MONGO_ATLAS;
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MAILER_PASS = process.env.MAILER_PASS;
const MAILER_MAIL = process.env.MAILER_MAIL;
const CONTAINER = process.env.CONTAINER;
const NODE_ENV = process.env.NODE_ENV;
const SESSION_SECRET = process.env.SESSION_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;

export {
    MONGO_ATLAS,
    MONGO_LOCAL,
    MAILER_PASS,
    MAILER_MAIL,
    CONTAINER,
    NODE_ENV,
    SESSION_SECRET,
    JWT_SECRET
};