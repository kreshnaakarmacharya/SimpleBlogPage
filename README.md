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

## 🌐 Deployment

You can deploy this project on **Render** or **Railway**:

### Render Deployment

1. Go to [Render](https://render.com) → New → Web Service  
2. Connect your GitHub repository  
3. Build Command: `npm install`  
4. Start Command: `npm start`  
5. Add environment variables:
   - `MONGODB_URI` = your MongoDB Atlas connection string  
6. Render will deploy your app and provide a public URL

### Railway Deployment

1. Go to [Railway](https://railway.app) → New Project → Deploy from GitHub  
2. Select your repository → Start Command: `npm start`  
3. Add environment variables in Settings → Variables  
4. Railway will deploy your app and give a public URL

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
`https://yourproject.onrender.com`
