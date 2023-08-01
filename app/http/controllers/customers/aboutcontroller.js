function aboutcontroller() {
    return {
        about(req, res) {
            res.render('customers/about');
        }
    }
}

module.exports = aboutcontroller