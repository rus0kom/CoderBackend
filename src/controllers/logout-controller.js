export default function logoutController(req, res) {
    if(req.isAuthenticated()) {
        req.logout(function(err) {
            if (err) { return next(err) }
        });
        res.json({ message: 'user disconnected' })
    } else {
        res.json({ message: 'no users connected' })
    }
}