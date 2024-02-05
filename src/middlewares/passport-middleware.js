import passport from 'passport';
import LocalStrategy from 'passport-local';
import Users from '../models/users-model.js';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from '../config/config.js';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

passport.serializeUser((user, done) => {
    done(null, user._id);
});
  
passport.deserializeUser((id, done) => {
    Users.findById(id, (error, user) => done(error, user));
});

passport.use("signup",
    new LocalStrategy({ usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
        try {
            const user = await Users.findOne({ email })
            if (user) { return done(null, false) };
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);
            const newUser = {
                ...req.body,
                password: encryptedPassword
            }
            const userWithId = await Users.create(newUser);
            return done(null, userWithId);
        } catch (error) {
            return done(error);
        }
    }
));

passport.use("login",
    new LocalStrategy({ usernameField: 'email' },
        function (email, password, done) {
            Users.findOne({ email }, async function(error, user) {
                const matchPassword = await bcrypt.compare(password, user.password);
                
                if (error) { return done(error) }
                if (!user) { return done(null, false) };
                if (!matchPassword) { return done(null, false) };
                return done(null, user);
            })
        }
    )
);

passport.use(
    new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET,
        },
        function (token, done) {
            Users.findOne({id: token.sub}, function(error, user){
                if (error) { return done(error, false) }
                if (user) { return done(null, user) } 
                else { return done(null, false) }
            });
        }
    )
);

export default passport;