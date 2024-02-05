import winston from 'winston';

const warnLog = winston.createLogger({
    level: 'info',
    transports: [
        // new winston.transports.File({filename: './src/logs/warn.log', level: 'warn'}),
        new winston.transports.Console({level: 'info'})
    ]
});

const errorLog = winston.createLogger({
    level: 'info',
    transports: [
        // new winston.transports.File({filename: './src/logs/error.log', level: 'error'}),
        new winston.transports.Console({level: 'info'})
    ]
});

const infoLog = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({level: 'info'})
    ]
});

export { warnLog, errorLog, infoLog };