const express = require('express')
const sequelize = require('../config/database')
const blogRoutes = require('./routes/blogRoutes');
const bodyParser = require('body-parser');

const App = express();
App.use(bodyParser.json());

App.use('/api/v1', blogRoutes)

App.use( (req, res, next) => {
    const error = new Error('Not Found!')
    error.status(404)
    next(error)
})


App.use( (error, req, res, next) => {
    res.status(404)
    res.json({
        error: {
            message: error.message
        }
    });
});

( async () => {
    try {
        sequelize.sync();
        console.log('Database and tables created successfully !')
    } catch (e) {
        console.log('Error in syncing database !')
    }
}
)();

const PORT = 3000

App.listen(PORT, () => {
    console.log('App started listening on PORT', PORT)
})
