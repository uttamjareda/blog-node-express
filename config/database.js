const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('new_blog_database','postgres','Uttam@74', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    logging: false
})

( async() => {
    try {
        sequelize.authenticate()
        console.log('Connected to database successfully !')
    } catch (e) {
        console.log('Not able to connect to database !')
    }
})();

module.exports = sequelize
