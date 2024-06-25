const blogRepository = require('../repository/blogRepository')

const getAllBlogs = async () => {
    return await blogRepository.getAllBlogs()
} 

const getBlogById = async (blogId) => {
    return await blogRepository.getBlogById(blogId)
} 

const updateBlog = async (blogId, blogData) => {
    return await blogRepository.updateBlog(blogId, blogData)
} 

const deleteBlog = async (blogId) => {
    return await blogRepository.deleteBlog(blogId)
} 

const createBlog = async (blogData) => {
    return await blogRepository.createBlog(blogData)
} 

module.exports = {
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    createBlog
}