const express= require('express');
const morgan =require('morgan');
const mongoose =require('mongoose');
const Blog=require('./modelJs/blog');
const { result } = require('lodash');
const BlogRoutes=require('./routes/blogroutes');
//express app
const app=express();
const PORT=3000;

//connect to mongo db
const dbURI = 'mongodb+srv://krishnaakarmacharya82_db_user:%40Krishnaa%23123@blogcluster.yzpnaw7.mongodb.net/nodetuts?appName=blogcluster';

async function connectDB() {
  try {
    // Connect to MongoDB Atlas — NO options needed in Mongoose 7+
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Call the function
connectDB();

//register view engine
app.set('view engine','ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', BlogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
