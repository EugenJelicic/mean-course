const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "afsdfsdf",
      title: "First serverside post",
      content: "This is coming from the server",
    },
    {
      id: "adsasdasd",
      title: "Sec serverside post",
      content: "This is coming from the server 2",
    },
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});

module.exports = app;
