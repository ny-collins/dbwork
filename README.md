# 🍽️ DBWork - Recipe Management API

Welcome to **DBWork**, a simple and clean RESTful API for managing recipes. This project is designed as a beginner-friendly backend system using Node.js, Express, and MongoDB.

> This project is perfect for learning backend development concepts like API routing, MongoDB integration, request handling, and project structure organization.

---

## 🚀 Features

- Create and store recipes in a MongoDB database
- Retrieve a list of all recipes
- Error handling and request logging
- Environment variable management with dotenv
- Modular and scalable project structure

---

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime environment
- **Express.js** — Web framework for Node.js
- **MongoDB** — NoSQL database
- **Mongoose** — Elegant MongoDB object modeling
- **dotenv** — Load environment variables securely
- **nodemon** — Development utility to auto-restart server on changes

---

## 📁 Folder Structure

```
/dbwork
 ├── controllers/
 │    └── recipes.js      # API route handlers for recipes
 ├── models/
 │    └── recipe.js        # Mongoose schema for recipes
 ├── utils/
 │    ├── config.js        # Configuration settings (MongoDB URI, Port)
 │    ├── logger.js        # Simple logger functions
 │    └── middleware.js    # Middleware for logging, errors, unknown endpoints
 ├── .env                  # Environment variables (excluded from Git)
 ├── .gitignore
 ├── package.json
 ├── app.js               # Main Express application setup
 └── index.js             # Server entry point
```

---

## 🔑 Setup and Installation

### Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB Atlas Account (or local MongoDB installation)

### Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/dbwork.git
cd dbwork
```

2. **Install dependencies:**

```bash
npm install mongoose mongodb dotenv express nodemon
```

3. **Set up environment variables:**

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URL=<your_mongodb_connection_string_here>
```

4. **Run the application:**

For production:

```bash
npm start
```

For development (auto-restart on save):

```bash
npm run dev
```

Server will start at: `http://localhost:3000/`

---

## 📚 API Endpoints

| Method | URL            | Description       |
| ------ | -------------- | ----------------- |
| GET    | `/api/recipes` | Fetch all recipes |
| POST   | `/api/recipes` | Add a new recipe  |

### Example POST request body:

```json
{
  "name": "Spaghetti Bolognese",
  "chef": "Gordon Ramsay",
  "ingredients": "Spaghetti, minced meat, tomato sauce",
  "prepTime": 45,
  "rating": 5
}
```

---

## 🛡️ Security Tips

- **Always** add `.env` to your `.gitignore` to avoid leaking secrets.
- Never hardcode database URIs or passwords inside your source code.

---

## 🚀 Future Improvements

- Add Update and Delete (CRUD complete)
- User authentication (JWT based)
- Input validation using libraries like `Joi`
- Deploy to platforms like Render, Vercel, or Heroku

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 💬 Contact

Created by [Collins Mwangi](https://github.com/ny-collins) - feel free to reach out!

