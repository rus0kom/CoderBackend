function allController(req, res) {
    return ({
        'url': req.originalUrl,
        'method': req.method,
        'status-code': '404'
    });
};

export default allController;