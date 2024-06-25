const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController')

router.get('/blogs', blogController.getAllBlogs)
router.get('/blog/:id', blogController.getBlogById)
router.post('/blog', blogController.createBlog)
router.put('/blog/:id', blogController.updateBlog)
router.delete('/blog/:id', blogController.deleteBlog)

module.exports = router