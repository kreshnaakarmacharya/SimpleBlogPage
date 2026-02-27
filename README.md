# Blog  📝

[![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)](https://nodejs.org/) [![License](https://img.shields.io/badge/License-ISC-blue)](https://opensource.org/licenses/ISC)

A modern blog web application built with **Node.js**, **Express**, **EJS**, and **MongoDB**. Users can view, create, and read blogs with a clean, responsive design.

---

## 🚀 Features

- List all blogs with title and snippet
- Create new blog posts
- View blog details
- About page for project or personal description
- 404 page for non-existing routes
- Fully responsive and modern layout
- MongoDB database for storing blogs

---

## 🛠 Technologies Used

- Node.js
- Express.js
- EJS templating
- MongoDB with Mongoose
- Lodash
- Morgan (logging)
- HTML & CSS

---

## 📝 Usage

- `/` → Homepage with list of all blogs  
- `/about` → About page  
- `/blogs/new` → Create a new blog  
- `/blogs/:id` → Blog details page  
- Non-existing routes → 404 page  

---

## 💡 Notes

- Always use `process.env.PORT` for deployment  
- Keep `.env` secret; do not push to GitHub  
- `.gitignore` should exclude `node_modules` and `.env`  

---

## 👨‍💻 Author

**Kreshnaa Karmacharya**  
- GitHub: [kreshnaakarmacharya](https://github.com/kreshnaakarmacharya)  
- Email:krishnaakarmacharya82@gmail.com  

---

## 📄 License

This project is licensed under **ISC License**.  

---

**Live Demo (after deployment)**:  
`https://blog-kreshnaa.vercel.app/`
