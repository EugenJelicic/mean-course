const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
  next();
});

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
    message: "Posts fetched succesfully",
    posts: posts,
  });
});

module.exports = app;
