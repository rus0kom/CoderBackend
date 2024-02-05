export async function postImageController(req, res) {
    res.json({ route: req.file.destination + req.file.filename });
}