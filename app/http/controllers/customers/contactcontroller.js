const Inform = require('../../../models/contact')
function contactcontroller() {
    return {
        contact(req, res) {
            res.render('customers/contact');
        },

        info(req, res) {
            const { yourname, mail, text } = req.body;
            if (!yourname || !mail || !text) {
                req.flash('error', 'All fields are requred')
                return res.redirect('/contact')
                // return res.status(400).json({ error: "All field are required" });
            }

            const information = new Inform({
                yourname, mail, text
            });

            information.save().then(result => {
                req.flash('success', 'info got Successfully');
                return res.redirect('/')
            }).catch(err => {
                req.flash('error', 'Something went wrong')
                return res.redirect('/contact')
            })
        }
    }
}

module.exports = contactcontroller