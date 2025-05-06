# 🍽️ DBWork – Recipe Manager (Fullstack Project)

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Welcome to **DBWork**, a responsive, mobile-friendly web application for managing recipes. In the frontend UI, users can add, view, and delete recipes, with data stored in a MongoDB database via a RESTful API. This version includes a professional logger, full CRUD support, CommonJS module system, dynamic homepage with favicon, and a clean HTML/CSS/JS frontend.

> This project is ideal for developers learning how to build an Express API, manage MongoDB, and integrate a responsive frontend.

---

## 🚀 Live Demo

This project is deployed and running online via **Render**:

👉 [https://dbwork.onrender.com](https://dbwork.onrender.com)

You can test all features live without cloning anything.

---

## 🧪 Running the Project Locally

If you'd like to clone and run this project on your own machine, follow the instructions below carefully.

---

### ⚠️ Important Note

By default, the backend uses **IPv6 format** for networking to support cloud deployments on Render.

If your local machine **does not support IPv6**, you'll need to change the code to use **IPv4** (`127.0.0.1`) instead.

---

## ⚙️ Local Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ny-collins/dbwork.git
cd dbwork
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
MONGODB_URI=<your_mongodb_connection_string>
PORT=3003
```
Replace "<your_mongodb_connection_string>" with your actual MongoDB connection string so as to connect to your own database.

By default, the backend server listens on:
```
[::1]:3003 — equivalent to IPv6 localhost (same as 127.0.0.1:3003)

```

---

### 3. If IPv6 Doesn't Work (Switch to IPv4)

If you encounter issues like `::1 not supported`, do the following:

**In `backend/index.js` or your backend entry file**, change:

```js
app.listen(PORT, '::1', () => {
  console.log(`Server running at http://[::1]:${PORT}`);
});
```

✅ Replace with:

```js
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
```

Now your backend will listen using standard IPv4 (localhost).

---

### 4. Start your server

```bash
npm start
```

OR

```bash
npm run dev #When using nodemon dependency
```

---

If you're running the server locally, make sure to edit the API URL in `frontend/script.js`:

From:

```js
const API_URL = 'https://dbwork-api.onrender.com/api/recipes';
```

To:

```js
const API_URL = 'http://localhost:3003/api/recipes';
```

(or `http://127.0.0.1:3003/api/recipes` if you used IPv4)

---

## 🖥️ Auto-Serving Frontend via Backend

In this project, the backend server is configured to **automatically serve the frontend**.

This means:

When you run:
```bash
npm start
```
or
```bash
npm run dev
```

Your frontend is served by Express — just visit http://localhost:3003/ in your browser after starting the server.
No need to open `index.html` manually — the backend does the work for you.

---

## 🛠️ Features

- Add, view, and delete recipes via the frontend UI
- Full CRUD (Create, Read, Update, Delete) via the backend
- Custom logger middleware for request tracing
- CORS support for frontend-backend interaction
- Favicon support
- CommonJS (`require/module.exports`) used throughout backend
- Environment-based configuration via `.env`
- Clean project structure and modular organization
- Input validation for ratings (0–10) and prep time (positive float)
- SweetAlert2 confirmation for deletions
- Fully mobile-responsive homepage
- Clean formatting with “min” for Prep Time and “/10” for Rating

---

## 🛠️ Tech Stack

- **Node.js** — Runtime for backend JS
- **Express.js** — Routing and middleware
- **MongoDB Atlas** — NoSQL database
- **Mongoose** — MongoDB object modeling
- **CommonJS** — Module system using `require()` and `module.exports`
- **dotenv** — Environment variable support
- **cors** — Handles cross-origin requests
- **nodemon** — Development auto-reloader
- **Vanilla HTML/CSS/JS** — Lightweight frontend with Fetch API

---

## 📂 Project Structure

```
dbwork/
├── backend/
│   ├── models/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
├── .gitignore
├── package.json
└── README.md
```

---

## 🌐 API Testing Endpoint

You can directly test the API using:

👉 **Live (Render)**:  
https://dbwork-api.onrender.com/api/recipes

👉 **Locally** (after starting the server):  
http://localhost:3003/api/recipes  
(or `http://127.0.0.1:3003/api/recipes` if IPv4 is used)

This endpoint supports **GET** requests to retrieve all recipes.

---

## 🔗 API Endpoints

| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| GET    | `/api/recipes`     | Fetch all recipes         |
| POST   | `/api/recipes`     | Create a new recipe       |
| PATCH  | `/api/recipes/:id` | Update a recipe by ID     |
| DELETE | `/api/recipes/:id` | Delete a recipe by ID     |

### Example POST:
```json
{
  "name": "Chapati",
  "chef": "Mama Amina",
  "ingredients": "Flour, Water, Salt",
  "prepTime": 30,
  "rating": 5
}
```

---

## 🎨 Frontend UI

- Form to submit recipes
- Table displays all recipes
- Delete buttons for each row
- Uses Fetch API for HTTP calls
- Served via Express (`app.use(express.static(...))`)
- Automatically loads from `http://[::1]:3003/` if run locally
- Includes `favicon.ico`

---

## 📄 Logger Middleware Output

```txt
--- Incoming Request ---
Method: POST
Path:   /api/recipes
Body: {
  "name": "Pizza",
  "chef": "Gordon Ramsay"
}
------------------------
```

### Middleware Highlights:
- Logs only if body is not empty
- Neatly formatted with `JSON.stringify(req.body, null, 2)`
- Executes before all routes
- Uses `next()` to continue

---

## 🔐 Security & Best Practices

- `.env` is excluded via `.gitignore`
- Uses `express.json()` to safely parse body
- Includes error handling middleware
- Protects against malformed IDs and validation issues

---

## 🔮 Future Enhancements

- Add in-place editing on frontend
- Add login system using JWT
- Form validation and error display
- Pagination, filtering, and search
- Hosting backend (Render) + frontend (Vercel or GitHub Pages)

---

## 📦 Release Notes

**v1.0.0** (stable):
- Complete CRUD API
- Dynamic (responsive) homepage via Express
- Favicon support
- Custom logger
- CommonJS throughout
- IPv6 hosting ready

---

## 📦 Dependencies

To see all required libraries and dependencies (both backend and frontend), refer to the `package.json` file in the `backend/` folder.

You’ll find key packages like:
- express
- mongoose
- dotenv
- nodemon (for dev mode)
- cors
- mongodb

To install all required packages:
```bash
npm install
```

This pulls everything needed to run the project locally.

---

## 🧠 Final Tip

Be sure to switch between cloud and local API endpoints in `frontend/script.js` depending on your environment (online or offline testing).

You're now ready to explore, tweak, and extend this project however you'd like!

---

## 📜 License

MIT License — free to use and modify.

---

## 🤝 Contributing

PRs are welcome! Fork the repo, make changes, and submit a pull request.

---

## 🙌 Author
Built by **Collins Mwangi** 🧠
