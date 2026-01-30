const express= require('express');

//express app
const app=express();

//register view engine
app.set('view engine','ejs');

//listen for request
app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<p>Home Page</p>');
    const blogs=[

        {title : 'yoshi finds egges',snippets : 'hjdgDKH; hgldJHDjh jhsdjlh'},
         {title : 'MARIO finds starts',snippets : 'hjdgDKH; hgldJHDjh jhsdjlh'},
         {title : 'how to defeat browser',snippets : 'hjdgDKH; hgldJHDjh jhsdjlh'},
    ];
   res.render('index',{title: 'Home',blogs : blogs});
})

app.get('/about',(req,res)=>{
    // res.send('<p>about Page</p>');
    res.render('about',{title: 'About'})
})

//redirects

// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })

app.get('/blog/create',(req,res)=>{
    res.render('create',{title: 'blog'});
})

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
})