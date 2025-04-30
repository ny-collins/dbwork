# 🍽️ DBWork - Recipe Management API

Welcome to **DBWork**, a simple and clean RESTful API for managing recipes. This project is designed as a beginner-friendly full-stack app using Node.js, Express, MongoDB, and a lightweight HTML/CSS/JavaScript frontend.

> This project is perfect for learning backend development, API design, and how to connect frontends to backends using real-world practices.

---

## 🚀 Features

- Full CRUD operations (Create, Read, Update, Delete)
- MongoDB database with Mongoose schema
- Express backend with structured controllers and middleware
- Frontend using plain HTML/CSS/JavaScript
- Live reload support using nodemon
- CORS enabled for safe frontend-backend communication
- Modern, responsive UI styling
- Logger middleware that cleanly prints request method, path, and body
- Static homepage served directly from Express

---

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime environment
- **Express.js** — Backend web framework
- **MongoDB Atlas** — Cloud NoSQL database
- **Mongoose** — Object modeling for MongoDB
- **dotenv** — Securely store credentials
- **cors** — Cross-origin request support
- **nodemon** — Auto-restarts the server during development
- **Vanilla JS + HTML + CSS** — Clean and modern UI

---

## 📁 Folder Structure

```
/dbwork
├── controllers/           # Route logic
├── models/                # Mongoose schema
├── utils/                 # Config, logger, middleware
├── frontend/              # HTML, CSS, JavaScript client
│   ├── index.html         # Recipe Manager UI
│   ├── script.js          # Frontend JS logic
│   └── style.css          # UI styling
├── app.js                 # Express app with static file serving
├── index.js               # Server entry
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (not committed)
└── .gitignore             # Files to exclude from git
```

---

## 🔧 Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Atlas or local MongoDB setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/dbwork.git
cd dbwork
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
PORT=[::1]:3003
MONGO_URL=your_mongodb_connection_string_here
```

### 4. Start the Server
```bash
npm run dev
```
Your server will run on:
```
http://[::1]:3003
```

---

## 🖥️ Frontend Access

Once the server is running, simply visit:
```
http://[::1]:3003/
```
You will land on the **Recipe Manager UI**, served directly by Express.

The frontend interacts live with the backend API at:
```
http://[::1]:3003/api/recipes
```

---

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/recipes`       | Get all recipes |
| POST   | `/api/recipes`       | Add a new recipe |
| PATCH  | `/api/recipes/:id`   | Update a recipe |
| DELETE | `/api/recipes/:id`   | Delete a recipe |

### Example POST Request Body:
```json
{
  "name": "Pancakes",
  "chef": "Chef Collins",
  "ingredients": "Flour, Eggs, Milk",
  "prepTime": 20,
  "rating": 5
}
```

---

## 🎨 Frontend Features
- Beautiful form for adding recipes
- Responsive table displaying recipe list
- Delete button per row (more actions coming)
- Styled using clean `style.css`
- Fully integrated with backend via Fetch API

---

## 📦 Middleware Features

### Logger
Logs each request with clean formatting:
```
--- Incoming Request ---
Method: POST
Path:   /api/recipes
Body: {
  "name": "Chapati",
  "chef": "Chef Amina"
}
------------------------
```

### Error Handling
Returns structured JSON errors for:
- Unknown endpoints
- Validation issues
- Malformed Mongo IDs

---

## 🧠 Learning Highlights
- Serve static frontend from Express
- Use of CORS for cross-origin frontend access
- Environment variable loading with `.env`
- Middleware: custom logging and error handling
- RESTful API design and structure

---

## 🛡️ Security
- `.env` is ignored via `.gitignore` to prevent secrets from leaking
- CORS is explicitly enabled for safe frontend access

---

## 🧹 Future Improvements
- Edit/update buttons in UI
- User authentication (login, tokens)
- Pagination and search filters
- Hosting backend + frontend on Render or Vercel
- Better form validation and error messages

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Pull requests are welcome! If you want to add features or fix bugs, feel free to fork the project and submit your changes.

---

## 🙌 Acknowledgments

Built with ❤️ by Collins with guidance from ChatGPT.

