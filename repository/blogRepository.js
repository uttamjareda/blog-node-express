const Blog = require('../model/blogModel')

const getAllBlogs = async () => {
    return await Blog.findAll()
} 

const getBlogById = async (blogId) => {
    const blog = await Blog.findByPk(blogId)

    if (blog) {
        return blog;
    }

    throw new Error(`Blog not found with ${blogId}`)
} 

const updateBlog = async (blogId, blogData) => {
    const blog = await Blog.findByPk(blogId)

    if (blog) {
        return await blog.update(blogData);
    }

    throw new Error(`Blog not found with ${blogId}`)
} 

const deleteBlog = async (blogId) => {
    const blog = await Blog.findByPk(blogId)

    if (blog) {
        return await blog.destroy();
    }
    
    throw new Error(`Blog not found with ${blogId}`)
} 

const createBlog = async (blogData) => {
    return await Blog.create(blogData)
} 

module.exports = {
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    createBlog
}