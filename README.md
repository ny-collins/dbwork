# 🍽️ DBWork - Recipe Management API

Welcome to **DBWork**, a clean full-stack Recipe Management API and frontend UI designed using modern JavaScript, Node.js, and MongoDB. This version includes a professional logger, full CRUD support, CommonJS module system, static homepage with favicon, and a clean HTML/CSS/JS frontend.

> This project is ideal for developers learning how to build an Express API, manage MongoDB, and integrate a responsive frontend.

---

## 🚀 Features

- RESTful API using Express and MongoDB
- Full CRUD (Create, Read, Update, Delete)
- Frontend UI using plain HTML, CSS, and JavaScript
- Custom logger middleware for request tracing
- CORS support for frontend-backend interaction
- Static homepage served via Express
- Favicon support
- CommonJS (`require/module.exports`) used throughout backend
- Environment-based configuration via `.env`
- Clean project structure and modular organization

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

## 🗂️ Folder Structure

```
dbwork/
├── controllers/           # API route handlers
├── models/                # Mongoose schema
├── utils/                 # Logger, middleware, config
├── frontend/              # Frontend files (served statically)
│   ├── index.html         # Homepage UI
│   ├── script.js          # Fetch-based frontend logic
│   ├── style.css          # UI styling
│   └── favicon.ico        # Tab icon
├── .env                   # Local environment vars (ignored)
├── .gitignore             # Ignored files (e.g., node_modules, .env)
├── app.js                 # Main Express app logic
├── index.js               # Server entry point
├── package.json           # Scripts and dependencies
```

---

## ⚙️ Setup Instructions

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/dbwork.git
cd dbwork
npm install
```

### 2. Environment Configuration
Create a `.env` file:
```env
PORT=[::1]:3003
MONGO_URL=your_mongodb_connection_string
```

### 3. Run the Server
```bash
npm run dev
```
✅ Server will run on `http://[::1]:3003`
✅ Homepage served at: `http://[::1]:3003/`
✅ Backend API available at: `http://[::1]:3003/api/recipes`

---

## 🌍 IPv6 Support
This project runs on the **IPv6 loopback address** `[::1]`, allowing advanced networking compatibility.
Make sure your browser accepts:
```
http://[::1]:3003/
```
Square brackets are required around IPv6 addresses in URLs.

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
- Automatically loads from `http://[::1]:3003/`
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
- Static homepage via Express
- Favicon support
- Custom logger
- CommonJS throughout
- IPv6 hosting ready

---

## 📜 License

MIT License — free to use and modify.

---

## 🤝 Contributing

PRs are welcome! Fork the repo, make changes, and submit a pull request.

---

## 🙌 Author
Built by **Collins** — maintained with help from ChatGPT 🧠

