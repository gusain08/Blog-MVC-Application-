
export const addnewBlog  = (title, description, img) => {
  // Write your code here
  const newBlog = {
    title: title,
    description: description,
    img: img
  };

  // Push the new blog object into the 'blogs' array
  blogs.push(newBlog);
};




export const blogs = [
  {
    title: "Coding Nijas",
    description:
      "Coding Ninjas is an e-learning platform that offers courses taught by Stanford University faculty, IITs, IIITs, and Ex-Facebook, Google, and Amazon employees.",
    img: "https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png?updated=1681732628908I",
  },
  {
    title: "Apple",
    description:
      "Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.",
    img: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-icon-16.png",
  },
];
