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
const dbURI = 'mongodb+srv://krishnaa:%40Krishnaa%23123@blogcluster.yzpnaw7.mongodb.net/nodetuts?appName=blogcluster';

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

//listen for request
app.listen(3000);

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
      .then((result) => {
          res.send(result); // send saved document as response
      })
      .catch((err) => {
          console.log(err);
          res.status(500).send('Error saving blog');
      });
});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('6980378a7e127464ff3ceb26')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.use((req,res,next)=>{
    console.log('new request made');
    console.log('host :', req.hostname);
    console.log('path :',req.path);
    console.log('method :',req.method);
    next();
});


app.get('/',(req,res)=>{
    // res.send('<p>Home Page</p>');
//     const blogs=[

//         {title : 'yoshi finds egges',snippets : 'hjdgDKH; hgldJHDjh jhsdjlh'},
//          {title : 'MARIO finds starts',snippets : 'hjdgDKH; hgldJHDjh jhsdjlh'},
//          {title : 'how to defeat browser',snippets : 'hjdgDKH; hgldJHDjh jhsdjlh'},
//     ];
//    res.render('index',{title: 'Home',blogs : blogs});

    res.redirect('/blogs');
});

app.use((req,res,next)=>{
    console.log('in the next middleware');
    next();
});

app.get('/about',(req,res)=>{
    // res.send('<p>about Page</p>');
    res.render('about',{title: 'About'})
});

//redirects

// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })

app.get('/blog/create',(req,res)=>{
    res.render('create',{title: 'blog'});
})

//blogroutes
app.use(BlogRoutes);

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
})