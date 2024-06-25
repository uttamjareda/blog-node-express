const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Blog = sequelize.define( 'Blog', {
    blogId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }},
    {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
)


module.exports = Blog
