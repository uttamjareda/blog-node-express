const blogService = require('../services/blogService')

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs()
        res.json(blogs)
    } catch (err) {
        res.status(500).json({
            message: `Not able to fetch blogs.`,
            error: err.message
        })
    }
} 

const getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id)
        res.json(blog)
    } catch (err) {
        res.status(500).json({
            message: `Not able to fetch blog with ID: ${req.params.id}.`,
            error: err.message
        })
    }
} 

const updateBlog = async (req, res) => {
    try {
        const updatedBlog = await blogService.updateBlog(req.params.id, req.body)
        res.json(updatedBlog)
    } catch (err) {
        res.status(500).json({
            message: `Not able to update blog with ID: ${req.params.id}`,
            error: err.message
        })
    }
} 

const deleteBlog = async (req, res) => {
    try {
        await blogService.deleteBlog(req.params.id)
        res.status(204).json(`Blog deleted successfully, ID: ${req.params.id}`)
    } catch (err) {
        res.status(500).json({
            message: `Not able to delete blog with ID: ${req.params.id}`,
            error: err.message
        })
    }
} 

const createBlog = async (req, res) => {
    try {
        const newBlog = await blogService.createBlog(req.body)
        res.json(newBlog)
    } catch (err) {
        res.status(500).json({
            message: `Unable to create blog`,
            error: err.message
        })
    }
} 

module.exports = {
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    createBlog
}