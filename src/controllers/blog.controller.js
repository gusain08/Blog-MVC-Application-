// Please don't change the pre-written code
// Import the necessary modules here
import { blogs, addnewBlog} from "../models/blog.model.js";

export const renderBlogs = (req,res) => {
  // Write your code here
  return res.render('blogs',{blogs});
};


export const renderBlogForm = (req, res) => {
  // Write your code here
  return res.render('addBlogForm');
};

// Function to add a new blog
export const addBlog = (req, res) => {
  const { title, description, img } = req.body;

  // Call the addBlog function with provided data
  addnewBlog(title, description, img);

  // Redirect to the home page to display all blogs
  res.redirect('/');
};
