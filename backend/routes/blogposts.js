const express = require('express');
const blogpostsModel = require('../modals/BlogPosts');
const router = express.Router();
const bodyParser = require('body-parser');
// const userdetails = require('./middleware/');
// const User = require('../modals/Users');
const verifyingUser = require('../middlewares/getUser');

router.use(bodyParser.json());
// ROUTE 1
// This route is for getting all the products.  LOGIN NOT REQUIRED.   Both For Admin and Simple User
router.get('/backend/allposts', async (req, res) => {
  // const user = await Users.findOne({ email: req.body.email });
  // if (user.admin !== true) {
  //   res.send(401).json('Not Allowed');
  // }
  let allPosts;
  if (req.query.author) {
    allPosts = await blogpostsModel.find({ author: req.query.author });
  } else if (req.query.category) {
    allPosts = await blogpostsModel.find({
      category: { $in: req.query.category },
    });
  } else {
    allPosts = await blogpostsModel.find();
  }

  res.json(allPosts);
});

// ROUTE 1
// This route is for getting all the products.  LOGIN NOT REQUIRED.   Both For Admin and Simple User
router.get('/backend/getpost', async (req, res) => {
  if (req.params.id) {
    post = await blogpostsModel.find({ id: req.params.id });
    res.json(post);
  }
});

// ROUTE 2
// This route is for adding a post. ONLY FOR SPECIFIC USERS. LOGIN REQUIRED.
router.post('/backend/addpost', async (req, res) => {
  try {
    // const user = await User.findById(req.user.id);
    // if (!user) {
    //   return res.status(401).json('NOT ALLOWED');
    // }

    const postInformation = req.body;
    const post = await new blogpostsModel(postInformation);
    const savedPost = await post.save();
    if (!savedPost) {
      return res.status(500).json('not saved');
    }
    res.json(savedPost);
  } catch (error) {
    res.status(500).json('There is some problem in server');
    console.log(error);
  }
});

// ROUTE 3
// This route is for deleting a product. ONLY FOR SPECIFIC USERS. LOGIN REQUIRED.
router.delete('/backend/deletepost/:id', async (req, res) => {
  try {
    // const user = await User.findById(req.user.id);
    // if (!user) {
    //   return res.status(401).json('NOT ALLOWED');
    // }

    const id = req.params.id;
    blogpostsModel
      .findByIdAndDelete(id)
      .then((deletedPost) => {
        res.status(200).json(deletedPost);
      })
      .catch((error) => {
        res.json(error);
      });
  } catch (error) {
    res.status(500).json('There is some problem in server');
  }
});

// ROUTE 4
// This route is for updating a post. ONLY FOR SPECIFIC USERS. LOGIN REQUIRED.
router.put('/backend/updatepost/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const { title, author, body } = req.body;
    if (!title || !author || !body) {
      return res.status(401).json('Please enter all necessary data');
    }
    const newPost = { title, author, body };

    const updatedPost = await blogpostsModel.findByIdAndUpdate(id, {
      $set: newPost,
    });

    if (!updatedPost) {
      res.status(401).json('Not Updated');
    }

    res.send(updatedPost);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
