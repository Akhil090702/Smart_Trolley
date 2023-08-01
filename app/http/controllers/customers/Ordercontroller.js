const Order = require('../../../models/order')
function Ordercontroller() {
    return {
        store(req, res) {
            // console.log(req.body);
            const { phone, number } = req.body;
            if (!phone || !number) {
                req.flash('error', 'All fields are requred')
                return res.redirect('/cart')
                // return res.status(400).json({ error: "All field are required" });
            }

            const order = new Order({
                phone,
                number,
                items: req.session.cart.items
            });

            order.save().then(result => {
                req.flash('success', 'Order Placed Successfully');
                return res.redirect('/customers/OrderDone')
            }).catch(err => {
                req.flash('error', 'Something went wrong')
                return res.redirect('/cart')
            })
        },

        async live(req, res) {
            res.render('customers/OrderDone');
        }

    }
}


module.exports = Ordercontroller