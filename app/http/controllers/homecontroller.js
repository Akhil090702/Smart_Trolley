const Menu = require('../../models/menu')
function homecontroller() {
    return {
        async index(req, res) {
            const Items = await Menu.find();
            // console.log(Items);
            return res.render('home', { Items: Items});
        }
    }
}

module.exports = homecontroller
