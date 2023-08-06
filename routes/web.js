const homecontroller = require('../app/http/controllers/homecontroller');
const aboutcontroller = require('../app/http/controllers/customers/aboutcontroller');
const cartcontroller = require('../app/http/controllers/customers/cartcontroller');
const teamcontroller = require('../app/http/controllers/customers/teamcontroller');
const contactcontroller = require('../app/http/controllers/customers/contactcontroller');
const Ordercontroller = require('../app/http/controllers/customers/Ordercontroller');

function initRoutes(app) {
    app.get('/', homecontroller().index)
    app.get('/about', aboutcontroller().about)
    app.get('/team', teamcontroller().team)
    
    app.get('/contact', contactcontroller().contact)
    app.post('/contact', contactcontroller().info)

    app.get('/cart', cartcontroller().cart)
    app.post('/update-cart', cartcontroller().update)
    // customer routes
    app.post('/OrderDone', Ordercontroller().store)
    app.get('/customers/OrderDone', Ordercontroller().live)
    // app.get('/customers/OrderDone', Ordercontroller().live)
}

module.exports = initRoutes