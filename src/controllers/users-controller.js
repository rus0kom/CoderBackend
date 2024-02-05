import { getToken } from '../middlewares/jwt-middleware.js';
import passport from 'passport';

export async function getUsersController(req, res, next) {
    if(req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.json({ permission: 'denied'});
    };
}

export async function postUsersController(req, res, next) {
    passport.authenticate('signup', { session: false })(req, res, next);
    const token = await getToken(req.body);
    res.json({ token });
};